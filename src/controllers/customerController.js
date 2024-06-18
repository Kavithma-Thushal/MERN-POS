const Customer = require('../models/Customer');

exports.saveCustomer = async (req, res) => {
    const {id, name, address, salary} = req.body;
    try {
        const existingCustomer = await Customer.findOne({id});
        if (existingCustomer) {
            return res.status(400).json({message: 'Customer already exists'});
        }
        const newCustomer = new Customer({id, name, address, salary});
        await newCustomer.save();
        res.status(201).json({message: 'Customer saved successfully'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.searchCustomer = async (req, res) => {
    const {id} = req.params;
    try {
        const customer = await Customer.findOne({id});
        if (!customer) {
            return res.status(404).json({message: 'Customer not found'});
        }
        res.status(200).json(customer);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.updateCustomer = async (req, res) => {
    const {id, name, address, salary} = req.body;
    try {
        const customer = await Customer.findOneAndUpdate(
            {id},
            {name, address, salary},
            {new: true, runValidators: true}
        );
        if (!customer) {
            return res.status(404).json({message: 'Customer not found'});
        }
        res.status(200).json({message: 'Customer updated successfully'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.deleteCustomer = async (req, res) => {
    const {id} = req.params;
    try {
        const customer = await Customer.findOneAndDelete({id});
        if (!customer) {
            return res.status(404).json({message: 'Customer not found'});
        }
        res.status(200).json({message: 'Customer deleted successfully'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.loadAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.customerCount = async (req, res) => {
    try {
        const count = await Customer.countDocuments();
        res.status(200).json({count});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};