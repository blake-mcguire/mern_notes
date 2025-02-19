import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import notesRoutes from "./routes/notes"
import morgan from "morgan";
import createHttpError, {isHttpError} from "http-errors";

const app = express();


app.use(morgan("dev"));

app.use(express.json());

app.use('/api/notes', notesRoutes);
// THis is an error handler for non existent endpoints

app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint Not Found"))
});

// THis is the error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    let errorMessage = "an unknown error occured";
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message
    }
    res.status(statusCode).json({ error: errorMessage});
});
export default app;