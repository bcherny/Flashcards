import {createCard, updateCard, getRootFolder} from './db'
import {get, post, put, startServer} from './server'

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason)
  process.exit(1)
})

function main() {
  // Read cards
  get('/api/cards', async () => {
    return {
      data: {
        cards: await getRootFolder(),
      },
    }
  })

  // Create card
  post('/api/cards', async (req) => {
    return {
      data: await createCard(req.body.folderID, req.body.front, req.body.back),
    }
  })

  // Edit card
  put('/api/cards/:cardID', async (req) => {
    return {
      data: await updateCard(req.params.cardID, req.body.front, req.body.back),
    }
  })

  // Delete card

  // Create folder

  // Edit folder

  // Delete folder

  startServer()
}

main()
