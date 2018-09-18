export function scan(content: string, regularExpression: RegExp): string[] {
  if (!regularExpression.global) {
    throw new Error("regex must have 'global' flag set");
  }
  const result: string[] = [];
  let match: RegExpExecArray | null;
  do {
    match = regularExpression.exec(content);
    if (match) {
      result.push(...match.slice(1));
    }
  } while (match !== null);
  return result;
}
