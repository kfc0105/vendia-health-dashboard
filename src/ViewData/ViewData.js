import { CssBaseline, Button, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import StatisticsReportModal from "../ViewData/StatisticsReportModal";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { client } from "../App";
import { useAsync } from "react-async";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const { entities } = client;

export async function getAllEmplData() {
  const response = await entities.employee.list();
  return response.items;
}

function ViewData() {
  let navigate = useNavigate();

  const routeChangeReturnHome = () => {
    navigate("/");
  };

  const routeChangeViewData = () => {
    navigate("/addData");
  };

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

  const [selectedRows, setSelectedRows] = React.useState([]);
  const { data, isPending } = useAsync({ promiseFn: getAllEmplData });

  let selected = false;
  if (selectedRows.length !== 0) {
    selected = true;
  }


  if (isPending)
    return (
      <>
      <br/><br/><br/><br/><br/>
      <h1 style={{justifyContent: "center",
            alignItems: "center", textAlign: 'center'}}>Loading Employee Data...</h1> <br/>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ff970f",
          }}
        >
          
          <CircularProgress color="inherit" thickness={7} />
        </Box>
      </>
    );
  if (data)
    return (
      <>
        <STYLE_1>
          <h1
            style={{
              marginTop: "0px",
              paddingBottom: "1.5rem",
              paddingTop: "1.5rem",
              color: 'white'
            }}
          >
            Employee Data Summary
          </h1>
        </STYLE_1>
        <CssBaseline>
          <br />
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            align="center"
          >
            <Grid item xs={12} md={3} lg={3}>
              <button className="buttonNE" onClick={routeChangeReturnHome}>
                <span class="text">Return Home</span>
              </button>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              {!selected && <StatisticsReportModal data={data} />}
              {selected && <StatisticsReportModal data={selectedRows} />}
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <button className="buttonNE3" onClick={routeChangeViewData}>
                <span class="text">Create Employee</span>
              </button>
            </Grid>
          </Grid>
          <br />

          <br />
        </CssBaseline>
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
              setSelectedRows(selectedRowData);
            }}
            components={{ Toolbar: GridToolbar }}
            rowsPerPageOptions={[15, 30, 60]}
          />
        </div>
      </>
    );
}

const STYLE_1 = styled.div`
  background-image: linear-gradient(to right, #ffed9f 0%, #d06a3f 100%);
  text-align: center;
  font-family: "Ubuntu", sans-serif;
`;

export default ViewData;
