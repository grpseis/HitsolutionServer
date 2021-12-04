const mongoose = require('mongoose');

const platoSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    principal: {
        type: 'string',
        required: true
    },
    farinacea: {
        type: 'string',
        required: true
    },
    tuberculos: {
        type: 'string',
        required: true
    },
    verdura: {
        type: 'string',
        required: true
    },
    precio: {
        type: 'number',
        required: true
    },
})
module.exports = mongoose.model('Plato', platoSchema);