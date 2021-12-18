import {createCard, getRootFolder} from './db'
import {get, post, startServer} from './server'

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
  post('/api/cards/:folderID', async (req) => {
    return {
      data: await createCard(
        req.params.folderID,
        req.body.front,
        req.body.back
      ),
    }
  })

  // Edit card

  // Delete card

  // Create folder

  // Edit folder

  // Delete folder

  startServer()
}

main()
