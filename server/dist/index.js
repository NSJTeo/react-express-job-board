"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.use((0, cors_1.default)());
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    const jobs = fs_1.default.readFileSync("./data/data.json", "utf-8");
    res.send(jobs);
});
app.get("/jobs/:jobID", (req, res) => {
    const jobs = fs_1.default.readFileSync("./data/data.json", "utf-8");
    const parsedJobs = JSON.parse(jobs);
    const jobPosting = parsedJobs.find((parsedJob) => parsedJob.id.toString() === req.params.jobID);
    res.send(jobPosting);
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
