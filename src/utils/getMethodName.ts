export function getMethodName(method: string): keyof ElementEventMap {
  return ('on' +
    method[0].toUpperCase() +
    method.slice(1)) as keyof ElementEventMap
}
