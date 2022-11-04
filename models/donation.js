const mongoose = require("mongoose");


const activitySchema = new mongoose.Schema({
	activityName: {
		type: String,
		// ref: "users",
		required: true
	},
	quantity: {
		type: String,
		// ref: "users",
	},
	startDate: {
		type: Date,
		required: true
	},
	endDate: {
		type: Date,
	},
	location: {
		type: String,
	},
	imgString: {
		type: Buffer,
	},
	donorToAdminMsg: String,
	// workerName: {
	// 	type: String,
	// 	required: true
	// },
	// workDuration: {
	// 	type: Number
	// },
	// wages: {
	// 	type: Number,
	// 	required: true
	// },
	// assetId: {
	// 	type: Number,
	// 	unique: true
	// },
	// assetDuration: {
	// 	type: Number
	// },
	// typeMaterialcon: {
	// 	type: String
	// },
	// unitsConsumed: {
	// 	type: Number
	// },
	// costInvolved: {
	// 	type: Number
	// },
	// typeMaterialpro: {
	// 	type: String,
	// 	required: true
	// },
	// unitsProduced: {
	// 	type: Number,
	// 	required: true
	// },
	// storageLocation: {
	// 	type: String
	// },
	Message: {
		type: String
	},
	//status: {
	//	type: String,
	//	enum: [ "rejected"pending",", "accepted", "assigned", "collected"],
	//	required: true
	//},
});











const donationSchema = new mongoose.Schema({
	donor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true
	},
	agent: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},
	foodType: {
		type: String,
		required: true
	},
	quantity: {
		type: String,
		required: true
	},
	cookingTime: {
		type: Date,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
	donorToAdminMsg: String,
	adminToAgentMsg: String,
	collectionTime: {
		type: Date,
	},
	status: {
		type: String,
		enum: ["pending", "rejected", "accepted", "assigned", "collected"],
		required: true
	},
});

const Donation = mongoose.model("donations", activitySchema);
module.exports = Donation;