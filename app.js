//引入模块
const Koa = require('koa')
const app = new Koa()

const views = require('koa-views')//视图
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')//解析post数据
const logger = require('koa-logger')

const index = require('./routes/index')//路由
const thingRouter = require('./routes/thingRoute')

const cors = require('koa2-cors')

// error handler
onerror(app)

//引入中间件
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(cors())
app.use(require('koa-static')(__dirname + '/public'))//静态文件

app.use(views(__dirname + '/views', {
  extension: 'html'//view格式
}))



// logger记录器
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes路由
app.use(index.routes(), index.allowedMethods())
app.use(thingRouter.routes(), index.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
