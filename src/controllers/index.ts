// controllers/dataController.js

import { NextFunction } from "express";
import { addData, getCountOfCalls, updateData } from "../models";

interface RequestBody {
  data: string; // Assuming 'data' is a string, you should adjust the type accordingly
}

// Controller function to add data
const addDataController = async (req: any, res: any, next: NextFunction) => {
  try {
    const { data } = req.body;
    await addData(data);

    res.json({
      message: "Successfully Added",
    });
  } catch (error) {
    next(error);
  }
};

// Controller function to update data
const updateDataController = async (
  req: any,
  res: any,
  next: NextFunction
) => {
  try {
    const { data } = req.body;
    await updateData(data);
    res.json({
      message: "Successfully Updated",
    });
  } catch (error) {
    next(error);
  }
};

// Controller function to get count of calls
const getCountOfCallsController = async (
  req: any,
  res: any,
  next: NextFunction
) => {
  try {

    const count = await getCountOfCalls();
    console.log(count, "Count in get")
    res.json({
      count: count,
    });
  } catch (error) {
    next(error);
  }
};

export { addDataController, updateDataController, getCountOfCallsController };
