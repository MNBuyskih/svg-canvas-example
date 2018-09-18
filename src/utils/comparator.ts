/**
 * A type that represents a function that sorts the values A and B.
 *
 * * A should appear before B, if the returned value is less than 0.
 * * A should appear after B, if the returned value is greater than 1.
 * * A and B are equal, if the returned value is 0.
 */
export type Comparator<T> = (a: T, b: T) => number;

type Predicate<T> = (a: T, b: T) => boolean;

/**
 * A comparator that sorts strings or numbers in ascending order.
 *
 * @see {@link desc}
 */
export function asc<T extends string | number>(a: T, b: T): number {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return a < b ? -1 : a === b ? 0 : 1;
  }
}

/**
 * A comparator that sorts strings or numbers in descending order.
 *
 * @see {@link asc}
 */
export function desc<T extends string | number>(a: T, b: T): number {
  if (typeof a === "number" && typeof b === "number") {
    return b - a;
  } else {
    return b < a ? -1 : a === b ? 0 : 1;
  }
}

/**
 * Returns a comparator that invokes `then` if A and B are greater than the given value. Otherwise
 * the `or` comparator is invoked.
 *
 * @see {@link lessThan}
 */
export function moreThan(value: number, then: Comparator<number>, or: Comparator<number>): Comparator<number> {
  return ifThen((a, b) => a > value && b > value, then, or);
}

/**
 * Returns a comparator that invokes `then` if A and B are less than the given value. Otherwise
 * the `or` comparator is invoked.
 *
 * @see {@link moreThan}
 */
export function lessThan(value: number, then: Comparator<number>, or: Comparator<number>): Comparator<number> {
  return ifThen((a, b) => a < value && b < value, then, or);
}

/**
 * Returns a comparator that will ensure the given value always appears before any other value.
 *
 * @see {@link deprioritize}
 */
export function prioritize<T>(value: T, or: Comparator<T>): Comparator<T> {
  return (a, b) => {
    if (a === value) {
      return -1;
    } else if (b === value) {
      return 1;
    } else {
      return or(a, b);
    }
  };
}

/**
 * Returns a comparator that will ensure the given value always appears after any other value.
 *
 * @see {@link prioritize}
 */
export function deprioritize<T>(value: T, or: Comparator<T>): Comparator<T> {
  return (a, b) => {
    if (a === value) {
      return 1;
    } else if (b === value) {
      return -1;
    } else {
      return or(a, b);
    }
  };
}

/**
 * Returns a comparator that invokes `then` if the given predicate returns `true`. Otherwise `or`
 * is invoked.
 */
export function ifThen<T>(predicate: Predicate<T>, then: Comparator<T>, or: Comparator<T>): Comparator<T> {
  return (a, b) => (predicate(a, b) ? then(a, b) : or(a, b));
}
