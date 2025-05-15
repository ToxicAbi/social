import express from "express"
import cors from "cors"

import { config } from "dotenv";

config()

const app = express()

app.use(cors());
app.use(express.json());

const port = process.env.PORT

const server = app.listen(port, () => {
    console.log(`🚀 Server đang chạy trên port ${port} !`);
});