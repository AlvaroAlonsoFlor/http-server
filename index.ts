import http from 'http'
import createApp from './lib/app'

const app = createApp()

app.start()

// server.on('request', (req, res) => {
//     console.log(`Request: Date [${Date.now()}], URL [${req.url}], METHOD [${req.method}] `)
//     res.setHeader('Content-Type','application/json')
//     res.end(JSON.stringify({
//         'message': "Hello visitorr"
//     }))
    
// })


