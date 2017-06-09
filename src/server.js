import express from 'express';
import bodyParser from 'body-parser';

let app = express();
app.use(bodyParser.json());

app.get('/:name', (req, res)=> {
  res.send('Irasshaimase ' + req.params.name);
});

app.listen(3000);
