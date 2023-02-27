const { Schema, model } = require('mongoose');

const ingredientSchema = new Schema(
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
    options: [
      {
        type: Schema.Types.ObjectId,
        required: [false,'options are optional']
      }
    ],
  },
  { timestamps: true },
);

module.exports = model('ingredient', ingredientSchema);