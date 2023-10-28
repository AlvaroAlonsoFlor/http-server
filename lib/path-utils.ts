import { type Key, pathToRegexp } from 'path-to-regexp'

export function getPathParams (apiPath: string, requestPath: string): Record<string, string> {
  const keys: Key[] = []
  const regexp = pathToRegexp(apiPath, keys)
  const result = regexp.exec(requestPath) as RegExpExecArray
  const params: Record<string, string> = {}

  keys.forEach((key: Key, index: number) => {
    const paramValueIndex = index + 1
    params[key.name] = result[paramValueIndex]
  })
  return params
}

export function isRouteMatchForRequest (apiPath: string, requestPath: string): boolean {
  const regexp = pathToRegexp(apiPath)
  const result = regexp.exec(requestPath)

  return result != null
}
