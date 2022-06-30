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
            spacing={3}
            direction="row"
            justifyContent="center"
            align="center"
          >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE> Age </STYLE>
                <STYLE_STATS>
                <span >Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff'
                }}> {Math.round(Avg.getAverageAge(data))} </span>
                <br />
                <span>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff'
                }}> {Math.round(Median.getMedianAge(data))}</span>
                <br />
                <span>Mode: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{JSON.stringify(Mode.getModeAge(data))}</span>
                <br />
                <span>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{Range.getRangeAge(data)}</span>
                <br />
                <span>Standard Deviation: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{Math.round(StdDev.getStdDevAge(data))}</span>
                </STYLE_STATS>
                
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE> Height </STYLE>
                <STYLE_STATS>
                <span >Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff'
                }}> {Math.round(Avg.getAverageHeight(data))} in.</span>
                <br />
                <span>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff'
                }}> {Math.round(Median.getMedianHeight(data))} in.</span>
                <br />
                <span>Mode: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{JSON.stringify(Mode.getModeHeight(data))} in.</span>
                <br />
                <span>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{Range.getRangeHeight(data)} in.</span>
                <br />
                <span>Standard Deviation: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{Math.round(StdDev.getStdDevHeight(data))} in.</span>
                </STYLE_STATS>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE> Weight </STYLE>
                <STYLE_STATS>
                <span >Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff'
                }}> {Math.round(Avg.getAverageWeight(data))} lbs.</span>
                <br />
                <span>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff'
                }}> {Math.round(Median.getMedianWeight(data))} lbs.</span>
                <br />
                <span>Mode: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{JSON.stringify(Mode.getModeWeight(data))} lbs.</span>
                <br />
                <span>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{Range.getRangeWeight(data)} lbs.</span>
                <br />
                <span>Standard Deviation: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{Math.round(StdDev.getStdDevWeight(data))} lbs.</span>
                </STYLE_STATS>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
              <STYLE_STATS>
              <STYLE> Body Temperature </STYLE>
                <span >Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff'
                }}> {Math.round(Avg.getAverageBodyTemp(data) * 10) / 10} F</span>
                <br />
                <span>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff'
                }}> {Math.round(Median.getMedianBodyTemp(data) * 10) / 10} F</span>
                <br />
                <span>Mode: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{JSON.stringify(Mode.getModeBodyTemp(data))} F</span>
                <br />
                <span>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{Math.round(Range.getRangeBodyTemp(data) * 10) / 10} F</span>
                <br />
                <span>Standard Deviation: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}> {Math.round(StdDev.getStdDevBodyTemp(data) * 10) / 10} F</span>
                </STYLE_STATS>
                
                
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE> Pulse Rate </STYLE>
                <div>Average: {Math.round(Avg.getAveragePulseRate(data))}</div>
                <div>Median: {Math.round(Median.getMedianPulseRate(data))}</div>
                <div>Mode: {JSON.stringify(Mode.getModePulseRate(data))}</div>
                <div>Range: {Range.getRangePulseRate(data)}</div>
                <div>Standard Deviation: {Math.round(StdDev.getStdDevPulseRate(data))}</div>
                <br />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE> Blood Pressure (S/D) </STYLE>
                <div>Average: {Avg.getAverageBloodPressure(data)}</div>
                <div>Median: {Median.getMedianBloodPressure(data)}</div>
                <div>Mode (S): {JSON.stringify(Mode.getModeSysBloodPressure(data))}</div>
                <div>Mode (D): {JSON.stringify(Mode.getModeDiasBloodPressure(data))}</div>
                <div>Range: {Range.getRangeBloodPressure(data)}</div>
                <div>Standard Deviation: {StdDev.getStdDevBloodPressure(data)}</div>
                <br />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE> Respiration Rate </STYLE>
                <STYLE_STATS>
                <span >Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff'
                }}> {Math.round(Avg.getAverageRespirationRate(data))} bpm.</span>
                <br />
                <span>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff'
                }}> {Math.round(Median.getMedianRespirationRate(data))} bpm.</span>
                <br />
                <span>Mode: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{JSON.stringify(Mode.getModeRespirationRate(data))} bpm.</span>
                <br />
                <span>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{Range.getRangeRespirationRate(data)} bpm.</span>
                <br />
                <span>Standard Deviation: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{Math.round(StdDev.getStdDevRespirationRate(data))} bpm.</span>
                </STYLE_STATS>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE_SM> Hours of exercise per week </STYLE_SM>
                <STYLE_STATS>
                <span >Average:</span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff'
                }}> {Math.round(Avg.getAverageWklyExercise(data))} hrs.</span>
                <br />
                <span>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#6d7eff'
                }}> {Math.round(Median.getMedianWklyExercise(data))} hrs.</span>
                <br />
                <span>Mode: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{JSON.stringify(Mode.getModeWklyExercise(data))} hrs.</span>
                <br />
                <span>Range: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{Range.getRangeWklyExercise(data)} hrs.</span>
                <br />
                <span>Standard Deviation: </span>
                <span style={{
                fontSize: '23px', color: '#6d7eff'
                }}>{Math.round(StdDev.getStdDevWklyExercise(data))} hrs.</span>
                </STYLE_STATS>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class='card'>
                <STYLE_SM> Hours of work per week </STYLE_SM>
                <STYLE_STATS>
                <span >Average:</span>
                <span style={{
                  fontSize: '23px', color: '#dce0f7'
                }}> {Math.round(Avg.getAverageWklyHrs(data))} hrs.</span>
                <br />
                <span>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#dce0f7'
                }}> {Math.round(Median.getMedianWklyHrs(data))} hrs.</span>
                <br />
                <span>Mode: </span>
                <span style={{
                fontSize: '23px', color: '#dce0f7'
                }}>{JSON.stringify(Mode.getModeWklyHrs(data))} hrs.</span>
                <br />
                <span>Range: </span>
                <span style={{
                fontSize: '23px', color: '#dce0f7'
                }}>{Range.getRangeWklyHrs(data)} hrs.</span>
                <br />
                <span>Standard Deviation: </span>
                <span style={{
                fontSize: '23px', color: '#dce0f7'
                }}>{Math.round(StdDev.getStdDevWklyHrs(data))} hrs.</span>
                </STYLE_STATS>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}> 
              <div class='card'>
                <STYLE> Vacation Balance </STYLE>
                <STYLE_STATS>
                <span >Average:</span>
                <span style={{
                  fontSize: '23px', color: '#dce0f7'
                }}> {Math.round(Avg.getAverageVacationBalance(data))} days</span>
                <br />
                <span>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#dce0f7'
                }}> {Math.round(Median.getMedianVacationBalance(data))} days</span>
                <br />
                <span>Mode: </span>
                <span style={{
                fontSize: '23px', color: '#dce0f7'
                }}>{JSON.stringify(Mode.getModeVacationBalance(data))} days</span>
                <br />
                <span>Range: </span>
                <span style={{
                fontSize: '23px', color: '#dce0f7'
                }}>{Range.getRangeVacationBalance(data)} days</span>
                <br />
                <span>Standard Deviation: </span>
                <span style={{
                fontSize: '23px', color: '#dce0f7'
                }}>{Math.round(StdDev.getStdDevVacationBalance(data))} days</span>
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
  text-align: left;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.1rem;
`;

const STYLE_STATS = styled.div`
  padding-top: 1rem;
  padding-left: 1.2rem;
  text-align: left;
  font-family: "Ubuntu", sans-serif;
  font-size: .9rem;
`;

const STYLE_SM = styled.div`
  padding-top: 1rem;
  
  font-family: "Ubuntu", sans-serif;
  font-size: 0.88rem;
`;

export default DisplayStatistics;
