import React from 'react';
import styled from 'styled-components';
import Logo from './white.svg';

function TitleBarTop() {
    return (
        <STYLE_1>
            <img
              src={Logo}
              style={{ height: 65, width: 199 }}
              alt="website logo"
            />
           <h1 style={{marginTop: '0px', color: 'white', fontSize: '1.5rem'}}>Health Dashboard</h1>
        </STYLE_1> 
    );
};

//linear-gradient(270deg, rgba(255,192,236,0.3211485277704832) 0%, rgba(128,120,255,1) 100%)

const STYLE_1 = styled.div`
    background-image: linear-gradient(144deg,#97ffda, #6d7eff 50%, #97ffda);
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    display: 'flex';
    boxShadow: '.1em';
    
`

export default TitleBarTop;
