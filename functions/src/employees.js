import { db } from "./dbConnect.js";

const coll = db.collection("employees");

export async function addEmployee(req, res) {
  const newEmployee = req.body;
  await coll.add(newEmployee);
  res.status(201).send({ message: "Employee successfully added." });
}
