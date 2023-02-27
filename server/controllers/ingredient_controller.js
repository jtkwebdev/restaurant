'use strict';
const Ingredient = require('../models/ingredient_schema');

const readIngredientData = async (req, res) => {
  try{
    const ingredients = await Ingredient.find();
    res.json(ingredients)
  }catch(err){
    res.send('error ' + err)
  }
};

module.exports = readIngredientData;
