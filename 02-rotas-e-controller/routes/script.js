const express = ('express')
const router = express.Router();
const CarrinhoController = require('../Controllers/carrinhocontroler')

router.get('/:item', (req, res) =>CarrinhoController.addItem)

module.exports = router