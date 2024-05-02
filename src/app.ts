import 'reflect-metadata';
import "dotenv/config";

import { connectToDatabase } from "./database";

import cors from "cors";

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

// import { associateRoutes } from "./module/http/controllers/routes"
const app = express();

const main = async () => {
  await connectToDatabase();
};

main().catch(err => {
  console.error(err);
  process.exit(1);
});

app.use(express.json());
app.use(cors());
// app.use(associateRoutes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
);

export { app };
