import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { addEmployee, getAllEmployees, updateEmployee, deleteEmployee } from "./src/employees.js";

const app = express();
app.use(cors());
app.use(express.json()); // needed for POST and PATCH

app.post("/employees", addEmployee);
app.get("/employees", getAllEmployees);
app.patch("/employees/:employeeId", updateEmployee);
app.delete("/employees/:employeeId", deleteEmployee);

export const api = functions.https.onRequest(app);
