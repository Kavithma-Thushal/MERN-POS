const express = require('express');
const customerController = require('../controllers/CustomerController');

const router = express.Router();

router.post('/saveCustomer', customerController.saveCustomer);
router.get('/searchCustomer/:id', customerController.searchCustomer);
router.put('/updateCustomer', customerController.updateCustomer);
router.delete('/deleteCustomer/:id', customerController.deleteCustomer);
router.get('/loadAllCustomers', customerController.loadAllCustomers);

module.exports = router;