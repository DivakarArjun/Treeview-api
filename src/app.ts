import * as dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import commonRouter from '../routes/comman.routes';
import fieldsRouter from '../routes/fields.routes';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',commonRouter)
app.use('/fields',fieldsRouter)

app.listen(3000, () => {
    console.log(`Listening on port ${"PORT"}`);
});