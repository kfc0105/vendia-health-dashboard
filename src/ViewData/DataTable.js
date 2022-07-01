import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { client } from "../App";
import { useAsync } from "react-async";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'

const { entities } = client;

export async function getAllEmplData() {
  const response = await entities.employee.list();
  return response.items;
}

function DataTable() {
  const columns = [
    { headerName: "First Name", field: "firstName", width: 100 },
    { headerName: "Last Name", field: "lastName", width: 100 },
    { headerName: "Age", field: "age", width: 70 },
    { headerName: "Gender", field: "genderID", width: 70 },
    { headerName: "Height", field: "height", width: 70 },
    { headerName: "Weight", field: "weight", width: 70 },
    { headerName: "Body Temp.", field: "bodyTemp", width: 100 },
    { headerName: "Pulse Rate", field: "pulseRate", width: 90 },
    { headerName: "BP Systolic", field: "bloodPressureSystolic", width: 100 },
    { headerName: "BP Diastolic", field: "bloodPressureDiastolic", width: 100 },
    { headerName: "Respiration Rate", field: "respirationRate", width: 130 },
    {
      headerName: "Avg Exercise Per Week",
      field: "avgWklyExercise",
      width: 175,
    },
    { headerName: "Vacation Balance", field: "vacationBalance", width: 130 },
    { headerName: "Avg Work Week", field: "avgWklyHrs", width: 120 },
  ];
  const { data, isPending } = useAsync({ promiseFn: getAllEmplData });
  //const load = true;
  if (isPending) return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ff970f' }}>
              <CircularProgress color="inherit" thickness={7}  />
            </Box>
        );
  if (data)
    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row._id}
          autoHeight
          rows={data}
          columns={columns}
          pageSize={15}
          checkboxSelection
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRowData = data.filter((row) =>
              selectedIDs.has(row._id.toString())
            );
          }}
          components={{ Toolbar: GridToolbar }}
          rowsPerPageOptions={[15, 30, 60]}
        />
      </div>
    );
}

export default DataTable;
