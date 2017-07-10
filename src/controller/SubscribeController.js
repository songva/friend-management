import express from 'express';
import ResponseTemplate from '../common/ResponseTemplate';
import SubscribeService from '../service/SubscribeService';

let SubscribeController = express();

let validate4Create = (req) => {
	let errorMsg = '';
	if(!req.body || !req.body.target){
		errorMsg = 'The target should be specified as parameter:target';
	}else if(!req.body.requestor){
		errorMsg = 'The requestor should be specified as parameter:requestor';
	}else if(req.body.requestor === req.body.target){
		errorMsg = 'Cannot subscribe to a user her/himself';
	}
	return errorMsg;
};

SubscribeController.post('/', (req, res) => {
	let errorMsg = validate4Create(req);
	if(errorMsg){
		res.json(new ResponseTemplate(errorMsg).toJson());
		return;
	}
	errorMsg = SubscribeService.subscribe(req.body.target, req.body.requestor);
	res.json(new ResponseTemplate(errorMsg).toJson());
});

export default SubscribeController;
