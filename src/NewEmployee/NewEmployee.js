import { CssBaseline, Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function ViewData() {

    let navigate = useNavigate();

    const routeChangeReturnHome = () => {
        navigate('/');
    }

    return (
        <CssBaseline>
            <h1>This is the View Data Page</h1>
            <br/>
            <Button variant="contained" sx={{
                        borderRadius: 50
                    }} onClick={routeChangeReturnHome}> Return Home </Button>
        </CssBaseline>
    )
}

export default ViewData;
