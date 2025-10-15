const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    autores: {
        type: [String],
        required: true
    },
    anioPublicacion: {
        type: Number,
        required: true
    },
    resumen: {
        type: String,
        required: true
    },
    cantidadReferencias: {
        type: Number,
        required: true,
        min: 0
    },
    baseDatos: {
        type: String,
        required: true
    },
    revistaOLibro: {
        type: String,
        required: true
    },
    enlace: {
        type: String,
        required: true,
    },
    pdf: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);