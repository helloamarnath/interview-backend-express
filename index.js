import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import 'dotenv/config';
const app = express();
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB).then(() => console.log('Connected!'));
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/', (req, res) => {
    return res.json({ success: true, data: {}, message: 'server is running' });
});
// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () => {
    console.log('server established in port 3000');
});
