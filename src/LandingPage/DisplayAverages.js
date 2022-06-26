import { CssBaseline } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function DisplayAverages() {
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
                        <STYLE> Avg: ____ </STYLE>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Avg: ____ </STYLE>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Avg: ____ </STYLE>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Avg: ____ </STYLE>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Avg: ____ </STYLE>
                        <br/>
                    </Paper>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <Paper sx={{ height: 305, width: 220, backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)', borderRadius: 5}}
                           elevation={6}>
                        <STYLE> Avg: ____ </STYLE>
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





export default DisplayAverages;