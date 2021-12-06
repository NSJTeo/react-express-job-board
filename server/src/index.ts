require("dotenv").config();
import express from "express";
import cors from "cors";
import fs from "fs";
const app = express();

const PORT: string | number = process.env.PORT || 8000;

type Requirements = {
  content: string;
  items: string[];
};

type Role = {
  content: string;
  items: string[];
};

export type JobPosting = {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Requirements;
  role: Role;
};

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.get("/", (_req, res) => {
  const jobs: string = fs.readFileSync("./data/data.json", "utf-8");
  res.send(jobs);
});

app.get("/jobs/:jobID", (req, res) => {
  const jobs: string = fs.readFileSync("./data/data.json", "utf-8");
  const parsedJobs: JobPosting[] = JSON.parse(jobs);
  const jobPosting = parsedJobs.find(
    (parsedJob) => parsedJob.id.toString() === req.params.jobID
  );
  res.send(jobPosting);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
