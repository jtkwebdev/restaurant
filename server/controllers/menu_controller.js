'use strict';
const Menu = require('../models/menu_schema');

const readMenuData = async (req, res) => {
  try{
    const menus = await Menu.find();
    res.json(menus)
  }catch(err){
    res.send('error ' + err)
  }
};

module.exports = readMenuData;
