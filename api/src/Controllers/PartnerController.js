
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
	const partner = req.body.partner
	const data = req.body.data || {}
	const transaction  = req.body.transaction || {}
	const msisdn = req.body.msisdn
	const eventDate = transaction.eventDate || time
	const requestDate = transaction.requestDate
	


	
	try {
		const PARTNER_MODEL = {
			msisdn : msisdn.toString(),//
			incomingTime : eventDate  ||time, 
			triggerId : (partner.partner_id).toString() ||null,//
			isProcessed : 1,
			triggerDescription: (partner.partner_name).toString() || null,//
			notificationTime : moment(requestDate).format("YYYY-MM-DD HH:mm:ss.ms") || null,//
			TRIGGER_ATTR_09: profile || null, //
			id : transaction.transaction_id || null,//
			TRIGGER_ATTR_01 : data.data_01 || null ,
			TRIGGER_ATTR_02 : data.data_02  || null,
			TRIGGER_ATTR_03 : data.data_03 || null ,
			TRIGGER_ATTR_04 : data.data_04  || null,
			TRIGGER_ATTR_05 : data.data_05  || null,
			TRIGGER_ATTR_06 : data.data_06  || null,
			TRIGGER_ATTR_07 : data.data_07  || null,
			TRIGGER_ATTR_08 : data.data_08 || null,
		}
	
		try {
			const savedPartner = await Partner.create(PARTNER_MODEL);
			const response = {
				tabid : savedPartner.tabid,
				msisdn: savedPartner.msisdn,
				incomingTime : eventDate,
				triggerId: savedPartner.triggerId,
				id : savedPartner.id,
			}
			
			return res.status(201).json(response);
		} catch (err) {
			console.log(err)
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
		console.log(ALL.length)
		
		return res.status(200).json(ALL);
	} catch (error) {
		console.log('ERROR in getAll ' , error);
		return res.status(500).json(error);
	}
};
