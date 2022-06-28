import React from 'react';
import styled from 'styled-components';


function AveragesTitle() {
    return (
        <STYLE_1>
            
           <h1 style={{marginTop: '0px', color: 'white', fontSize: '1.3rem'}}>Employee Averages:</h1>
        </STYLE_1> 
    );
};

//linear-gradient(270deg, rgba(255,192,236,0.3211485277704832) 0%, rgba(128,120,255,1) 100%)

const STYLE_1 = styled.div`
    background-image: linear-gradient(68deg, rgba(192,255,247,0) 15%, #6d7eff 50%, rgba(192,255,247,0) 85%);
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    display: 'flex';
    boxShadow: '.1em';
    
`


export default AveragesTitle;