import React from "react";
import { Grid, Button } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


function OptionButtonsLP() {

    let navigate = useNavigate();

    const routeChangeNewData = () => {
        navigate('/addData');
    }

    const routeChangeViewData = () => {
        navigate('/viewData');
    }

    return (
        <STYLE_1>
           <Grid container spacing = {2}>
                <Grid item xs={6} md={6} lg={6}>
                    <Button variant="contained" sx={{
                        borderRadius: 50
                    }} onClick={routeChangeNewData}> Add New Data </Button>
                </Grid>

                <Grid item xs={6} md={6} lg={6}>
                    <Button variant="contained" sx={{
                        borderRadius: 50
                    }} onClick={routeChangeViewData}> View Data </Button>
                </Grid>
            </Grid> 
        </STYLE_1>
        
    );
};

const STYLE_1 = styled.div`
    text-align: center;
`

export default OptionButtonsLP;