const express = require('express')
const sectionRouter = express.Router()
const Section = require('../models/section_schema')

sectionRouter.get('/', async (req, res) => {
    try{
      const sections = await Section.find()
      res.json(sections)
    }catch(err){
      res.send('error ' + err)
    }
  })

module.exports = sectionRouter