const path = require("path")
const series = require('../models/series')

const controller = {
    index: (req,res)=> res.send(series),
    porGenero: (req,res)=> {
        const genero = req.params.genero

       const resultadoFiltrado = series.filter(serie => serie.genero.toLocaleLowerCase() === genero.toLocaleLowerCase())

       res.send(resultadoFiltrado)
},
criar: (req,res) => res.sendFile(path.join(__dirname, "..", "views", "criar-serie.html"))
}


module.exports = controller