import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

function TitleBarTop() {
    return (
        <STYLE_1>
            <Typography variant='h4'> Main Page </Typography>
        </STYLE_1> 
    );
};

const STYLE_1 = styled.div`

    background-color: #42fcd7;
    text-align: center;

`

export default TitleBarTop;