const express = require('express')
const morgan = require('morgan')

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()

////// Middleware //////

//GET /api/v1/tours 200 2.847 ms - 8565
app.use(morgan('dev'))
// post json=> Obj
app.use(express.json())

/////////// ROUTES ///////////

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

/////////// START SERVER ///////////

const port = 3000
app.listen(port, () => {
  console.log(`app running on ${port}`)
})
