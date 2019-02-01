const router = require('koa-router')()
const HomeController = require('./controller/home')

module.exports = app => {
  router.get('/categories', HomeController.category)
  router.get('*', async (ctx, next) => {
    ctx.body = 'Not Found!'
  })
  
  app.use(router.routes())
    .use(router.allowedMethods())
}