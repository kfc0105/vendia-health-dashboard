import { CssBaseline } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { getAllEmplQuery } from "../vendia/queries";
import { client } from "../App";
import { useAsync } from "react-async";
import * as Avg from "../calculations/AverageFunctions";
import * as StdDev from "../calculations/StdDevFunctions";
import * as Mode from "../calculations/ModeFunctions";
import * as Median from "../calculations/MedianFunctions";
import * as Range from "../calculations/RangeFunctions"
import CardStyle from './CardStyle.css'
import CircularProgress from '@mui/material/CircularProgress';

async function getAllEmplData() {
  const response = await client.request(getAllEmplQuery);
  const employees = response?.list_EmployeeItems?._EmployeeItems;
  console.log(employees);
  return employees;
}

function DisplayStatistics() {

  const { data, isPending } = useAsync({ promiseFn: getAllEmplData });
  //const load = true
  if (isPending) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#a0fadf' }}>
          <CircularProgress color="inherit" thickness={7}  />
        </Box>
      );
  if (data)
    return (
      <CssBaseline>
        <Box sx={{ flexGrow: 0 }}>
          <Grid
            container
            spacing={4}
            direction="row"
            justifyContent="center"
            align="center"
          >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE> Age </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Avg.getAverageAge(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Median.getMedianAge(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Range.getRangeAge(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Math.round(StdDev.getStdDevAge(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#6d7eff', float: 'right'
                }}>{JSON.stringify(Mode.getModeAge(data))}</span>
                </STYLE_STATS>
                
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
              <STYLE> Height </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Avg.getAverageHeight(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Median.getMedianHeight(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Range.getRangeHeight(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Math.round(StdDev.getStdDevHeight(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#6d7eff', float: 'right'
                }}>{JSON.stringify(Mode.getModeHeight(data))}</span>
                </STYLE_STATS>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE> Weight </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Avg.getAverageWeight(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Median.getMedianWeight(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Range.getRangeWeight(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Math.round(StdDev.getStdDevWeight(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#6d7eff', float: 'right'
                }}>{JSON.stringify(Mode.getModeWeight(data))}</span>
                </STYLE_STATS>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
              
              <STYLE> Body Temperature </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Avg.getAverageBodyTemp(data) * 10) / 10} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Median.getMedianBodyTemp(data) * 10) / 10}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Math.round(Range.getRangeBodyTemp(data) * 10) / 10} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Math.round(StdDev.getStdDevBodyTemp(data) * 10) / 10}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '12.5px', color: '#6d7eff', float: 'right'
                }}>{JSON.stringify(Mode.getModeBodyTemp(data))} </span>
                </STYLE_STATS>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE> Pulse Rate </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Avg.getAveragePulseRate(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Median.getMedianPulseRate(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Range.getRangePulseRate(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Math.round(StdDev.getStdDevPulseRate(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#6d7eff', float: 'right'
                }}>{JSON.stringify(Mode.getModePulseRate(data))}</span>
                </STYLE_STATS>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE> Blood Pressure (S/D) </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Avg.getAverageBloodPressure(data)} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Median.getMedianBloodPressure(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Range.getRangeBloodPressure(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{StdDev.getStdDevBloodPressure(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode (S): </span>
                <span style={{
                fontSize: '12.5px', color: '#6d7eff', float: 'right'
                }}>{JSON.stringify(Mode.getModeSysBloodPressure(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode (D): </span>
                <span style={{
                fontSize: '12.5px', color: '#6d7eff', float: 'right'
                }}>{JSON.stringify(Mode.getModeDiasBloodPressure(data))}</span>
                </STYLE_STATS>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE> Respiration Rate </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Avg.getAverageRespirationRate(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Median.getMedianRespirationRate(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Range.getRangeRespirationRate(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Math.round(StdDev.getStdDevRespirationRate(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#6d7eff', float: 'right'
                }}>{JSON.stringify(Mode.getModeRespirationRate(data))}</span>
                </STYLE_STATS>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE_SM> Hours of exercise per week </STYLE_SM>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Avg.getAverageWklyExercise(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Median.getMedianWklyExercise(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Range.getRangeWklyExercise(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Math.round(StdDev.getStdDevWklyExercise(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#6d7eff', float: 'right'
                }}>{JSON.stringify(Mode.getModeWklyExercise(data))}</span>
                </STYLE_STATS>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE_SM> Hours of work per week </STYLE_SM>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Avg.getAverageWklyHrs(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Median.getMedianWklyHrs(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Range.getRangeWklyHrs(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Math.round(StdDev.getStdDevWklyHrs(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#6d7eff', float: 'right'
                }}>{JSON.stringify(Mode.getModeWklyHrs(data))}</span>
                </STYLE_STATS>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}> 
              <div class='card'>
                <STYLE> Vacation Balance </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Avg.getAverageVacationBalance(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff', float: 'right'
                }}> {Math.round(Median.getMedianVacationBalance(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Range.getRangeVacationBalance(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff', float: 'right'
                }}>{Math.round(StdDev.getStdDevVacationBalance(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#6d7eff', float: 'right'
                }}>{JSON.stringify(Mode.getModeVacationBalance(data))}</span>
                </STYLE_STATS>
              </div>
            </Grid>
          </Grid>
        </Box>
      </CssBaseline>
    );
}

const STYLE = styled.div`
  padding-top: 1rem;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
`;

const STYLE_STATS = styled.div`
  padding-top: 1rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  text-align: left;
  font-family: "Ubuntu", sans-serif;
  font-size: .9rem;
`;

const STYLE_SM = styled.div`
  padding-top: 1rem;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.0rem;
  font-weight: 600;
`;

export default DisplayStatistics;
