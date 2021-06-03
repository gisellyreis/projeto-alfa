import { createConnection } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

import cors from 'cors';

const app = express();
createConnection();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

