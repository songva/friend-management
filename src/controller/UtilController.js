import express from 'express';
import ResponseTemplate from '../common/ResponseTemplate';
import UtilService from '../service/UtilService';

let UtilController = express();

UtilController.get('/reset', (req, res) => {
    UtilService.emptyAllRelations();
    res.json(new ResponseTemplate("").toJson());
});

UtilController.get('/users', (req, res) => {
    let userlist = UtilService.getAllUsers();
    let users = userlist.map((user) => {
        return user.getEmail();
    });
    res.json(new ResponseTemplate("", {users}).toJson());
});

export default UtilController;
