import {
  createCard,
  createFolder,
  deleteCard,
  updateCard,
  updateFolder,
  getRootFolder,
  deleteFolder,
} from './db'
import {del, get, post, put, startServer} from './server'

// Throw on unhandled rejected promises
process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason)
  process.exit(1)
})

function main() {
  // Read cards
  get('/api/cards', async () => {
    return {
      data: await getRootFolder(),
    }
  })

  // Create card
  post('/api/cards', async (req) => {
    return {
      data: await createCard(
        req.body.parentFolderID,
        req.body.front,
        req.body.back
      ),
    }
  })

  // Edit card
  put('/api/cards/:cardID', async (req) => {
    return {
      data: await updateCard(req.params.cardID, req.body.front, req.body.back),
    }
  })

  // Delete card
  del('/api/cards/:cardID', async (req) => {
    await deleteCard(req.params.cardID)
  })

  // Create folder
  post('/api/folders', async (req) => {
    return {
      data: await createFolder(req.body.parentFolderID, req.body.title),
    }
  })

  // Edit folder
  put('/api/folders/:folderID', async (req) => {
    return {
      data: await updateFolder(req.params.folderID, req.body.title),
    }
  })

  // Delete folder
  del('/api/folders/:folderID', async (req) => {
    await deleteFolder(req.params.folderID)
  })

  startServer()
}

main()
