require("dotenv").config();
import express from "express";
import cors from "cors";
import fs from "fs";
const app = express();

const PORT: string | number = process.env.PORT || 8000;

app.use(cors());

app.get("/", (_req, res) => {
  const data: string = fs.readFileSync("./data/data.json", "utf-8");
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
