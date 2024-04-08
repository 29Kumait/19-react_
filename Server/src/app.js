import express from "express";
import cors from "cors";
import routerSign from "./routes/sign.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("SERVER !");
});

app.use("/api", routerSign);

export default app;
