import { renderToString } from 'vue/server-renderer'
import { escapeInject } from 'vite-plugin-ssr/server'
import { createApp } from '../main'

export { render }

async function render(pageContext) {
  const { app } = createApp()
  const appHtml = await renderToString(app)
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vue 3 SSR ToDo App</title>
      </head>
      <body>
        <div id="app">${appHtml}</div>
      </body>
    </html>`
  return { documentHtml }
}