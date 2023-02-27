const express = require('express')
const ingredientRouter = express.Router()
const Ingredient = require('../models/ingredient_schema')

ingredientRouter.get('/', async (req, res) => {
    try{
      const ingredients = await Ingredient.find()
      res.json(ingredients)
    }catch(err){
      res.send('error ' + err)
    }
  })

module.exports = ingredientRouter