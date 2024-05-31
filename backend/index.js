import Express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";
import { configDotenv } from "dotenv";

const app = Express();
app.use(Express.json());

configDotenv();

connectDB();

// const whiteList = ["http://localhost:5173"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whiteList.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS"))
//     }
//   }
// }

// app.use(cors(corsOptions));

app.use("/api", taskRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server runing on Port: ${PORT}`);
})