const series = require('../models/series')

const controller = {
    index: (req,res)=> res.send(series),
    porGenero: (req,res)=> res.send(series.filter(serie => serie.genero.toLocaleLowerCase() == req.params.genero.toLocaleLowerCase())),

}


module.exports = controller