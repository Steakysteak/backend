// app.js
import express from "express";
import dataRoutes from "./routes";
import cors from "cors";
import fs from "fs";
import path from "path";
import https from "https";

const keyPath = path.join(__dirname, "private.key");

const certPath = path.join(__dirname, "certificate.crt");

const key = fs.readFileSync(keyPath);
const cert = fs.readFileSync(certPath);

const cred = {
  key,
  cert,
};

const app = express();

app.use(cors());
app.use(express.json());

// Use data routes
app.use(dataRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const httpsServer = https.createServer(cred, app);
httpsServer.listen(8443);
