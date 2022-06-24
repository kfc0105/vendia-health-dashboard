import { CssBaseline } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import TitleBarTop from './TitleBarTop.js';
import OptionButtonsLP from './OptionButtonsLP.js'
import DisplayAverages from './DisplayAverages.js';

function LandingPage() {
    return (
        <CssBaseline>
            <TitleBarTop/>
            <br/>
            <br/>
            <OptionButtonsLP/>
            <br/>
            <br/>
            <br/>
            <DisplayAverages/>
        </CssBaseline>
    )
}

export default LandingPage;
