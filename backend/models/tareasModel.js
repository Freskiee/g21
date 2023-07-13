const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    texto: {
        type: String,
        required: [true, 'Por favor teclea una descripción a la Tarea']
    }
},{
    timestamps : true // Pone 'creado en'
})

module.exports = mongoose.model('Tarea', tareaSchema)