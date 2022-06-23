import { CssBaseline, Button, TextField } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styledComp from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NewEmpStyle from './NewEmpStyle.css';

function NewEmployee() {

    let navigate = useNavigate();

    const routeChangeReturnHome = () => {
        navigate('/');
    }

    return (
        <>
        <CssBaseline>
            <STYLE_TOP> <h1>Create New Employee</h1> </STYLE_TOP>
            <br/>
            <Button sx={{borderRadius: 50}} onClick={routeChangeReturnHome}> Return Home </Button>
        </CssBaseline>
            <br/>
            <br/>
            <br/>
            <br/>
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
                    <Paper sx={{ height: 300, width: 365, backgroundColor: '#b4fad4', borderRadius: 10}}
                           elevation={6}>
                        <STYLE> Name </STYLE>
                        <br/>
                        <form>
                            <label>
                                <input type="text" placeholder="First name"/>
                            </label>
                
                            <label>
                                <input type="text" placeholder="Last name"/>
                            </label>
                        </form>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 365, backgroundColor: '#b4eafa', borderRadius: 10}}
                           elevation={6}>
                        <STYLE> Age </STYLE>
                        <br/>
                        <form>
                            <label>
                                <input type="text" placeholder="Age"/>
                            </label>
                        </form>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 365, backgroundColor: '#b4fad4', borderRadius: 10}}
                           elevation={6}>
                        <STYLE> Gender </STYLE>
                        <br/>
                        <form>
                            <label>
                                <input type="text" placeholder="Gender"/>
                            </label>
                        </form>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 365, backgroundColor: '#b4eafa', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Height </STYLE>
                        <br/>
                        <form>
                            <label>
                                <input type="text" placeholder="Height"/>
                            </label>
                        </form>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 365, backgroundColor: '#b4fad4', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Weight </STYLE>
                        <br/>
                        <form>
                            <label>
                                <input type="text" placeholder="Weight"/>
                            </label>
                        </form>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 365, backgroundColor: '#b4eafa', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Body Temperature </STYLE>
                        <br/>
                        <form>
                            <label>
                                <input type="text" placeholder="Body Temperature"/>
                            </label>
                        </form>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 365, backgroundColor: '#b4fad4', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Pulse Rate </STYLE>
                        <br/>
                        <form>
                            <label>
                                <input type="text" placeholder="Pulse Rate"/>
                            </label>
                        </form>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 365, backgroundColor: '#b4eafa', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Blood pressure </STYLE>
                        <br/>
                        <form>
                            <label>
                                <input type="text" placeholder="Blood pressure"/>
                            </label>
                        </form>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 365, backgroundColor: '#b4fad4', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Respiration rate </STYLE>
                        <br/>
                        <form>
                            <label>
                                <input type="text" placeholder="Respiration Rate"/>
                            </label>
                        </form>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 365, backgroundColor: '#b4eafa', borderRadius: 10, fontSize: 1}}
                           elevation={6}>
                               
                        <STYLE> Avg hours of exercise per week </STYLE>
                        <br/>
                        <form>
                            <label>
                                <input type="text" placeholder="Avg hours of exercise per week"/>
                            </label>
                        </form>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 365, backgroundColor: '#b4fad4', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Vacation Balance </STYLE>
                        <br/>
                        <form>
                            <label>
                                <input type="text" placeholder="Vacation Balance"/>
                            </label>
                        </form>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 365, backgroundColor: '#b4eafa', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Avg hours of work per week </STYLE>
                        <br/>
                        <form>
                            <label>
                                <input type="text" placeholder="Avg hours of work per week"/>
                            </label>
                        </form>
                        
                    </Paper>
                    </Grid>
                </Grid>
            </Box>
            <br/>
            <br/>
            <br/>
            <br/>
            </MARGINS>
        </>
    )
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
    background-image: linear-gradient(144deg,#adffd0, #8afff7 50%,#a3d9ff);
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
`;

export default NewEmployee;
