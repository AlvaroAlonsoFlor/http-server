import { Key, pathToRegexp } from 'path-to-regexp'

export default function getPathParams (route: string, requestPath: string) {
    let keys: Array<Key> = []
    const regexp = pathToRegexp(route, keys)
    const result = regexp.exec(requestPath) as RegExpExecArray
    const params: Record<string, string> = {}

    keys.forEach((key: Key, index: number) => {
        const paramValueIndex = index + 1
        params[key.name] = result[paramValueIndex]
    })
    return params
}