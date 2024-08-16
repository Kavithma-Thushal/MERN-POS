const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    code: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    unitPrice: {type: Number, required: true},
    qtyOnHand: {type: Number, required: true}
});

module.exports = mongoose.model('Item', itemSchema);