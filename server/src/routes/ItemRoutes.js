const express = require('express');
const itemAPI = require('../controller/ItemController');

const router = express.Router();

router.post('/saveItem', itemAPI.saveItem);
router.get('/searchItem/:code', itemAPI.searchItem);
router.put('/updateItem', itemAPI.updateItem);
router.delete('/deleteItem/:code', itemAPI.deleteItem);
router.get('/loadAllItems', itemAPI.loadAllItems);

module.exports = router;