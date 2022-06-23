import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function StatisticsReportModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        sx={{
          borderRadius: 30,
          display: "flex",
        }}
      >
        {" "}
        Statistics Report{" "}
      </Button>
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
          <DialogContentText id="report">
            Populate data report here
          </DialogContentText>
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
