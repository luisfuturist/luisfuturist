import { NodeHtmlMarkdown } from 'node-html-markdown'
import { writeFileSync } from 'node:fs'
import ReactDOMServer from 'react-dom/server'
import * as vite from 'vite'

const config = {
  main: {
    entry: './src/README.mdx',
    dist: './README.md',
  },
}

async function main() {
  console.time('\x1b[32m✓ built in');
  console.log('\x1b[32mbuilding...\x1b[0m')

  const server = await vite.createServer()

  const readmeComponent = (await server.ssrLoadModule(config.main.entry))
    .default
  const renderAsString = ReactDOMServer.renderToString(await readmeComponent())
  const markdown = NodeHtmlMarkdown.translate(renderAsString)

  await server.close()

  writeFileSync(config.main.dist, markdown)

  console.timeEnd('\x1b[32m✓ built in');
}

main()
