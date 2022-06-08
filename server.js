//includes
const express = require('express')
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
//const cors = require('cors')
const req = require('express/lib/request')
const passport = require('passport')
const session = require('express-session')
const authRoutes = require('./routes/auth')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todoRoutes')

//Read .env
require('dotenv').config({path: './config/.env'})
const PORT = process.env.PORT || 8000

//Passport config
require('./config/passport')(passport)
//Connect to database
connectDB()

//Setup express
const app = express()

app.set('view engine', 'ejs')
//Body handler
app.use(express.json())
app.use(express.urlencoded({extended: false}))
/*app.use(cors( {
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))*/

app.use(express.static(__dirname + '/public'))

//Routes
app.use('/', require('./routes/home'))
app.use('/api/todos', todoRoutes)

//Include error handler
app.use(errorHandler)

//Set app to listen
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))