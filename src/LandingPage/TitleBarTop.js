import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

function TitleBarTop() {
    return (
        <STYLE_1>
           <h1 style={{marginTop: '0px'}}>Welcome to Vendia Health Dashboard</h1>
        </STYLE_1> 
    );
};

const STYLE_1 = styled.div`

    background-image: linear-gradient(144deg,#adffd0, #8afff7 50%,#a3d9ff);
    text-align: center;
    font-family: 'Ubuntu', sans-serif;

`

export default TitleBarTop;
