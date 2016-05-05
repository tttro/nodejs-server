/**
 * Server
 */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import createRouter from './routes';

const app = express();
const router = createRouter();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors()); // Cors


let port = process.env.PORT || 8080;

app.use('/api', router);

app.listen(port, ()=>{
    console.log('Server is listening: ' + port);
});