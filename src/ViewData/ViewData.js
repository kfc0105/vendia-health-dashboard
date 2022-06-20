import { CssBaseline, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import DataTable from "./DataTable";

function ViewData() {
  let navigate = useNavigate();

  const routeChangeReturnHome = () => {
    navigate("/");
  };

  return (
    <>
      <STYLE_1>
        <h1>Employee Data Summary</h1>
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
        <Button
          variant="contained"
          color="secondary"
          endIcon={<SendIcon />}
          sx={{
            borderRadius: 30,
            display: "flex",
          }}
        >
          {" "}
          Share Selection{" "}
        </Button>
        <br />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: 30,
            display: "flex",
          }}
        >
          {" "}
          Statistics Report{" "}
        </Button>
        <br />
      </CssBaseline>
      <div style={{ height: 400, width: "100%" }}>
        <DataTable />
      </div>
    </>
  );
}

const STYLE_1 = styled.div`
  background-image: linear-gradient(144deg, #adffd0, #8afff7 50%, #a3d9ff);
  text-align: center;
  font-family: "Ubuntu", sans-serif;
`;
export default ViewData;
