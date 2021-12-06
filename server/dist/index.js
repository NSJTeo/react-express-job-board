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
    const data = fs_1.default.readFileSync("./data/data.json", "utf-8");
    res.send(data);
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
