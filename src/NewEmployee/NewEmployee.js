import { CssBaseline, Button, TextField } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styledComp from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';


function NewEmployee() {

    let navigate = useNavigate();

    const routeChangeReturnHome = () => {
        navigate('/');
    }

    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
        setValue(0);
        } else if (value > 100) {
        setValue(100);
        }
    };

    const Input = styled(MuiInput)`
        width: 42px;
    `;

    

    return (
        <>
        <CssBaseline>
            <h1>This is the New Employee Page</h1>
            <br/>
            <Button variant="contained" sx={{
                        borderRadius: 50
                    }} onClick={routeChangeReturnHome}> Return Home </Button>

                    </CssBaseline>

            <br/>
            <br/>
            <br/>
            <br/><br/><br/><br/><br/>

            <Box sx={{ flexGrow: 0 }}>
            <Grid
                container
                spacing={5}
                direction="row"
                justifyContent="center"
                align="center"
                >
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 400, backgroundColor: 'white', textAlign: 'center', borderRadius: 10}}
                           elevation={6}>
                        <STYLE> Name </STYLE>
                        <br/>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 400, backgroundColor: 'white', textAlign: 'center', borderRadius: 10}}
                           elevation={6}>
                        <STYLE> Age </STYLE>
                        <br/>
                        <Grid item xs>
                            <SLIDER_FORMAT> 
                            <Slider
                                value={typeof value === 'number' ? value : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                            />

                            </SLIDER_FORMAT>
                            
                        </Grid>
                        <Grid item>
                            <Input
                                value={value}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                  step: 10,
                                  min: 0,
                                  max: 100,
                                  type: 'number',
                                  'aria-labelledby': 'input-slider',
                                }}
                            />
                        </Grid>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 400, backgroundColor: 'white', textAlign: 'center', borderRadius: 10}}
                           elevation={6}>
                        <STYLE> Gender </STYLE>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 400, backgroundColor: 'white', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Height </STYLE>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 400, backgroundColor: 'white', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Weight </STYLE>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 400, backgroundColor: 'white', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Body Temperature </STYLE>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 400, backgroundColor: 'white', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Pulse Rate </STYLE>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 400, backgroundColor: 'white', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Blood pressure </STYLE>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 400, backgroundColor: 'white', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Respiration rate </STYLE>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 400, backgroundColor: 'white', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Avg hours of exercise per week </STYLE>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 400, backgroundColor: 'white', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Vacation Balance </STYLE>
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <Paper sx={{ height: 300, width: 400, backgroundColor: 'white', borderRadius: 10}}
                           elevation={6}>
                               
                        <STYLE> Avg hours of work per week </STYLE>
                        
                    </Paper>
                    </Grid>
                </Grid>
            </Box>

        
        </>
    )
}

const STYLE = styledComp.div`
padding-top: 1rem;
text-align: center;
font-family: 'Ubuntu', sans-serif;
font-size: 1.5rem;
`;

const SLIDER_FORMAT = styledComp.div`
    margin-right: 3.5rem;
    margin-left: 3.5rem;
`


export default NewEmployee;
