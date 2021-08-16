const { loadNuxt } = require('nuxt')
const serverless = require('serverless-http')
const app = require('express')()
// Get a ready to use Nuxt instance

exports.handler = async (event, context) => {
  // const nuxt = new Nuxt('../../nuxt.config.js')
  const nuxt = loadNuxt('start')
  app.use(nuxt.render)
  const handler = serverless(app)

  const result = await handler(event, context)
  return result
}
