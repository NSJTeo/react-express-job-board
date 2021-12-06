require("dotenv").config();
import express from "express";
import cors from "cors";
const app = express();

const PORT: string | number = process.env.PORT || 8000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
