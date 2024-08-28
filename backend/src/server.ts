import app from "./app"
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT || 3000;
const mongoConnectionString = env.MONGO_CONNECTION_STRING;

if (!mongoConnectionString) {
    console.error("MONGO_CONNECTION_STRING is not defined in the environment variables.");
    process.exit(1);
}

mongoose.connect(mongoConnectionString).then(() => {
    console.log("Mongoose Connected");
    app.listen(port, () => {
        console.log("Server Running on port: " + port);
    });
}).catch(err => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
});
