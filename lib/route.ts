import { IncomingMessage, ServerResponse } from "http"

interface Route {
    url: string
    method: string
    requestHandler: Function
}

export {
    Route
}