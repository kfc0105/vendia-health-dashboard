import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import StatReportStyle from './StatReportStyle.css'
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import img from '../bg1.svg'
import * as Avg from "../calculations/AverageFunctions";
import * as StdDev from "../calculations/StdDevFunctions";
import * as Mode from "../calculations/ModeFunctions";
import * as Median from "../calculations/MedianFunctions";
import * as Range from "../calculations/RangeFunctions";

export default function StatisticsReportModal({ data }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(data);
  if (data.empty) {
    return <div>Please make a selection</div>;
  } else {
    return (
      <div>
        <button
          class="buttonClear" onClick={handleClickOpen} 
        >
          {" "}
          Create Custom Report{" "}
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="statistics-report-title"
          aria-describedby="statistics-report"
        >
          <DialogTitle id="statistics-report-title">
            {"Employee Data Report"}
          </DialogTitle>
          <DialogContent>
          <STYLE_MODAL>
            <DialogContentText id="report"></DialogContentText>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="cardMDL">
                <STYLE> Age: </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Avg.getAverageAge(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Median.getMedianAge(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Range.getRangeAge(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Math.round(StdDev.getStdDevAge(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#fc8a26', float: 'right'
                }}>{JSON.stringify(Mode.getModeAge(data))}</span>
                </STYLE_STATS>
                
              </div>
              <br /><br />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="cardMDL">
                <STYLE> Height: </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Avg.getAverageHeight(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Median.getMedianHeight(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Range.getRangeHeight(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Math.round(StdDev.getStdDevHeight(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#fc8a26', float: 'right'
                }}>{JSON.stringify(Mode.getModeHeight(data))}</span>
                </STYLE_STATS>

              
              </div>
              <br /><br />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="cardMDL">
                <STYLE> Weight: </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Avg.getAverageWeight(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Median.getMedianWeight(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Range.getRangeWeight(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Math.round(StdDev.getStdDevWeight(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#fc8a26', float: 'right'
                }}>{JSON.stringify(Mode.getModeWeight(data))}</span>
                </STYLE_STATS>
              </div>
              <br /><br />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="cardMDL">
                <STYLE> Body Temperature: </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Avg.getAverageBodyTemp(data) * 10) / 10} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Median.getMedianBodyTemp(data) * 10) / 10}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Math.round(Range.getRangeBodyTemp(data) * 10) / 10} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Math.round(StdDev.getStdDevBodyTemp(data) * 10) / 10}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '12.5px', color: '#fc8a26', float: 'right'
                }}>{JSON.stringify(Mode.getModeBodyTemp(data))} </span>
                </STYLE_STATS>
                <br />
              </div>
              <br /><br />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="cardMDL">
                <STYLE> Pulse Rate: </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Avg.getAveragePulseRate(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Median.getMedianPulseRate(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Range.getRangePulseRate(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Math.round(StdDev.getStdDevPulseRate(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#fc8a26', float: 'right'
                }}>{JSON.stringify(Mode.getModePulseRate(data))}</span>
                </STYLE_STATS>
                <br />
              </div>
              <br /><br />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="cardMDL">
                <STYLE> Blood Pressure (S/D): </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Avg.getAverageBloodPressure(data)} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Median.getMedianBloodPressure(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Range.getRangeBloodPressure(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{StdDev.getStdDevBloodPressure(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode (S): </span>
                <span style={{
                fontSize: '12.5px', color: '#fc8a26', float: 'right'
                }}>{JSON.stringify(Mode.getModeSysBloodPressure(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode (D): </span>
                <span style={{
                fontSize: '12.5px', color: '#fc8a26', float: 'right'
                }}>{JSON.stringify(Mode.getModeDiasBloodPressure(data))}</span>
                </STYLE_STATS>
              </div>
              <br /><br />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="cardMDL">
                <STYLE> Respiration Rate: </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Avg.getAverageRespirationRate(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Median.getMedianRespirationRate(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Range.getRangeRespirationRate(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Math.round(StdDev.getStdDevRespirationRate(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#fc8a26', float: 'right'
                }}>{JSON.stringify(Mode.getModeRespirationRate(data))}</span>
                </STYLE_STATS>
              </div>
              <br /><br />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="cardMDL">
                <STYLE_SM> Hours of exercise per week: </STYLE_SM>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Avg.getAverageWklyExercise(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Median.getMedianWklyExercise(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Range.getRangeWklyExercise(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Math.round(StdDev.getStdDevWklyExercise(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#fc8a26', float: 'right'
                }}>{JSON.stringify(Mode.getModeWklyExercise(data))}</span>
                </STYLE_STATS>
              </div>
              <br /><br />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="cardMDL">
                <STYLE_SM> Hours of work per week: </STYLE_SM>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Avg.getAverageWklyHrs(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Median.getMedianWklyHrs(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Range.getRangeWklyHrs(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Math.round(StdDev.getStdDevWklyHrs(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#fc8a26', float: 'right'
                }}>{JSON.stringify(Mode.getModeWklyHrs(data))}</span>
                </STYLE_STATS>
              </div>
              <br /><br />
            </Grid>
            
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="cardMDL">
                <STYLE> Vacation Balance: </STYLE>
                <STYLE_STATS>
                <span style={{textAlign: "left"}}>Average:</span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Avg.getAverageVacationBalance(data))} </span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Median: </span>
                <span style={{
                  fontSize: '23px', color: '#fc8a26', float: 'right'
                }}> {Math.round(Median.getMedianVacationBalance(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Range: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Range.getRangeVacationBalance(data)}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Std Dev: </span>
                <span style={{
                fontSize: '23px', color: '#fc8a26', float: 'right'
                }}>{Math.round(StdDev.getStdDevVacationBalance(data))}</span>
                <br />
                <br />
                <span style={{textAlign: "left"}}>Mode: </span>
                <span style={{
                fontSize: '14px', color: '#fc8a26', float: 'right'
                }}>{JSON.stringify(Mode.getModeVacationBalance(data))}</span>
                </STYLE_STATS>
            
              </div>
              <br /><br />
            </Grid>
            </STYLE_MODAL>
          </DialogContent>
          
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const STYLE = styled.div`
  padding-top: 1rem;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.1rem;
`;

const STYLE_SM = styled.div`
  padding-top: 1rem;
  padding-left: 1.2rem;
  text-align: left;
  font-family: "Ubuntu", sans-serif;
  font-size: 0.88rem;
`;

const STYLE_MODAL = styled.div`
  padding-right: 5rem;
  padding-left: 5rem;
  text-align: left;
  font-family: "Ubuntu", sans-serif;
  font-size: 0.88rem;
`;

const BACKGROUND = styled.div`
  background-image: url(${img});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin-bottom: 0px;

`

const STYLE_STATS = styled.div`
  padding-top: 1rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  text-align: left;
  font-family: "Ubuntu", sans-serif;
  font-size: .9rem;
`;