// models/dataModel.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createChangeRecord = async () => {
  return await prisma.change.create({
    data: {
      createdAt: new Date(),
    },
  });
};

// Function to add data
const addData = async (data: string) => {
  const deleted = await prisma.data.deleteMany();

  if (deleted) {
    await createChangeRecord();

    return await prisma.data.create({
      data: {
        content: data,
      },
    });
  }
};

// Function to update data
const updateData = async (data: string) => {
  const dataResponse = await prisma.data.findFirst();

  if (dataResponse) {
    await createChangeRecord();

    return await prisma.data.update({
      where: {
        id: dataResponse.id,
      },
      data: {
        content: data,
      },
    });
  } else {
    throw new Error("Data not found");
  }
};

// Function to retrieve count of calls
const getCountOfCalls = async () => {
  return await prisma.change.count();
};

export { addData, updateData, getCountOfCalls };
