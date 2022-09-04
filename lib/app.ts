import http, { Server } from 'http'

class App {

    server: Server 
    routes: Array<string>
    port: Number

    constructor (routes: Array<string>, port: Number) {
        this.server = http.createServer()
        this.routes = routes
        this.port = port
    }

    start () {
        // this.mountRoutes()
        // this.server.on((req))

        this.server.listen(this.port, () => {
            console.log(`Server listening at port ${this.port}`)
        })
    }

    stop () {
    }
}

function createApp (port: Number = 8080) {
    return new App([], port)
}

export default createApp