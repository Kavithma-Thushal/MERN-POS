const CustomerEntity = require('../module/CustomerModule');

exports.saveCustomer = async (req, res) => {
    const {id, name, address, salary} = req.body;
    try {
        const existingCustomer = await CustomerEntity.findOne({id});
        if (existingCustomer) {
            return res.status(400).json({message: 'Customer already exists...!'});
        }
        const newCustomer = new CustomerEntity({id, name, address, salary});
        await newCustomer.save();
        res.status(201).json({message: 'Customer Saved Successfully...!'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.searchCustomer = async (req, res) => {
    const {id} = req.params;
    try {
        const customer = await CustomerEntity.findOne({id});
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
        const customer = await CustomerEntity.findOneAndUpdate(
            {id},
            {name, address, salary},
            {new: true, runValidators: true}
        );
        if (!customer) {
            return res.status(404).json({message: 'Customer not found'});
        }
        res.status(200).json({message: 'Customer Updated Successfully...!'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.deleteCustomer = async (req, res) => {
    const {id} = req.params;
    try {
        const customer = await CustomerEntity.findOneAndDelete({id});
        if (!customer) {
            return res.status(404).json({message: 'Customer not found'});
        }
        res.status(200).json({message: 'Customer Deleted Successfully...!'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.loadAllCustomers = async (req, res) => {
    try {
        const customers = await CustomerEntity.find();
        res.status(200).json(customers);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};