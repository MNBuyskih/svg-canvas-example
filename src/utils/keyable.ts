export interface Keyable<T> {
  keys(): IterableIterator<T>;
}

export function isKeyable<T>(obj: any): obj is Keyable<T> {
  return obj != null && typeof obj.keys === "function";
}
