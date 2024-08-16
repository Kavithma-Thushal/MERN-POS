const ItemEntity = require('../model/ItemModel');

exports.saveItem = async (req, res) => {
    const {code, description, unitPrice, qtyOnHand} = req.body;
    try {
        const existingItem = await ItemEntity.findOne({code});
        if (existingItem) {
            return res.status(400).json({message: 'Item already exists...!'});
        }
        const newItem = new ItemEntity({code, description, unitPrice, qtyOnHand});
        await newItem.save();
        res.status(201).json({message: 'Item Saved Successfully...!'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.searchItem = async (req, res) => {
    const {code} = req.params;
    try {
        const item = await ItemEntity.findOne({code});
        if (!item) {
            return res.status(404).json({message: 'Item not found'});
        }
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.updateItem = async (req, res) => {
    const {code, description, unitPrice, qtyOnHand} = req.body;
    try {
        const item = await ItemEntity.findOneAndUpdate(
            {code},
            {description, unitPrice, qtyOnHand},
            {new: true, runValidators: true}
        );
        if (!item) {
            return res.status(404).json({message: 'Item not found'});
        }
        res.status(200).json({message: 'Item Updated Successfully...!'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.deleteItem = async (req, res) => {
    const {code} = req.params;
    try {
        const item = await ItemEntity.findOneAndDelete({code});
        if (!item) {
            return res.status(404).json({message: 'Item not found'});
        }
        res.status(200).json({message: 'Item Deleted Successfully...!'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.loadAllItems = async (req, res) => {
    try {
        const items = await ItemEntity.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};