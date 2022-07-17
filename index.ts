import http from 'http'

const PORT = 8080
const server = http.createServer()

const hi = 'e'

server.on('request', (req, res) => {
    console.log(`Request: Date [${Date.now()}], URL [${req.url}], METHOD [${req.method}] `)
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({
        'message': "Hello visitorr"
    }))
    
})

server.listen(PORT, () => {
    console.log(`Server listening at port [${PORT}]`)
})

