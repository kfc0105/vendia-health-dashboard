import { CssBaseline } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardStyle from './CardStyle.css'

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
                    <div class="card">
                        <STYLE>Age:</STYLE>
                    </div>   
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                    <div class="card">
                        <STYLE>Height:</STYLE>
                    </div>   
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <div class="card">
                        <STYLE>Weight:</STYLE>
                    </div>   
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                    <div class="card">
                        <STYLE>Body Temperature:</STYLE>
                    </div>   
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                    <div class="card">
                        <STYLE>Pulse Rate:</STYLE>
                    </div>   
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <div class="card">
                        <STYLE>Blood Pressure [D/S]:</STYLE>
                    </div>   
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <div class="card">
                        <STYLE>Respiration Rate:</STYLE>
                    </div>   
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <div class="card">
                        <STYLE_SM>Hours of exercise per week:</STYLE_SM>
                    </div>   
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4} lg={3} >
                    <div class="card">
                        <STYLE_SM>Hours of work per week:</STYLE_SM>
                    </div>   
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
    font-size: .9rem;
`;





export default DisplayAverages;