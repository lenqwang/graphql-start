const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

module.exports = app => {
  app.use(bodyParser())
    .use(cors())
}