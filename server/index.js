const express = require('express')
      bodyParser = require('body-parser')
      cors = require('cors')
      massive = require('massive')
require('dotenv').config()

const contact_controller = require('./contact_controller')

const app = express()
app.use(bodyParser.json() )
app.use(cors())

massive(process.env.DB_CONNECTION).then( db => {
    app.set( 'db', db)
})


app.get('/getContact', contact_controller.getContact)
app.post('/addContact', contact_controller.addContact)

app.listen( process.env.SERVER_PORT, () => {console.log('listening on port 3005')})