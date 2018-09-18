export interface Hashable {
  hashCode: () => number;
}

export function hash(arg: any): number {
  if (typeof arg === "number") {
    return stringHash(arg.toString());
  } else if (typeof arg === "string") {
    return stringHash(arg);
  } else if (typeof arg === "undefined") {
    return 1534124234;
  } else if (typeof arg === "boolean") {
    return stringHash(arg.toString());
  } else if (typeof arg === "function") {
    return 4325431234;
  } else if (typeof arg === "object") {
    if (arg instanceof Date) {
      return stringHash((arg as Date).getTime().toString());
    } else if (arg === null) {
      return 2345174394;
    } else if (isHashable(arg)) {
      return arg.hashCode();
    } else {
      return hashObject(arg);
    }
  } else {
    // This is probably a Symbol, fallback to using toString()
    return stringHash(arg.toString());
  }
}

export function isHashable(obj: any): obj is Hashable {
  return obj != null && typeof obj.hashCode === "function";
}

function stringHash(str: string): number {
  if (str.length === 0) {
    return 0;
  } else {
    let aHash = 0;
    for (let i = 0; i < str.length; i += 1) {
      const chr = str.charCodeAt(i);
      aHash = (aHash << 5) - aHash + chr;
      aHash |= 0;
    }
    return aHash;
  }
}

function hashObject(obj: {[key: string]: any}): number {
  let result = 0;
  for (const property in obj) {
    if (obj.hasOwnProperty.call(obj, property)) {
      result += stringHash(property + hash(obj[property]));
    }
  }

  return result;
}
