const { Schema, model } = require('mongoose')

const menuSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name field is required'],
    },
    starttime: {
      type: Number,
      required: [true, 'start time field is required'],
    },
    endtime: {
      type: Number,
      required: [true,'end time is required']
    },
    days: {
      type: Array,
      required: [true, 'days field is required'],
    },
    sections: [
      {
        type: Schema.Types.ObjectId,
        required: [false,'sections id is required']
      }
    ]
  },
  { timestamps: true },
)
module.exports = model('menu', menuSchema)
