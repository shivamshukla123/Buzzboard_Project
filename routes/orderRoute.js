const express = require('express');
const orderController = require('../controllers/orderController')
const router = express.Router();

router
.route('/create')
.post(orderController.createOrder)

router
.route('/update')
.patch(orderController.updateOrder)

router
.route('/list')
.get(orderController.orderListByDate)

router
.route('/search')
.get(orderController.searchOrderById)

router
.route('/delete')
.delete(orderController.deleteOrder)

module.exports = router;