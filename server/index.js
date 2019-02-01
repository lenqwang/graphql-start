const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const middleware = require('./middleware')
const { port, host } = require('./config')
const server = require('./graphql')

// middleware(app)
// router(app)
server.applyMiddleware({ app })

app.listen(port)
console.log(`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`)