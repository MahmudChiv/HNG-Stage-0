import express, { json } from "express";
import { config } from "dotenv";
import { default as axios } from "axios";
config();
import myRoute from "./routes/myRoute.js";

const app = express();
app.use(json());
app.use("/me", myRoute)

app.get("/", (req, res) => res.send("API running!"));

app.listen(process.env.PORT || 4000, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
