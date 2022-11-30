const mongoose  = require("mongoose");

const orderSchema = new mongoose.Schema({
	orderId: {
		type: Number,
		required: [true, "order id can't be empty"]
	},
	item_name: {
		type: String,
		required: [true, "item name can't be empty"]
	},
	cost: {
		type: Number,
		required: [true, "cost can't be empty"]
	},
	order_date:{
		type: Date,
		required: [true, "order date can't be empty"],
	},
	delivery_date:{
		type: Date,
		required: [true, "delivery date can't be empty"]
	}
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;