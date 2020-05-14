const express = require('express')
const morgan = require('morgan')

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()

////// Middleware //////

//GET /api/v1/tours 200 2.847 ms - 8565
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}
// post json=> Obj
app.use(express.json())
// DOM http://127.0.0.1:3000/overview.html
app.use(express.static(`${__dirname}/public`))

/////////// ROUTES ///////////

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

module.exports = app
