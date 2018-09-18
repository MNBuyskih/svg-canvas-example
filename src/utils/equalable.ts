declare const _: any;
import {isHashable} from "utils/hashable";
import {Keyable} from "utils/keyable";
import {entries} from "utils/objects";

export interface Equatable {
  equals(object: any): boolean;
}

/**
 * Checks that `a` and `b` are deeply equal. This function will check if an object or an
 * element inside a collection (Array, ES6 Map, ES6 Set) implements the `Equatable`
 * interface. If it does, then it invoke the object's `equals` method. Otherwise, this falls
 * back to using a standard `===` check.
 *
 * When comparing objects, this function will not check values defined on the object's
 * prototype.
 */
export function equals(a: any, b: any): boolean {
  if (a === b) {
    return true;
  } else if (a != null) {
    if (isHashable(a) && isHashable(b) && a.hashCode() !== b.hashCode()) {
      return false;
    } else if (isEquatable(a)) {
      return a.equals(b);
    } else if (a instanceof Array && b instanceof Array) {
      return areArraysEqual(a, b);
    } else if (a instanceof Map && b instanceof Map) {
      return areMapsEqual(a, b);
    } else if (a instanceof Set && b instanceof Set) {
      return areSetsEqual(a, b);
    } else if (isPlainObject(a) && isPlainObject(b)) {
      return arePlainObjectsEqual(a, b);
    } else {
      return _.isEqual(a, b);
    }
  } else {
    return _.isEqual(a, b);
  }
}

export function shallowEquals(a: Maybe<Record<string, any>>, b: Maybe<Record<string, any>>): boolean {
  a = a || {};
  b = b || {};
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (!equals(aKeys, bKeys)) {
    return false;
  } else {
    for (const key of aKeys) {
      if (a[key] !== b[key]) {
        return false;
      }
    }
    return true;
  }
}

function isEquatable(obj: any): obj is Equatable {
  return obj != null && typeof obj.equals === "function";
}

function areArraysEqual(a: any[], b: any[]): boolean {
  if (a.length === b.length) {
    return isAllValuesEqualForKeys(a, index => equals(a[index], b[index]));
  } else {
    return false;
  }
}

function areMapsEqual(a: Map<any, any>, b: Map<any, any>): boolean {
  if (a.size === b.size) {
    return isAllValuesEqualForKeys(a, key => equals(a.get(key), b.get(key)));
  } else {
    return false;
  }
}

function areSetsEqual(a: Set<any>, b: Set<any>): boolean {
  if (a.size === b.size) {
    // This looks non-optimal, but we need to iterate over all the values in the
    // set to use our version of `equals` instead of `===`.
    return isAllValuesEqualForKeys(a, keyA => {
      return isSomeValuesEqualForKeys(b, keyB => equals(keyA, keyB));
    });
  } else {
    return false;
  }
}

/**
 * Iterates over all keys in `keyable` and passes it to the provided equals function.
 * Returns `true` if all keys passed to `equals` is true.
 */
function isAllValuesEqualForKeys<K>(keyable: Keyable<K>, equalsFn: (key: K) => boolean): boolean {
  const keys = keyable.keys();

  let result = keys.next();
  while (!result.done) {
    if (!equalsFn(result.value)) {
      return false;
    }
    result = keys.next();
  }

  return true;
}

/**
 * Iterates each key in `keyable` and passes it to the provided equals function.
 * Returns `true` if once `equals` returns `true`. Otherwise `false.
 */
function isSomeValuesEqualForKeys<K>(keyable: Keyable<K>, equalsFn: (key: K) => boolean): boolean {
  const keys = keyable.keys();

  let result = keys.next();
  while (!result.done) {
    if (equalsFn(result.value)) {
      return true;
    }
    result = keys.next();
  }

  return false;
}

function arePlainObjectsEqual(a: any, b: any): boolean {
  const keys1 = entries(a);
  const keys2 = entries(b);
  if (keys1.length === keys2.length) {
    for (const key1 of keys1) {
      const [key] = key1;
      if (!equals(a[key], b[key])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function isPlainObject(obj: any): boolean {
  return typeof obj === "object" && !(obj instanceof Date);
}
