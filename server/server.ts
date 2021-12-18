import type {Request, Response} from 'express'
import express from 'express'
import {memoize} from 'lodash'
import bodyParser from 'body-parser'

type RouteResponse = {
  data: {}
}

const getApp = memoize(express)

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

export function startServer() {
  const app = getApp()
  app.listen(3000, () => console.info('Server listening on 3000...'))
}
