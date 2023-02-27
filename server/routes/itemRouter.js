const express = require('express')
const itemRouter = express.Router()
const Item = require('../models/item_schema')

itemRouter.get('/', async (req, res) => {
    try{
      const items = await Item.find()
      res.json(items)
    }catch(err){
      res.send('error ' + err)
    }
  })

module.exports = itemRouter