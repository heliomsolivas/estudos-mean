var mongoose = require('mongoose');

// cria o esquema
var schema = mongoose.Schema({

    titulo: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    grupo: {
        type: Number,
        required: true
    }
});

mongoose.model('Foto', schema);