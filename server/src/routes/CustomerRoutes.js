const express = require('express');
const customerAPI = require('../controller/CustomerController');

const router = express.Router();

router.post('/saveCustomer', customerAPI.saveCustomer);
router.get('/searchCustomer/:id', customerAPI.searchCustomer);
router.put('/updateCustomer', customerAPI.updateCustomer);
router.delete('/deleteCustomer/:id', customerAPI.deleteCustomer);
router.get('/loadAllCustomers', customerAPI.loadAllCustomers);

module.exports = router;