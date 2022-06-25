import React from "react";
import { Grid, Button } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import OptionButtonsCSS from './OptionButtonsCSS.css'


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
           <Grid container spacing = {2} direction="row"
                >
                <Grid item xs={12} sm={12} md={12} lg={12} alignItems="center">
                    <button className="button" 
                            onClick={routeChangeNewData}>
                                <span class="text">Create New Employee</span>
                    </button>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} alignItems="center">
                    <button className="button2" 
                            onClick={routeChangeViewData}>
                                <span class="text">View Employee Data</span>
                    </button>
                </Grid>
            </Grid> 
        </STYLE_1>
        
    );
};

const STYLE_1 = styled.div`
    text-align: center;
`

export default OptionButtonsLP;
