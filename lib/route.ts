import { type IncomingMessage, type ServerResponse } from 'http'

declare function RequestHandler (req: IncomingMessage, res: ServerResponse): void
interface Route {
  url: string
  method: string
  requestHandler: typeof RequestHandler
}

export type {
  Route
}
