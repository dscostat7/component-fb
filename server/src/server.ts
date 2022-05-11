import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());


/**
 * req = request
 * res = response
 */

app.get('/users', (req, res) => {
    return res.send('Hello World!');
});

app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server runing!')
});