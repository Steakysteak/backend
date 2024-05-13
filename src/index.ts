// app.js
import express from "express";
import dataRoutes from "./routes";
import cors from "cors";
import fs from "fs";
import path from "path";

const filePath = path.join(
  __dirname,
  "backend",
  "3DF5DA60BA98FBCDA39DCD4BAB3711DD.txt"
);

const file = fs.readFileSync(filePath);

const app = express();

app.use(cors());
app.use(express.json());

app.get(
  "/.well-known/pki-validation/3DF5DA60BA98FBCDA39DCD4BAB3711DD.txt",
  (req, res) => {
    res.sendFile(filePath);
  }
);
// Use data routes
app.use(dataRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
