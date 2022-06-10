import { CssBaseline } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import TitleBarTop from './TitleBarTop.js';
import OptionButtonsLP from './OptionButtonsLP.js'

function LandingPage() {
    return (
        <CssBaseline>
            <TitleBarTop/>
            <br/>
            <br/>
            <br/>
            <br/>
            <OptionButtonsLP/>
        </CssBaseline>
    )
}

export default LandingPage;
