import express from 'express';
import ResponseTemplate from '../common/ResponseTemplate';
import FriendService from '../service/FriendService';

let FriendController = express();

/**
 *  Validation methods
 */
let validate4Create = (req) => {
    let errorMsg = '';
    if(!req.body || !req.body.friends){
        errorMsg = 'The new friends should be specified as parameter:friends';
    }else if(!(req.body.friends instanceof Array) || req.body.friends.length !== 2){
        errorMsg = 'The parameter:friends should be an array with two items';
    }else if(req.body.friends[0] === req.body.friends[1]){
        errorMsg = 'Cannot make a user friend to her/himself';
    }
    return errorMsg;
}

let validate4GetCommon = (req) => {
    let errorMsg = '';
    if(!req.body || !req.body.friends || !(req.body.friends instanceof Array) || req.body.friends.length !== 2){
        errorMsg = 'The friends parameter should be an array with two items';
    }else if(req.body.friends[0] === req.body.friends[1]){
        errorMsg = 'Cannot get common friend of one user';
    }
    return errorMsg;
}

let validate4List = (req) => {
    let errorMsg = '';
    if(!req.body || !req.body.email){
        errorMsg = 'The email of user should be specified as parameter:email';
    }
    return errorMsg;
}

/**
 *  Create friendship between two users, validate parameter errors
 *  parameter: friends in JSON format
 */
FriendController.post('/create', (req, res) => {
    let errorMsg = validate4Create(req);
    if(errorMsg){
        res.json(new ResponseTemplate(errorMsg).toJson());
        return;
    }
    errorMsg = FriendService.addFriends(req.body.friends[0], req.body.friends[1]);
    res.json(new ResponseTemplate(errorMsg).toJson());
});


FriendController.post('/list', (req, res) => {
    let errorMsg = validate4List(req);
    if(errorMsg){
        res.json(new ResponseTemplate(errorMsg).toJson());
        return;
    }
    let result = FriendService.getFriendsOf(req.body.email);
    if(result instanceof Array){
        let count = result.length;
        let friends = result.map((friendship) => {
            return friendship.getGuest().getEmail();
        });
        res.json(new ResponseTemplate("", {friends, count}).toJson());
    }else{
        res.json(new ResponseTemplate(result).toJson());
    }
});

FriendController.post('/listInCommon', (req, res) => {
    let errorMsg = validate4GetCommon(req);
    if(errorMsg){
        res.json(new ResponseTemplate(errorMsg).toJson());
        return;
    }
    let result = FriendService.getCommonFriends(req.body.friends[0], req.body.friends[1]);
    if(result instanceof Array){
        let count = result.length;
        let friends = result.map((friendship) => {
            return friendship.getGuest().getEmail();
        });
        res.json(new ResponseTemplate("", {friends, count}).toJson());
    }else{
        res.json(new ResponseTemplate(result).toJson());
    }
});


export default FriendController;
