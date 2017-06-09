import express from 'express';
import bodyParser from 'body-parser';
import FriendController from './controller/FriendController';
import SubscribeController from './controller/SubscribeController';
import BlockController from './controller/BlockController';

let app = express();
app.use(bodyParser.json());


app.use('/friend', FriendController);
app.use('/subscribe', SubscribeController);
app.use('/block', BlockController);

app.listen(3000);
