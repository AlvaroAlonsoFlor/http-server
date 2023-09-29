import http, { IncomingMessage, ServerResponse } from 'http'
import createApp from './lib/app'
import { Route } from './lib/route'

const app = createApp()

// TODO: params and query params need to be handled
const routes: Array<Route> = [{
    url: '/hello',
    method: 'GET',
    requestHandler: (req: IncomingMessage, res: ServerResponse ) => {
        console.log(`IP address from the request ${res.socket?.remoteAddress}`)
        res.setHeader('Content-Type', 'application/json')
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
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

const secondRouteBatch = [{
    url: '/admin/1',
    method: 'GET',
    requestHandler: (req: IncomingMessage, res: ServerResponse ) => {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({
            'id': '1625',
            'name': 'Jane',
            'surname': 'Smith',
            'permissions': '777'
        }))
    }
}]


app.addRoutes(routes)
app.addRoutes(secondRouteBatch)

app.start()

