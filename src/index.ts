// app.js
import express from "express";
import dataRoutes from "./routes";
import cors from "cors";
import fs from "fs";
import path from "path";

const filePath = path.join(
  __dirname,
  "D512557EC47FDCDC6C47992670298C06.txt"
);

const file = fs.readFileSync(filePath);

const app = express();

app.use(cors());
app.use(express.json());

app.get(
  "/.well-known/pki-validation/D512557EC47FDCDC6C47992670298C06.txt",
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
