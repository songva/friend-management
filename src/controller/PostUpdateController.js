import express from 'express';
import ResponseTemplate from '../common/ResponseTemplate';
import PostUpdateService from '../service/PostUpdateService';

let PostUpdateController = express();

let validate4Post = (req) => {
    let errorMsg = '';
    if(!req.body || !req.body.sender){
        errorMsg = 'The sender should be specified as parameter:requestor';
    }else if(!req.body.text){
        errorMsg = 'The content of post should be specified as parameter:text';
    }
    return errorMsg;
}

PostUpdateController.post('/post', (req, res) => {
    let errorMsg = validate4Post(req);
    if(errorMsg){
        res.json(new ResponseTemplate(errorMsg).toJson());
        return;
    }
    let result = PostUpdateService.publish(req.body.sender, req.body.text);
    if(result instanceof Array){
        let recipients = result.map((recipient) => {
            return recipient.getEmail();
        });
        res.json(new ResponseTemplate("", {recipients}).toJson());
    }else{
        res.json(new ResponseTemplate(result).toJson());
    }
});

export default PostUpdateController;
