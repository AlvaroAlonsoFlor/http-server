import getPathParams, {isRouteMatchForRequest} from "./get-path-params";

describe('getPathParams', () => {
    it('should extract parameters from a url', () => {
        const route = 'user/:id'
        const path = 'user/1'

        const params = getPathParams(route, path)

        expect(params).toEqual({
            id: '1'
        })
    })

    it('should extract multiple parameters from a url', () => {
        const route = 'user/:userId/form/:formId/foo/:bar'
        const path = 'user/1/form/1234/foo/barista'

        const params = getPathParams(route, path)


        expect(params).toEqual({
            userId: '1',
            formId: '1234',
            bar: 'barista'
        })
    })

    it('should return empty params when none provided', () => {
        const route = 'user/something'
        const path = 'user/somethingElse'

        const params = getPathParams(route, path)

        expect(params).toEqual({})
    })
})

describe('routeMatcher', () => {
    it('should match a correct route', () => {
        // Given
        const path = '/user/:id'
        const requestPath = '/user/21'

        // When
        const result = isRouteMatchForRequest(path, requestPath)

        // Then
        expect(result).toBe(true)
    })

    it('should not return a match if there is no correct route', () => {
        // Given
        const path = '/user/:id'
        const requestPath = '/21'

        // When
        const result = isRouteMatchForRequest(path, requestPath)

        // Then
        expect(result).toBe(false)

    })
})