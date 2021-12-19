import type {Request, Response} from 'express'
import express from 'express'
import {memoize} from 'lodash'
import bodyParser from 'body-parser'
import {createServer} from 'https'
import {readFileSync} from 'fs'
import cors from 'cors'

type RouteResponse = {
  data: {}
}

const getApp = memoize(() =>
  express().use(
    cors({
      origin: '*',
      credentials: true, //access-control-allow-credentials:true
    })
  )
)

export function get(
  route: string,
  fn: (req: Request, res: Response) => Promise<RouteResponse>
) {
  const app = getApp()
  app.get(route, async (req, res) => {
    const data = await fn(req, res)
    res.json(data)
  })
}

export function post(
  route: string,
  fn: (req: Request, res: Response) => Promise<RouteResponse>
) {
  const app = getApp().use(bodyParser.json())
  app.post(route, async (req, res) => {
    try {
      res.json(await fn(req, res))
    } catch (e) {
      res.status(400).json({
        error: (e as any).message,
      })
    }
  })
}

export function put(
  route: string,
  fn: (req: Request, res: Response) => Promise<RouteResponse>
) {
  const app = getApp().use(bodyParser.json())
  app.put(route, async (req, res) => {
    try {
      res.json(await fn(req, res))
    } catch (e) {
      res.status(400).json({
        error: (e as any).message,
      })
    }
  })
}

export function del(
  route: string,
  fn: (req: Request, res: Response) => Promise<void>
) {
  const app = getApp()
  app.delete(route, async (req, res) => {
    try {
      await fn(req, res)
      res.json({})
    } catch (e) {
      res.status(400).json({
        error: (e as any).message,
      })
    }
  })
}

export function startServer() {
  const app = getApp()
  const server = createServer(
    {
      key: readFileSync('./test-certs/key.pem', 'utf8'),
      cert: readFileSync('./test-certs/cert.pem', 'utf8'),
    },
    app
  )
  server.listen(3000, () => console.info('Server listening on 3000...'))
}
