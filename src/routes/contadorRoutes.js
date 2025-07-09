const express = require('express');
const router = express.Router();
const contadorController = require('../controllers/contadorController');

router.get('/', contadorController.index);
router.post('/contar', contadorController.contar);

module.exports = router;
