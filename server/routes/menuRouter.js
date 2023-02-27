const express = require('express')
const menuRouter = express.Router()
const Menu = require('../models/menu_schema')

menuRouter.get('/', async (req, res) => {
    try{
      const menus = await Menu.find()
      res.json(menus)
    }catch(err){
      res.send('error ' + err)
    }
  })

module.exports = menuRouter