import { CssBaseline, Button } from "@mui/material";
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

  return (
    <>
      <STYLE_1>
        <h1 style={{marginTop: '0px'}}>Employee Data summary</h1>
      </STYLE_1>
      <CssBaseline>
        <br />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: 30,
            display: "flex",
          }}
          onClick={routeChangeReturnHome}
        >
          {" "}
          Return Home{" "}
        </Button>
        <br />
        <StatisticsReportModal />
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
