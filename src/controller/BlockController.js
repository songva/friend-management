import express from 'express';
import ResponseTemplate from '../common/ResponseTemplate';
import BlockService from '../service/BlockService';

let BlockController = express();

let validate4Create = (req) => {
    let errorMsg = '';
    if(!req.body || !req.body.target){
        errorMsg = 'The target should be specified as parameter:target';
    }else if(!req.body.requestor){
        errorMsg = 'The requestor should be specified as parameter:requestor';
    }else if(req.body.requestor === req.body.target){
        errorMsg = 'Cannot block the user her/himself';
    }
    return errorMsg;
}

BlockController.post('/', (req, res) => {
    let errorMsg = validate4Create(req);
    if(errorMsg){
        res.json(new ResponseTemplate(errorMsg).toJson());
        return;
    }
    errorMsg = BlockService.block(req.body.requestor, req.body.target);
    res.json(new ResponseTemplate(errorMsg).toJson());
});

export default BlockController;
