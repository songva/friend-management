import express from 'express';
import FriendService from '../service/FriendService';

let FriendController = express();

/**
 *  Create friendship between two users, validate parameter errors
 *  parameter: friends in JSON format
 */
FriendController.post('/create', (req, res) => {
    let errorMsg = '';
    if(!req.body || !req.body.friends){
        errorMsg = 'The new friends should be specified as parameter:friends';
    }else if(!(req.body.friends instanceof Array) || req.body.friends.length !== 2){
        errorMsg = 'The parameter:friends should be an array with two items';
    }else if(req.body.friends[0] === req.body.friends[1]){
        errorMsg = 'Cannot make a user friend to her/himself';
    }
    if(errorMsg){
        res.json({
            success: false,
            errorMsg
        });
        return;
    }
    errorMsg = FriendService.addFriends(req.body.friends[0], req.body.friends[1]);
    let response = {
        success : errorMsg.length === 0
    }
    if(errorMsg){
        response.errorMsg = errorMsg;
    }
    res.json(response);
});

export default FriendController;
