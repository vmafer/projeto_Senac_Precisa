const mongoose = require('mongoose')

const instituicoesSchema = new mongoose.Schema({
        id:{type: Number},
        Nome:{type: String},
        CpfCnpj:{type: Number},
        Estado: {type: String},
        Cidade:{type: String},
        Bairro:{type: String},
        Endereçodearrecadacao:{type: String}
    },
    
    {
        versionKey:false
    });

    const instituicoes  = mongoose.model('instituicoes', instituicoesSchema);

    module.exports = instituicoes;
