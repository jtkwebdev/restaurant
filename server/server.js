const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(
    cors({
        origin: "*"
    })
)
require('dotenv').config()
const url = process.env.DATABASE_URL
const PORT = process.env.PORT

mongoose.connect(url)
const con = mongoose.connection
con.on('open', ()=>{
    console.log('fids connected ')
})

app.use(express.json())

const menuRouter = require('./routes/menuRouter')
app.use('/menus', menuRouter)

const sectionRouter = require('./routes/sectionRouter')
app.use('/sections', sectionRouter)

const itemRouter = require('./routes/itemRouter')
app.use('/items', itemRouter)

const ingredientRouter = require('./routes/ingredientRouter')
app.use('/ingredients', ingredientRouter)

const twilioRouter = require('./routes/twilioRouter')
app.use('/twilio', twilioRouter)

app.listen(PORT,()=>{
    console.log('fids server started on port', PORT)
})
