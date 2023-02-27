const { Schema, model } = require('mongoose')

const sectionSchema = new Schema({
    name: {
      type: String,
      required: [true, 'name field is required']
    },
    choice: {
      type: Number,
      required: [false,"not required"]
    }
  })

  module.exports = model('section', sectionSchema)