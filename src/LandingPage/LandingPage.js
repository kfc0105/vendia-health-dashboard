import { CssBaseline } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import TitleBarTop from './TitleBarTop.js';
import OptionButtonsLP from './OptionButtonsLP.js'
import DisplayAverages from './DisplayAverages.js';
import img from './cool-bg2.png';

function LandingPage() {
    return (
        <CssBaseline>
            <BACKGROUND>
            <TitleBarTop/>
            <br/>
            <br/>
            <OptionButtonsLP/>
            <br/>
            <br/>
            <br/>
            <DisplayAverages/>
            <br/>
            <br/>
            <br/>
            </BACKGROUND>
        </CssBaseline>
    )
}

const BACKGROUND = styled.div`
  background-image: url(${img});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin-bottom: 0px;

`

export default LandingPage;
