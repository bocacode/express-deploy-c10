import { FieldValue } from "firebase-admin/firestore";
import { db } from "./dbConnect.js";

const coll = db.collection("employees");

export async function addEmployee(req, res) {
  let newEmployee = req.body;
  newEmployee.createdAt = FieldValue.serverTimestamp();
  await coll.add(newEmployee);
  res.status(201).send({ message: "Employee successfully added." });
}

export async function getAllEmployees(req, res) {
  const collection = await coll.get();
  const employees = collection.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  res.send(employees);
}

export async function updateEmployee(req, res) {
  const { employeeId } = req.params;
  let newEmployeeData = req.body;
  newEmployeeData.updatedAt = FieldValue.serverTimestamp();
  await coll.doc(employeeId).update(newEmployeeData);
  res.status(202).send({ message: "Employee successfully updated." });
}

export async function deleteEmployee(req, res) {
  const { employeeId } = req.params;
  await coll.doc(employeeId).delete();
  res.status(202).send({ message: "Employee successfully deleted." });
}
