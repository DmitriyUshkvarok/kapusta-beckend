const express = require('express');
const incomeController = require('../../controllers/income');

const router = express.Router();

router.get('/', incomeController.getAll);

module.exports = router;
