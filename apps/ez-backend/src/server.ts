import express, { Request, Response } from "express";
import cors from "cors"; 
import { createContainer, asClass, asValue} from "awilix";
import dotenv from "dotenv";
import { loadControllers, scopePerRequest } from "awilix-express";
import PropertiesService from "./services/properties.service";
import mongoose from "mongoose";

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI!;

// Initialize Mongoose connection
mongoose.connect(MONGO_URI);

const diContainer = createContainer().register({
  mongoose: asValue(mongoose),
  propertiesService: asClass(PropertiesService).singleton()
});
app.use(cors())

app.use(scopePerRequest(diContainer));

app.use(loadControllers('routes/*.routes.js', {cwd: __dirname}));


app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});