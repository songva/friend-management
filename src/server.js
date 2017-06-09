import express from 'express';
import bodyParser from 'body-parser';
import FriendController from './controller/FriendController';

let app = express();
app.use(bodyParser.json());


app.use('/friend', FriendController);

app.listen(3000);
