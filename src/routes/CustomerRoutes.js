const express = require('express');
const customerController = require('../controllers/CustomerController');

const router = express.Router();

router.post('/saveCustomer', customerController.saveCustomer);
router.get('/searchCustomer/:id', customerController.searchCustomer);
router.put('/updateCustomer', customerController.updateCustomer);
router.delete('/deleteCustomer/:id', customerController.deleteCustomer);
router.get('/loadAllCustomers', customerController.loadAllCustomers);
router.get('/customerCount', customerController.customerCount);

module.exports = router;