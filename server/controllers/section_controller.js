'use strict';
const Section = require('../models/section_schema');

const readSectionData = async (req, res) => {
  try{
    const sections = await Section.find();
    res.json(sections)
  }catch(err){
    res.send('error ' + err)
  }
};

module.exports = readSectionData;
