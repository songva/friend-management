import express from 'express';
import bodyParser from 'body-parser';
import FriendController from './controller/FriendController';
import SubscribeController from './controller/SubscribeController';
import BlockController from './controller/BlockController';
import PostUpdateController from './controller/PostUpdateController';
import UtilController from './controller/UtilController';

let app = express();
app.use(bodyParser.json());


app.use('/friend', FriendController);
app.use('/subscribe', SubscribeController);
app.use('/block', BlockController);
app.use('/publish', PostUpdateController);
app.use('/setting', UtilController);

app.use((req, res, next) => {
    res.status(405);
    res.json({
        '405' : 'Method not allowed'
    });
});

app.listen(process.env.VCAP_APP_PORT || 3000);
