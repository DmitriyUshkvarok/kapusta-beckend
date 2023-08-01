const Income = require('../models/income');
const { ctrlWrapper } = require('../helpers');

const getAll = async (req, res) => {
  const result = await Income.find();
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
