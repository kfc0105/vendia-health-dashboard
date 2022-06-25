/* eslint-disable react-hooks/rules-of-hooks */
import { CssBaseline, Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styledComp from "styled-components";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NewEmpStyle from "./NewEmpStyle.css";
import { client } from "../App";
import { PowerInputSharp } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAsync } from "react-async";

const { entities } = client;

//If the initial input is empty
const initialFormData = Object({
  '"age"': 0,
  '"avgWklyExercise"': 0,
  '"avgWklyHrs"': 0,
  '"bloodPressureDiastolic"': 0,
  '"bloodPressureSystolic"': 0,
  '"bodyTemp"': 0,
  '"firstName"': "",
  '"genderID"': "",
  '"height"': 0,
  '"lastName"': "",
  '"pulseRate"': 0,
  '"respirationRate"': 0,
  '"vacationBalance"': 0,
  '"weight"': 0,
});

function NewEmployee() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  let navigate = useNavigate();

  const routeChangeReturnHome = () => {
    navigate("/");
  };

  const [input, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...input,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    handleClickOpen();
    e.preventDefault();
    const response = await entities.employee.add({
      age: parseFloat(input['"age"']),
      avgWklyExercise: parseFloat(input['"avgWklyExercise"']),
      avgWklyHrs: parseFloat(input['"avgWklyHrs"']),
      bloodPressureDiastolic: parseFloat(input['"bloodPressureDiastolic"']),
      bloodPressureSystolic: parseFloat(input['"bloodPressureSystolic"']),
      bodyTemp: parseFloat(input['"bodyTemp"']),
      firstName: input['"firstName"'],
      genderID: input['"genderID"'],
      height: parseFloat(input['"height"']),
      lastName: input['"lastName"'],
      pulseRate: parseFloat(input['"pulseRate"']),
      respirationRate: parseFloat(input['"respirationRate"']),
      vacationBalance: parseFloat(input['"vacationBalance"']),
      weight: parseFloat(input['"weight"']),
    });
  };

  return (
    <>
      <CssBaseline>
        <STYLE_TOP>
          {" "}
          <h1 style={{ marginTop: "0px" }}>Create New Employee</h1>{" "}
        </STYLE_TOP>
        <br />
        <Button
          variant="contained"
          style={{
            borderRadius: 30,
            backgroundColor: "#6a9dff",
            padding: "10px 30px",
            fontSize: "15px",
          }}
          sx={{ borderRadius: 30, display: "flex" }}
          onClick={routeChangeReturnHome}
        >
          {" "}
          Return Home{" "}
        </Button>
      </CssBaseline>
      <br />
      <br />
      <br />
      <br />
      <MARGINS>
        <Box sx={{ flexGrow: 0 }}>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            align="center"
          >
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  height: 300,
                  width: 365,
                  backgroundColor: "#c6feff",
                  borderRadius: 10,
                }}
                elevation={6}
              >
                <STYLE> Name </STYLE>
                <br />
                <form>
                  <label>
                    <input
                      name='"firstName"'
                      type="text"
                      placeholder="First Name"
                      onChange={handleChange}
                    />
                  </label>

                  <label>
                    <input
                      name='"lastName"'
                      type="text"
                      placeholder="Last Name"
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  height: 300,
                  width: 365,
                  backgroundColor: "#70a6fd",
                  borderRadius: 10,
                }}
                elevation={6}
              >
                <STYLE> Age </STYLE>
                <br />
                <form>
                  <label>
                    <input
                      name='"age"'
                      type="text"
                      placeholder="Enter"
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  height: 300,
                  width: 365,
                  backgroundColor: "#c6feff",
                  borderRadius: 10,
                }}
                elevation={6}
              >
                <STYLE> Gender </STYLE>
                <br />
                <form>
                  <label>
                    <input
                      name='"genderID"'
                      type="text"
                      placeholder="Enter"
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  height: 300,
                  width: 365,
                  backgroundColor: "#70a6fd",
                  borderRadius: 10,
                }}
                elevation={6}
              >
                <STYLE> Height </STYLE>
                <br />
                <form>
                  <label>
                    <input
                      name='"height"'
                      type="text"
                      placeholder="Enter"
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  height: 300,
                  width: 365,
                  backgroundColor: "#c6feff",
                  borderRadius: 10,
                }}
                elevation={6}
              >
                <STYLE> Weight </STYLE>
                <br />
                <form>
                  <label>
                    <input
                      name='"weight"'
                      type="text"
                      placeholder="Enter"
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  height: 300,
                  width: 365,
                  backgroundColor: "#70a6fd",
                  borderRadius: 10,
                }}
                elevation={6}
              >
                <STYLE> Body Temperature </STYLE>
                <br />
                <form>
                  <label>
                    <input
                      name='"bodyTemp"'
                      type="text"
                      placeholder="Enter"
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  height: 300,
                  width: 365,
                  backgroundColor: "#c6feff",
                  borderRadius: 10,
                }}
                elevation={6}
              >
                <STYLE> Pulse Rate </STYLE>
                <br />
                <form>
                  <label>
                    <input
                      name='"pulseRate"'
                      type="text"
                      placeholder="Enter"
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  height: 300,
                  width: 365,
                  backgroundColor: "#70a6fd",
                  borderRadius: 10,
                }}
                elevation={6}
              >
                <STYLE> Blood pressure </STYLE>
                <br />
                <form>
                  <label>
                    <input
                      name='"bloodPressureSystolic"'
                      type="text"
                      placeholder="Enter systolic value"
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <input
                      name='"bloodPressureDiastolic"'
                      type="text"
                      placeholder="Enter diastolic value"
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  height: 300,
                  width: 365,
                  backgroundColor: "#c6feff",
                  borderRadius: 10,
                }}
                elevation={6}
              >
                <STYLE> Respiration rate </STYLE>
                <br />
                <form>
                  <label>
                    <input
                      name='"respirationRate"'
                      type="text"
                      placeholder="Enter"
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  height: 300,
                  width: 365,
                  backgroundColor: "#70a6fd",
                  borderRadius: 10,
                  fontSize: 1,
                }}
                elevation={6}
              >
                <STYLE> Avg hours of exercise per week </STYLE>
                <br />
                <form>
                  <label>
                    <input
                      name='"avgWklyExercise"'
                      type="text"
                      placeholder="Enter"
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  height: 300,
                  width: 365,
                  backgroundColor: "#c6feff",
                  borderRadius: 10,
                }}
                elevation={6}
              >
                <STYLE> Vacation Balance </STYLE>
                <br />
                <form>
                  <label>
                    <input
                      name='"vacationBalance"'
                      type="text"
                      placeholder="Enter"
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  height: 300,
                  width: 365,
                  backgroundColor: "#70a6fd",
                  borderRadius: 10,
                }}
                elevation={6}
              >
                <STYLE> Avg hours of work per week </STYLE>
                <br />
                <form>
                  <label>
                    <input
                      name='"avgWklyHrs"'
                      type="text"
                      placeholder="Enter"
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <br />
        <br />
        <Button
          variant="contained"
          style={{
            borderRadius: 30,
            backgroundColor: "#6a9dff",
            padding: "10px 30px",
            fontSize: "15px",
          }}
          onClick={handleSubmit}
          sx={{
            borderRadius: 30,
            display: "flex",
          }}
        >
          {" "}
          Submit{" "}
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="statistics-report-title"
          aria-describedby="statistics-report"
        >
          <DialogContent>
            <DialogContentText id="report">
              <b>SUCCESS! You will now be redirected to the main page</b>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <br />
        <br />
      </MARGINS>
    </>
  );
}

const STYLE = styledComp.div`
    padding-top: 1rem;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.5rem;
`;

const MARGINS = styledComp.div`
    margin-right: 1.5rem;
    margin-left: 1.5rem;
`;

const STYLE_TOP = styledComp.div`
    background-image: linear-gradient(to right, #c6feff 0%, #5288fd 100%);
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
`;

export default NewEmployee;
