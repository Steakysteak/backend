// routes/dataRoutes.js
import express from "express";
import {
  addDataController,
  getCountOfCallsController,
  updateDataController,
} from "../controllers";

const router = express.Router();

// Define routes
router.post("/backend", addDataController);

router.put("/backend", updateDataController);

router.get("/backend", getCountOfCallsController);

router.use((err: any, req: any, res: any, next: any) => {
  console.error(err); // Log the error
  res.status(500).json({ error: "Internal Server Error" }); // Send a generic error response
});

export default router;
