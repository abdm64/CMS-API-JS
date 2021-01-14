
const Partner = require('../Model/PartnerModel') 
const moment = require('moment')
const errorHelper = require('../Helper/error')
const checkerHelper = require('../Helper/checker')
const dbsssvc = require('../services/DbssNetworkService')

exports.createPartner = async (req, res, next) => {
	//console.log("createPartner: [POST] /Partner/");
	
	let time = moment().format("YYYY-MM-DD HH:mm:ss.ms")
	if (!checkerHelper.checkValue(req.body)){


		return res.status(400).send({message : "Bad Request"})
	}
	let profile = await dbsssvc.getDSubsInfo(req.body)
	
	
	try {
		const PARTNER_MODEL = {
			msisdn : (req.body.msisdn),
			incomingTime : time,
			triggerId : (req.body.triggerId).toString(),
			isProcessed : 1,
			triggerDescription: req.body.triggerDescription,
			TRIGGER_ATTR_09: profile
		}
	
		try {
			const partner = await Partner.create(PARTNER_MODEL);
			
			return res.status(201).json(partner);
		} catch (err) {
			
			const errFormat = errorHelper.formatErr(err)
			return res.status(errFormat.codeStatus).json(errFormat);
		}
	} catch (err) {
		
	// 	const errFormat = errorHelper.formatErr(err)
			 console.log(err)
			return res.status(400).json("bad Request");
	}
};

exports.getAll = async (req, res, next) => {
	console.log("getAll: [GET] /Partner/");
	try {
		const ALL = await Partner.findAll();
		
		return res.status(200).json(ALL);
	} catch (error) {
		console.log('ERROR in getAll ' + "USER:", error);
		return res.status(500).json(error);
	}
};
