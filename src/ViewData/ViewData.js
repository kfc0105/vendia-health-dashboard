import { CssBaseline, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import SendIcon from "@mui/icons-material/Send";

function ViewData() {
  let navigate = useNavigate();

  const routeChangeReturnHome = () => {
    navigate("/");
  };

  const columns = [
    { headerName: "Name", field: "name", width: 70 },
    { headerName: "Age", field: "age", width: 70 },
    { headerName: "Gender", field: "gender", width: 70 },
    { headerName: "Height", field: "height", width: 70 },
    { headerName: "Weight", field: "weight", width: 70 },
    { headerName: "Body Temperature", field: "bodyTemp", width: 140 },
    { headerName: "Pulse Rate", field: "pulseRate", width: 90 },
    { headerName: "Blood Pressure", field: "bloodPressure", width: 120 },
    { headerName: "Respiration Rate", field: "respirationRate", width: 130 },
    {
      headerName: "Average Exercise Per Week",
      field: "weeklyExerciseHours",
      width: 220,
    },
    { headerName: "Vacation Balance", field: "vacationBalance", width: 130 },
    { headerName: "Average Work Week", field: "workWeekHours", width: 170 },
  ];

  const rows = [
    { id: 1, name: "Snow", age: 35 },
    { id: 2, name: "Lannister", age: 42 },
    { id: 3, name: "Lannister", age: 45 },
    { id: 4, name: "Stark", age: 16 },
    { id: 5, name: "Targaryen", age: 100 },
    { id: 6, name: "Melisandre", age: 150 },
    { id: 7, name: "Clifford", age: 44 },
    { id: 8, name: "Frances", age: 36 },
    { id: 9, name: "Roxie", age: 65 },
  ];

  return (
    <>
      <STYLE_1>
        <h1>Employee Data Summary</h1>
      </STYLE_1>
      <CssBaseline>
        <br />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: 30,
            display: "flex",
          }}
          onClick={routeChangeReturnHome}
        >
          {" "}
          Return Home{" "}
        </Button>
        <br />
        <Button
          variant="contained"
          color="secondary"
          endIcon={<SendIcon />}
          sx={{
            borderRadius: 30,
            display: "flex",
          }}
        >
          {" "}
          Share Selection{" "}
        </Button>
        <br />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: 30,
            display: "flex",
          }}
        >
          {" "}
          Statistics Report{" "}
        </Button>
        <br />
      </CssBaseline>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          checkboxSelection
        ></DataGrid>
      </div>
    </>
  );
}

const STYLE_1 = styled.div`
  background-image: linear-gradient(144deg, #adffd0, #8afff7 50%, #a3d9ff);
  text-align: center;
  font-family: "Ubuntu", sans-serif;
`;
export default ViewData;
