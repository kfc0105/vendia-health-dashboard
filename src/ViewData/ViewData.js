import { CssBaseline, Button, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import DataTable from "./DataTable";
import StatisticsReportModal from "../ViewData/StatisticsReportModal";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { client } from "../App";
import { useAsync } from "react-async";

const { entities } = client;

const initialInputID = Object({
  //vendia requies quotation mark to be present when request is sent 
  'id': '""'
})

export async function getAllEmplData() {
  const response = await entities.employee.list();
  return response.items;
}



function ViewData() {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const routeChangeReturnHome = () => {
    navigate("/");
  };

  const routeChangeViewData = () => {
    navigate("/addData");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/viewData')
  };

  const handleChange = (e) => {
    updateInputid({
      ...inputID,
      [e.target.name]: e.target.value.trim(),
    });
  };

  /*
    It seems like it's been deleting different empoyee data then intended
  */
  const handleDelete = async () =>{
    console.log(inputID['id'])
    try { const response = await entities.employee.remove(inputID['id']); window.location.reload(); } 
    catch (e) { document.getElementById("err").innerHTML = "THE INPUT IS INVALID"; }
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

  const [inputID, updateInputid] = React.useState(initialInputID);


  let selected = false;
  if (selectedRows.length !== 0) {
    selected = true;
  }

  if (isPending) return "Loading...";
  if (data)
    return (
      <>
        <STYLE_1>
          <h1
            style={{
              marginTop: "0px",
              paddingBottom: "1.5rem",
              paddingTop: "1.5rem",
            }}
          >
            Employee Data summary
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

          <Button onClick={handleClickOpen}>
            Delete
          </Button>
          <Dialog open={open}>
            <Alert severity="warning" onClose={handleClose}>
              <AlertTitle>
                Warning
              </AlertTitle>
                This is a warning alert — 
                <strong>
                    YOUR DATA WILL BE PERMENTLY DELETED
                    *Reloads after successful request
                </strong>
                <form>
                  <label>
                    <input
                      name='id'
                      type="text"
                      placeholder="Enter ID"
                      onChange={handleChange}
                    />
                  </label>
                </form>
                <div id="err"></div>
                <button onClick={handleDelete}>
                  DELETE
                </button>
            </Alert>
          </Dialog>

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
  background-image: linear-gradient(to right, #fff5c6 0%, #fd8552 100%);
  text-align: center;
  font-family: "Ubuntu", sans-serif;
`;

export default ViewData;
