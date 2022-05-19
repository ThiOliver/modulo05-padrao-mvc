const express = ('express')
const router = express.Router();
const SeriesController = require('../Controllers/Seriescontroler')

router.get('/:id', SeriesController.show)
router.get('/', SeriesController.index)


module.exports = router