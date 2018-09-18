import {differentSvg} from "svgs/differentSvg";
import {sameSvg} from "svgs/sameSvg";
import {rasterizeSVG} from "utils/rasterize";

export default async function (svgType: "sameDomain" | "differentDomain") {
  const svg = svgType === "sameDomain" ? sameSvg : differentSvg;
  loadSvg(svg);

  console.time(svgType);
  try {
    await renderSvg(svg);
  } catch (e) {
    alert(e.toString());
  }
  console.timeEnd(svgType);
}

function getTarget(target: string) {
  const div = document.querySelector(target);
  if (!div) {
    throw new Error(`Can't find target ${target}`);
  }
  return div;
}

function loadSvg(svg: string) {
  const div = getTarget("#target_svg");

  div.innerHTML = svg;
}

async function renderSvg(svg: string) {
  const width = 663;
  const height = 674;
  const src = await rasterizeSVG(svg, {width, height}, {
    fetch: (url) => {
      return fetch(url);
    },
  }, true);

  const canvas = getTarget("#target_canvas") as HTMLCanvasElement;
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  context.clearRect(0, 0, width, height);

  const img = getTarget("#target_image") as HTMLImageElement;
  img.onload = () => {
    context.drawImage(img, 0, 0);
  };
  img.src = src;
}