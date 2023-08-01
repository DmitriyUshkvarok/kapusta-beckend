const { Schema, model } = require('mongoose');

const incomeSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

const Income = model('income', incomeSchema);

module.exports = Income;
