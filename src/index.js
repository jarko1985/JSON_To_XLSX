const exportUsersToExcel = require("./exportService");

const users = [
  {
    id: 0,
    name: "Hassan",
    age: 33,
  },
  {
    id: 1,
    name: "Samgan",
    age: 26,
  },
  {
    id: 2,
    name: "Ismail",
    age: 40,
  },
  {
    id: 3,
    name: "Ebrahim",
    age: 25,
  },
];

const workSheetColumnNames = ["ID", "NAME", "AGE"];
const workSheetName = "users";
const filePath = "./outputFiles/excel-from-js.xlsx";

exportUsersToExcel(users, workSheetColumnNames, workSheetName, filePath);
