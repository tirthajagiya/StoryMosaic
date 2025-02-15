import express from "express";
import connectDB from "./db.js";
import "dotenv/config";
import userRoute from "./routes/userRoute.js";
import storyRoute from "./routes/storyRoute.js";
import bodyParser from "body-parser";
import { User } from "./models/user.models.js";
import cors from "cors";

connectDB()
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json())
    app.use("/", userRoute);
    // app.get("/", async (a, b) => {
    //   const data = await User.get();
    //   b.send(data);
    // });
    // app.post("/signup", async (a, b) => {
    //   const data = await User.create(b.body);
    //   b.send(data);
    // });
    app.use("/story", storyRoute);
    app.use(bodyParser.json());

    app.listen(process.env.PORT, () => {
      console.log(`Server Started At Port :${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB not Conneted !!", err);
  });
