import { CssBaseline } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { getAllEmplQuery } from "../vendia/queries";
import { client } from "../App";
import { useAsync } from "react-async";
import * as Avg from "../calculations/AverageFunctions";

async function getAllEmplData() {
    const response = await client.request(getAllEmplQuery);
    const employees = response?.list_EmployeeItems?._EmployeeItems;
    // console.log(employees);
    return employees;
}

function DisplayAverages() {

    const { data, isPending } = useAsync({ promiseFn: getAllEmplData });
    if (isPending)
    return (
        <CssBaseline>
            <Box sx={{ flexGrow: 0 }}>
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                align="center"
                >
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Age: </STYLE>
                        <div>Loading...</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Height: </STYLE>
                        <div>Loading...</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Weight: </STYLE>
                        <div>Loading...</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Body Temperature: </STYLE>
                        <div>Loading...</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Pulse Rate: </STYLE>
                        <div>Loading...</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Blood Pressure (S/D): </STYLE>
                        <div>Loading...</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Respiration Rate </STYLE>
                        <div>Loading...</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE_SM> Hours of exercise per week: </STYLE_SM>
                        <div>Loading...</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE_SM> Hours of work per week: </STYLE_SM>
                        <div>Loading...</div>
                        <br/>
                    </Paper>
                    </Grid>
                    
                    
                    
                </Grid>
            </Box>
        </CssBaseline>
    )
    if (data)
    return (
        <CssBaseline>
            <Box sx={{ flexGrow: 0 }}>
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                align="center"
                >
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Age: </STYLE>
                        <div>{ (Avg.getAverageAge(data)) }</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Height: </STYLE>
                        <div>{ (Avg.getAverageHeight(data)) }</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Weight: </STYLE>
                        <div>{ (Avg.getAverageWeight(data)) }</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Body Temperature: </STYLE>
                        <div>{ (Avg.getAverageBodyTemp(data)) }</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Pulse Rate: </STYLE>
                        <div>{ (Avg.getAveragePulseRate(data)) }</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Blood Pressure (D/S): </STYLE>
                        <div>{ (Avg.getAverageBloodPressure(data)) }</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Respiration Rate </STYLE>
                        <div>{ (Avg.getAverageRespirationRate(data)) }</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE_SM> Hours of exercise per week: </STYLE_SM>
                        <div>{ (Avg.getAverageWklyExercise(data)) }</div>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE_SM> Hours of work per week: </STYLE_SM>
                        <div>{ (Avg.getAverageWklyHrs(data)) }</div>
                        <br/>
                    </Paper>
                    </Grid>
                    
                    
                    
                </Grid>
            </Box>
        </CssBaseline>
    )
}

const STYLE = styled.div`
    padding-top: 1rem;
    padding-left: 1.2rem;
    text-align: left;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.1rem;
`;

const STYLE_SM = styled.div`
    padding-top: 1rem;
    padding-left: 1.2rem;
    text-align: left;
    font-family: 'Ubuntu', sans-serif;
    font-size: .88rem;
`;





export default DisplayAverages;