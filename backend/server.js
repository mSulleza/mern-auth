import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// connect to MongoDB
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());

// routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Server is ready");
});

// custom error handler
app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});