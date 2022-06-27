import { CssBaseline, Button, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import DataTable from "./DataTable";
import StatisticsReportModal from "../ViewData/StatisticsReportModal";



function ViewData() {
  let navigate = useNavigate();

  const routeChangeReturnHome = () => {
    navigate("/");
  };

  const routeChangeViewData= () => {
    navigate("/addData");
  };

  return (
    <>
   
      <STYLE_1>
        <h1 style={{ marginTop: "0px", paddingBottom: '1.5rem', paddingTop: '1.5rem' }}>Employee Data summary</h1>
      </STYLE_1>
      <CssBaseline>
        <br />
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            align="center"
          >
            
              <Grid item xs={12} md={3} lg={3} >
                    <button className="buttonNE" onClick={routeChangeReturnHome} >
                            
                                <span class="text">Return Home</span>
                    </button>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                  <StatisticsReportModal />
              </Grid>
              <Grid item xs={12} md={3} lg={3}>
              <button className="buttonNE3" onClick={routeChangeViewData}>
                            
                        <span class="text">Create Employee</span>
                    </button>
              </Grid>
            </Grid>
        <br />
        
        <br />
      </CssBaseline>
      <div style={{ height: 400, width: "100%" }}>
        <DataTable />
      </div>
      
    </>
  );
}

const STYLE_1 = styled.div`
  background-image: linear-gradient(to right, #fff5c6 0%, #fd8552 100%);
  text-align: center;
  font-family: "Ubuntu", sans-serif;
`;


export default ViewData;
