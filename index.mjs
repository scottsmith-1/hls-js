import { createReadStream } from 'fs'
import { createServer } from 'http'
import { extname, join } from 'path'

const mimeTypes = {
  html: 'text/html; charset=utf-8',
  ico: 'image/x-icon',
  js: 'text/javascript',
  mjs: 'text/javascript',
}

function listener(req, res) {
  const paths = [process.cwd(), req.url]
  if (req.url.endsWith('/')) paths.push('index.html')

  const filePath = join(...paths)

  const ext = extname(filePath).substring(1).toLowerCase()
  const mimeType = mimeTypes[ext]
  const statusCode = 200

  res.writeHead(statusCode, { 'content-type': mimeType })
  createReadStream(filePath).pipe(res)

  console.log(`${req.method} ${req.url} ${statusCode}`)
}

const server = createServer(listener)

server.listen(8080, () => console.log('Server listening'))
