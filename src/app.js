import express from "express"
import cookieParser from "cookie-parser"
import healthCheckRoute from "./modules/health/health-check.route.js"

const app = express()

app.use(express.json())

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use("/api/v1", healthCheckRoute)

app.use(cookieParser())

export default app