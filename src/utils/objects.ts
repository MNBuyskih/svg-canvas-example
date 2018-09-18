export function entries<T>(obj: T): [keyof T, T[keyof T]][] {
  const arr: [keyof T, T[keyof T]][] = [];
  for (const key in obj) {
    /* istanbul ignore else */
    if (obj.hasOwnProperty == null || (obj.hasOwnProperty(key) && obj.propertyIsEnumerable(key))) {
      arr.push([key, obj[key]]);
    }
  }
  return arr;
}
