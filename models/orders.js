const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

const Orders = model('order', orderSchema);

module.exports = Orders;
