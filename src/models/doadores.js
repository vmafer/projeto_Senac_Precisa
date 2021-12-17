const mongoose = require('mongoose')

const doadoresSchema = new mongoose.Schema({
        id: {type: Number},
        Nome: {type: String},
        CpfCnpj: {type: String},
        Telefone: {type: String}
},
{
    versionKey:false
});

const doadores = mongoose.model('doadores', doadoresSchema);

module.exports = doadores;
    

    
