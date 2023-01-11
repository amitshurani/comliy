const express = require('express')
const morgan=  require('morgan')
const mongoose= require('mongoose')
const comment = require('./routes/comments')
const user = require('./routes/user')
const auth = require('./routes/auth')
const log = require("./middlewares/logger")
const authenticate = require("./middlewares/authentication")
const cors = require('cors')

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/exp2')
  .then( () => console.log('Connected to MongoDB'))
  .catch( err => console.log('coudnt connect to MongoDB') )
  mongoose.set('strictQuery', false);
// console.log(` this is the node env ${process.env.NODE_ENV}`) //und
// console.log(app.get('env')) ///

app.use(cors())
app.use(express.json()); // conver json to javascript and javascript to json
app.use(log)
app.use(authenticate)
app.use(express.static('public'))

if (app.get('env') === 'development')
  app.use(morgan('tiny'))
  
app.use('/api/comments',comment);
app.use('/api/users',user)
app.use('/api/auth',auth)

const port = process.env.PORT || 3002; 

app.listen(port, () => console.log(`active on ${port}`))