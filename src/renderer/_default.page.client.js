import { createApp } from '../main'

export { render }

async function render(pageContext) {
  const { app } = createApp()
  app.mount('#app')
}