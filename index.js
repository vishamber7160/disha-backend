import express from "express";
import cors from "cors";
import route from "./routes/Routes.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    origin: true,
    optionsSuccessStatus: 200,
  })
);
app.use("/api/",route);

app.listen(PORT, () => console.log(`App is Listening on localhost:${PORT}`));
