import { Router } from "express";
import healthCheck from "./health-check.controller.js";

const healthCheckRoute = Router()

healthCheckRoute.get("/health-check", healthCheck)

export default healthCheckRoute;