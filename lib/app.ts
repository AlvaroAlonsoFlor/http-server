import http, { IncomingMessage, RequestListener, Server, ServerResponse } from 'http'
import { Route } from './route'

class App {

    server: Server
    routes: Array<string>
    port: Number
    constructor(routes: Array<string>, port: Number) {
        this.server = http.createServer()
        this.routes = routes
        this.port = port
    }

    start() {
        // this.mountRoutes()
        // this.server.on((req))
        
        const routes: Array<Route> = [{
            url: '/hello',
            method: 'GET',
            requestHandler: (req: IncomingMessage, res: ServerResponse ) => {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({
                    'message': "Hello from the routes"
                }))
            }
        },
        {
            url: '/user/1',
            method: 'GET',
            requestHandler: (req: IncomingMessage, res: ServerResponse ) => {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({
                    'id': '1234',
                    'name': 'John',
                    'surname': 'Smith'
                }))
            }
        }]


        this.server.on('request', (req: IncomingMessage, res: ServerResponse) => {
            console.log(`Request: Date [${Date.now()}], URL [${req.url}], METHOD [${req.method}] `)
            routes.map((route) => {
                if (route.url === req.url && route.method === req.method) {
                    route.requestHandler(req, res)
                }
            })
            // res.setHeader('Content-Type', 'application/json')
            // res.end(JSON.stringify({
            //     'message': "Hello visitorr"
            // }))

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