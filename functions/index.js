import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { addEmployee } from "./src/employees.js";

const app = express();
app.use(cors());
app.use(express.json()); // needed for POST and PATCH

app.get("/test", (req, res) => {
  res.send("My cloud function API is working! 🥹");
});
app.post("/employees", addEmployee);

export const api = functions.https.onRequest(app);
