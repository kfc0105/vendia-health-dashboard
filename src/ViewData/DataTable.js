import React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { getAllEmplQuery, getEmplQuery } from "../vendia/queries";
import { client } from "../App";
import { useAsync } from "react-async";

async function getAllEmplData() {
  const response = await client.request(getAllEmplQuery);
  // if (!response.ok) throw new Error(response.statusText);

  const employees = response?.list_EmployeeItems?._EmployeeItems;
  console.log(employees);

  return employees;
}

function DataTable() {
  
  const columns = [
    { headerName: "First Name", field: "firstName", width: 70 },
    { headerName: "Last Name", field: "lastName", width: 70 },
    { headerName: "Age", field: "age", width: 70 },
    { headerName: "Gender", field: "genderID", width: 70 },
    { headerName: "Height", field: "height", width: 70 },
    { headerName: "Weight", field: "weight", width: 70 },
    { headerName: "Body Temperature", field: "bodyTemp", width: 140 },
    { headerName: "Pulse Rate", field: "pulseRate", width: 90 },
    { headerName: "Blood Pressure Systolic", field: "bloodPressureSystolic", width: 120 },
    { headerName: "Blood Pressure Diastolic", field: "bloodPressureDiastolic", width: 120 },
    { headerName: "Respiration Rate", field: "respirationRate", width: 130 },
    {
      headerName: "Average Exercise Per Week",
      field: "avgWklyExercise",
      width: 220,
    },
    { headerName: "Vacation Balance", field: "vacationBalance", width: 130 },
    { headerName: "Average Work Week", field: "avgWklyHrs", width: 170 },
  ];
  
  const { data, isPending } = useAsync({ promiseFn: getAllEmplData });
  if (isPending) return "Loading..."
  if (data)
    return (
      <DataGrid
        getRowId={(row) => row._id}
        rows={data}
        columns={columns}
        pageSize={15}
        checkboxSelection
      ></DataGrid>
    );
}

export default DataTable;
