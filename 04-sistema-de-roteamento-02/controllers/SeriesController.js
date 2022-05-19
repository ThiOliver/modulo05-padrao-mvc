const series = require('../models/series')

const controller = {
    index: (req,res)=> res.send(series)

}


module.exports = controller