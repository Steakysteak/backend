// app.js
import express from "express";
import dataRoutes from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Use data routes
app.use(dataRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
