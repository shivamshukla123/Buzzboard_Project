const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
	try {
		const order = await Order.findOne({orderId: req.body.orderId})
		if(order){
			return res.status(403).json({
				status: 'fail',
				message: "order id is already exist"
			})
		}
		const orderCreated = await Order.create(req.body)
		res.status(200).json({
			status: 'success',
			data: {
				order: orderCreated
			}
		})
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: error
		})
	}
}

exports.updateOrder = async (req, res) => {
	try {
		if(!req.body.delivery_date || !req.body.orderId){
			return res.json({
				message: "please provide delivery date and order id"
			})
		}
		const order = await Order.findOne({orderId: req.body.orderId})
		if(!order){
			return res.status(403).json({
				status: 'fail',
				message: "order id does not exist"
			})
		}
		const orderUpdated = await Order.updateOne({orderId: req.body.orderId}, {delivery_date: req.body.delivery_date})
		if(orderUpdated){
			res.status(200).json({
				status: 'success',
				message: "updated successfully"
			})
		}
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: error
		})
	}
}

exports.orderListByDate = async (req, res) => {
	try {
		if(!req.body.date){
			return res.json({
				message: "please provide date"
			})
		}
		const orderList = await Order.find({order_date:req.body.date})
		if(orderList){
			res.status(200).json({
				status: 'success',
				data: {
					order: orderList
				}
			})
		}
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: error
		})
	}
}

exports.searchOrderById = async (req, res) => {
	try {
		if(!req.body.orderId){
			return res.json({
				message: "please provide order id"
			})
		}
		const order = await Order.findOne({orderId: req.body.orderId})
		res.status(200).json({
			status: 'success',
			data: {
				order
			}
		})
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: error
		})
	}
}

exports.deleteOrder = async (req, res) => {
	try {
		if(!req.body.orderId){
			return res.json({
				message: "please provide order id"
			})
		}
		const order = await Order.findOne({orderId: req.body.orderId})
		if(!order){
			return res.status(403).json({
				status: 'fail',
				message: "order id does not exist"
			})
		}
		const deleted = await Order.deleteOne({orderId: req.body.orderId})
		if(deleted.deletedCount){
			res.status(200).json({
				status: 'success',
				message: "deleted successfully"
			})
		}
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: error
		})
	}
}