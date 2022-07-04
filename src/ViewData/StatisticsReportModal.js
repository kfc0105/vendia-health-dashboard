import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
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
          Statistics Report{" "}
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
            <DialogContentText id="report"></DialogContentText>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="card">
                <STYLE> Age: </STYLE>
                <div>Average: {Math.round(Avg.getAverageAge(data))}</div>
                <div>Median: {Math.round(Median.getMedianAge(data))}</div>
                <div>Mode: {JSON.stringify(Mode.getModeAge(data))}</div>
                <div>Range: {Range.getRangeAge(data)}</div>
                <div>
                  Standard Deviation: {Math.round(StdDev.getStdDevAge(data))}
                </div>
                <br />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="card">
                <STYLE> Height: </STYLE>
                <div>Average: {Math.round(Avg.getAverageHeight(data))}</div>
                <div>Median: {Math.round(Median.getMedianHeight(data))}</div>
                <div>Mode: {JSON.stringify(Mode.getModeHeight(data))}</div>
                <div>Range: {Range.getRangeHeight(data)}</div>
                <div>
                  Standard Deviation: {Math.round(StdDev.getStdDevHeight(data))}
                </div>

                <br />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="card">
                <STYLE> Weight: </STYLE>
                <div>Average: {Math.round(Avg.getAverageWeight(data))}</div>
                <div>Median: {Math.round(Median.getMedianWeight(data))}</div>
                <div>Mode: {JSON.stringify(Mode.getModeWeight(data))}</div>
                <div>Range: {Range.getRangeWeight(data)}</div>
                <div>
                  Standard Deviation: {Math.round(StdDev.getStdDevWeight(data))}
                </div>
                <br />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="card">
                <STYLE> Body Temperature: </STYLE>
                <div>
                  Average: {Math.round(Avg.getAverageBodyTemp(data) * 10) / 10}
                </div>
                <div>
                  Median: {Math.round(Median.getMedianBodyTemp(data) * 10) / 10}
                </div>
                <div>Mode: {JSON.stringify(Mode.getModeBodyTemp(data))}</div>
                <div>
                  Range: {Math.round(Range.getRangeBodyTemp(data) * 10) / 10}
                </div>
                <div>
                  Standard Deviation:{" "}
                  {Math.round(StdDev.getStdDevBodyTemp(data) * 10) / 10}
                </div>
                <br />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="card">
                <STYLE> Pulse Rate: </STYLE>
                <div>Average: {Math.round(Avg.getAveragePulseRate(data))}</div>
                <div>Median: {Math.round(Median.getMedianPulseRate(data))}</div>
                <div>Mode: {JSON.stringify(Mode.getModePulseRate(data))}</div>
                <div>Range: {Range.getRangePulseRate(data)}</div>
                <div>
                  Standard Deviation:{" "}
                  {Math.round(StdDev.getStdDevPulseRate(data))}
                </div>
                <br />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="card">
                <STYLE> Blood Pressure (S/D): </STYLE>
                <div>Average: {Avg.getAverageBloodPressure(data)}</div>
                <div>Median: {Median.getMedianBloodPressure(data)}</div>
                <div>
                  Mode (S): {JSON.stringify(Mode.getModeSysBloodPressure(data))}
                </div>
                <div>
                  Mode (D):{" "}
                  {JSON.stringify(Mode.getModeDiasBloodPressure(data))}
                </div>
                <div>Range: {Range.getRangeBloodPressure(data)}</div>
                <div>
                  Standard Deviation: {StdDev.getStdDevBloodPressure(data)}
                </div>
                <br />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="card">
                <STYLE> Respiration Rate: </STYLE>
                <div>
                  Average: {Math.round(Avg.getAverageRespirationRate(data))}
                </div>
                <div>
                  Median: {Math.round(Median.getMedianRespirationRate(data))}
                </div>
                <div>
                  Mode: {JSON.stringify(Mode.getModeRespirationRate(data))}
                </div>
                <div>Range: {Range.getRangeRespirationRate(data)}</div>
                <div>
                  Standard Deviation:{" "}
                  {Math.round(StdDev.getStdDevRespirationRate(data))}
                </div>
                <br />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="card">
                <STYLE_SM> Hours of exercise per week: </STYLE_SM>
                <div>
                  Average: {Math.round(Avg.getAverageWklyExercise(data))}
                </div>
                <div>
                  Median: {Math.round(Median.getMedianWklyExercise(data))}
                </div>
                <div>
                  Mode: {JSON.stringify(Mode.getModeWklyExercise(data))}
                </div>
                <div>Range: {Range.getRangeWklyExercise(data)}</div>
                <div>
                  Standard Deviation:{" "}
                  {Math.round(StdDev.getStdDevWklyExercise(data))}
                </div>
                <br />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="card">
                <STYLE_SM> Hours of work per week: </STYLE_SM>
                <div>Average: {Math.round(Avg.getAverageWklyHrs(data))}</div>
                <div>Median: {Math.round(Median.getMedianWklyHrs(data))}</div>
                <div>Mode: {JSON.stringify(Mode.getModeWklyHrs(data))}</div>
                <div>Range: {Range.getRangeWklyHrs(data)} </div>
                <div>
                  Standard Deviation:{" "}
                  {Math.round(StdDev.getStdDevWklyHrs(data))}
                </div>
                <br />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div class="card">
                <STYLE> Vacation Balance: </STYLE>
                <div>
                  Average: {Math.round(Avg.getAverageVacationBalance(data))}
                </div>
                <div>
                  Median: {Math.round(Median.getMedianVacationBalance(data))}
                </div>
                <div>
                  Mode: {JSON.stringify(Mode.getModeVacationBalance(data))}
                </div>
                <div>Range: {Range.getRangeVacationBalance(data)} </div>
                <div>
                  Standard Deviation:{" "}
                  {Math.round(StdDev.getStdDevVacationBalance(data))}
                </div>
                <br />
              </div>
            </Grid>
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
  padding-left: 1.2rem;
  text-align: left;
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
