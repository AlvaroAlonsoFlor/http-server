import http, { IncomingMessage, ServerResponse } from 'http'
import { Route } from './route'

class App {

    server
    routes: Array<Route>
    port

    constructor(routes: Array<Route>, port: Number) {
        this.server = http.createServer()
        this.routes = []
        this.port = port
    }

    addRoutes(routes: Array<Route>) {
        this.routes.concat(routes)
    }

    start() {
        

        this.server.on('request', (req: IncomingMessage, res: ServerResponse) => {
            console.log(`Number of connections: ${this.server.connections}`)
            console.log(`Request: Date [${Date.now()}], URL [${req.url}], METHOD [${req.method}] `)
            this.routes.map((route) => {
                console.log(route.url)
                if (route.url === req.url && route.method === req.method) {
                    route.requestHandler(req, res)
                }
            })

            
        })

        this.server.listen(this.port, () => {
            console.log(`Server listening at port ${this.port}`)
        })
    }

    stop() {
    }
}

function createApp(port: Number = 8080) {
    return new App([], port)
}

export default createApp