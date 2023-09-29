import http, { IncomingMessage, ServerResponse } from 'node:http'
import { Route } from './route'

let routes: Array<Route> = []

const notFound = (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 404
    res.end(JSON.stringify({
        message: 'Not Found'
    }))
}
class App {

    server
    port

    constructor(port: Number) {
        this.server = http.createServer()
        this.port = port
    }

    addRoutes(newRoutes: Array<Route>) {
        routes = routes.concat(newRoutes)
    }

    start() {
        this.server.on('request', (req: IncomingMessage, res: ServerResponse) => {
            console.log(`Number of connections: ${this.server.connections}`)
            console.log(`Request: Date [${Date.now()}], URL [${req.url}], METHOD [${req.method}] `)
            const routeMatch = routes.find((route) => route.url === req.url && route.method === req.method)

            routeMatch != null ? routeMatch.requestHandler(req, res) : notFound(req, res)

        })

        this.server.listen(this.port, () => {
            console.log(`Server listening at port ${this.port}`)
        })
    }

    stop() {
    }
}

function createApp(port: Number = 8080) {
    return new App(port)
}

export default createApp