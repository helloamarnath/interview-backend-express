import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/', (req, res) => {
    return res.json({ success: true, data: {}, message: 'server is running' });
});
app.listen(3000, () => {
    console.log('server established in port 3000');
});
