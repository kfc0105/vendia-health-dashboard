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
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useAsync } from "react-async";
import img from '../bg_4_ne.svg'
import ButtonStyle from './ButtonStyle.css'
import EmployeeCards from './EmployeeCards.css'

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

  const routeChangeViewData = () => {
    navigate("/viewData");
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
    console.log(input)
    
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
    },
    
    {
      aclInput: {
        acl: [ 
          {
            principal: {
              nodes: ["*"]
            },
            path: "age",
            operations: ["READ"]
          },
          {
            principal: {
              nodes: ["*"]
            },
            path: "genderID",
            operations: ["READ"]
          },
          {
            principal: {
              nodes: ["*"]
            },
            path: "height",
            operations: ["READ"]
          },
          {
            principal: {
              nodes: ["*"]
            },
            path: "weight",
            operations: ["READ"]
          },
          {
            principal: {
              nodes: ["*"]
            },
            path: "bodyTemp",
            operations: ["READ"]
          },
          {
            principal: {
              nodes: ["*"]
            },
            path: "pulseRate",
            operations: ["READ"]
          },
          {
            principal: {
              nodes: ["*"]
            },
            path: "bloodPressureSystolic",
            operations: ["READ"]
          },
          {
            principal: {
              nodes: ["*"]
            },
            path: "bloodPressureDiastolic",
            operations: ["READ"]
          },
          {
            principal: {
              nodes: ["*"]
            },
            path: "respirationRate",
            operations: ["READ"]
          },
          {
            principal: {
              nodes: ["*"]
            },
            path: "avgWklyExercise",
            operations: ["READ"]
          },
          {
            principal: {
              nodes: ["*"]
            },
            path: "vacationBalance",
            operations: ["READ"]
          },
          {
            principal: {
              nodes: ["*"]
            },
            path: "avgWklyHrs",
            operations: ["READ"]
          }
        ]
      }
    });
    
  };

  return (
    <>
    <BACKGROUND>
      <CssBaseline>
        <STYLE_TOP>
          
          <div style={{paddingTop: '1.5rem', paddingBottom: '1.5rem', verticalAlign: 'middle'}}>
          <h1 style={{ marginTop: "0px", marginBottom: '0px' }}>
            Create New Employee
          </h1>

          </div>    
        </STYLE_TOP>
        <br />
        
        <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            align="center"
          >
            
              <Grid item xs={12} md={6} lg={6} >
                    <button className="buttonNE" onClick={routeChangeReturnHome} >
                            
                                <span class="text">Return Home</span>
                    </button>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
              <button className="buttonNE2" onClick={routeChangeViewData}>
                            
                        <span class="text">Employee Data</span>
                    </button>
              </Grid>
            </Grid>

        
        
      </CssBaseline>
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
              <div class='cardEmp'>
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
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <div class='cardEmp'>
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
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <div class='cardEmp'>
                <STYLE_SL> Gender </STYLE_SL>
                <br />
                <select name='"genderID"' placeholder="Enter" onChange={handleChange}>
                  <option value="" disabled selected style={{color: '#888888'}}>Select Gender</option>
                  <option value="m">M</option>  
                  <option value="f">F</option>
                  <option value="t">T</option>
                  <option value="n">N</option>
                  <option value="np">NP</option>
                </select>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <div class='cardEmp'>
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
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <div class='cardEmp'>
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
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <div class='cardEmp'>
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
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <div class='cardEmp'>
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
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <div class='cardEmp'>
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
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div class='cardEmp'>
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
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <div class='cardEmp'>
                <STYLE_SM2> Avg hours of exercise per week </STYLE_SM2>
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
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <div class='cardEmp'>
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
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <div class='cardEmp'>
                <STYLE_SM> Avg hours of work per week </STYLE_SM>
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
                </div>
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
          aria-labelledby="statistics-report-title"
          aria-describedby="statistics-report"
        >
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert onClose={handleClose}>SUCCESS! You will now be redirected to the main page</Alert>
          </Stack>
        </Dialog>
        <br />
        <br />
      </MARGINS>
      </BACKGROUND>
    </>
  );
}

const STYLE = styledComp.div`
    padding-top: 1rem;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.5rem;
`;

const STYLE_SM = styledComp.div`
    padding-top: 1rem;
    padding-bottom: .5rem;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.2rem;
`;

const STYLE_SM2 = styledComp.div`
    padding-top: 1rem;
    padding-bottom: 1.9rem;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.2rem;
`;


const STYLE_SL = styledComp.div`
    padding-top: 1rem;
    padding-bottom: 1.31rem;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.2rem;
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

const BACKGROUND = styledComp.div`
  background-image: url(${img});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin-bottom: 0px;

`

export default NewEmployee;
