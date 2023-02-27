const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name field is required'],
    },
    price: {
      type: Number,
      required: [true, 'price field is required'],
      default: 0
    },
    section_id: {
        type: Schema.Types.ObjectId,
        required: [true,'sections id is required']
    },
    menu_id: {
      type: Schema.Types.ObjectId,
      required: [true, 'menu field is required']
    },
    options: [
      {
        type: Schema.Types.ObjectId,
        required: [false,'options are optional']
      }
    ],
    description: {
      type: String,
      required: [true, 'description field is required'],
    },
  },
  { timestamps: true },
);

module.exports = model('item', itemSchema);