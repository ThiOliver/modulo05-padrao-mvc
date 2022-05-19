var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Thiago', subtitle: "Programador Web Full Stack" });
});

module.exports = router;
