'use strict'
const { loadNuxt } = require('nuxt')
const serverless = require('serverless-http')
const koa = require('koa')
const app = koa()
// Get a ready to use Nuxt instance

exports.handler = async (...params) => {
  const nuxt = await loadNuxt('start')
  app.use(nuxt.render)

  return (...params) => serverless(app)
}
