const mongoose = require('mongoose')

const beneficiariosSchema = new mongoose.Schema({
    id:{type: Number},
    Nome:{type: String},
    Comunidade:{type: String},
    LocoMoradia:{type: String},
},
    
{
    versionKey:false
});

const beneficiarios  = mongoose.model('beneficiarios', beneficiariosSchema);

module.exports = beneficiarios;