import {scan} from "utils/regexp";
import {Url} from "utils/url";

export class RasterizerError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

type Dimensions = { width: number, height: number };
type Client = { fetch: (url: string) => Promise<Response> }

const contentCache: { [url: string]: Promise<string> } = {};

// Any images in the SVG document need to be converted to data URIs
// for "security reasons". This will replace any image URLs as data
// URIs, then draw the SVG doc to a canvas context.
/* istanbul ignore next: ignore for now, hard to test in tsnode */
export async function rasterizeSVG(
    svg: string,
    dimensions: Dimensions,
    client: Client,
    canCache: boolean,
    format: string = "image/png",
): Promise<string> {
  const canvas = document.createElement("canvas");
  canvas.width = dimensions.width;
  canvas.height = dimensions.height;
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  const svg2 = await resolveCssImports(svg, client, canCache);
  const uris = await getSvgAssetsAsDataUris(svg2, client, canCache);
  const svg3 = await replaceUrlsWithDataUris(svg2, uris);
  const img = await loadSvgAsImage(svg3);
  return new Promise<string>((resolve, _) => {
    // Let's skip one more frame, to make sure Chrome won't crash (and it can!)
    // Try to open that in Chrome to see: http://codepen.io/astashov/pen/ZBzaem
    setTimeout(() => {
      context.drawImage(img, 0, 0);
      resolve(canvas.toDataURL(format));
    }, 0);
  });
}

/* istanbul ignore next: ignore for now, hard to test in tsnode */
async function resolveCssImports(svg: string, client: Client, canCache: boolean): Promise<string> {
  const matcher = /@import url\(([^)]+)\)/g;
  const matches = scan(svg, matcher);
  const requests = matches.map(url => {
    if (contentCache[url]) {
      // return contentCache[url];
    }
    return contentCache[url] = getContent(url, client, canCache)
        .then(r => r.text());
  });
  const contents = await Promise.all(requests);
  return contents.reduce<string>((newSvg, content, i) => {
    const importUrl = Url.fromString(matches[i]);
    const importPath = importUrl.pathAsArray.slice(0, importUrl.pathAsArray.length - 1).join("/");
    content = content.replace(/src: url\((.+?)\)/g, (_, url) => {
      url = url.replace(/['"]/g, "");
      // in case the font urls are relative, make them absolute
      if (url.match(/^[^\/]/)) {
        url = importUrl.replacePath(importPath).appendPath(url).toString();
      }
      return `src: url(${url})`;
    });
    return newSvg.replace(`@import url(${matches[i]});`, content);
  }, svg);
}

/* istanbul ignore next: ignore for now, hard to test in tsnode */
function loadSvgAsImage(svg: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const blob = new Blob([svg], {type: "image/svg+xml"});
    const url = URL.createObjectURL(blob);

    const img = new Image();
    img.onload = () => {
      // Pawel: Safari requires this to properly render images
      setTimeout(() => {
        resolve(img);
        URL.revokeObjectURL(url);
      }, 300);
    };
    img.onerror = event => {
      reject(new RasterizerError("Failed to load image from " + (event.target as HTMLImageElement).src));
      URL.revokeObjectURL(url);
    };
    img.src = url;
  });
}

/* istanbul ignore next: ignore for now, hard to test in tsnode */
function replaceUrlsWithDataUris(svg: string, dataUris: string[][]): string {
  return dataUris.reduce((doc, [url, dataUri]) => {
    return doc.replace(url, dataUri);
  }, svg);
}

/* istanbul ignore next: ignore for now, hard to test in tsnode */
function getSvgAssetsAsDataUris(svg: string, client: Client, canCache: boolean): Promise<string[][]> {
  const imageMatcher = /xlink:href="(.+?)"/g;
  const fontMatcher = /src: url\((.+?)\)/g;
  const matches = [imageMatcher, fontMatcher].reduce<string[]>((memo, matcher) => {
    return memo.concat(scan(svg, matcher));
  }, []);
  const requests = matches.map(url => getDataUri(url, client, canCache));

  return Promise.all(requests).then(urls => {
    return urls.map((url, index) => [matches[index], url]);
  });
}

/* istanbul ignore next: ignore for now, hard to test in tsnode */
function getDataUri(url: string, client: Client, canCache: boolean): Promise<string> {
  if (contentCache[url]) {
    // return contentCache[url];
  }
  return contentCache[url] = getContent(url, client, canCache).then(r => r.blob())
      .then(blob => readBlobAsDataUrl(blob, url));
}

/* istanbul ignore next: ignore for now, hard to test in tsnode */
function getContent(url: string, client: Client, canCache: boolean): Promise<Response> {
  if (!canCache) {
    // Pawel: On chrome, with enabled prefetch caching S3 doesn't expose right CORS tags and this causes
    // Chrome to be confused about CORS, we have decided that the best workaround for this for now (until S3 is fixed)
    // is to add nounce to every request we are fetching.
    const nonce = Math.floor(Math.random() * new Date().getTime()).toString();
    const params: Record<string, string | null> = {};
    params[nonce] = null;
    url = Url.fromString(url).appendParams(params).toString();
  }

  return client
      .fetch(url)
      .catch(error => {
        throw new RasterizerError("Fetch error for url " + url);
      });
}

/* istanbul ignore next: ignore for now, hard to test in tsnode */
function readBlobAsDataUrl(blob: Blob, debugUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.onerror = () => {
      reject(new RasterizerError("FileReader error for url " + debugUrl));
    };
    reader.readAsDataURL(blob);
  });
}
