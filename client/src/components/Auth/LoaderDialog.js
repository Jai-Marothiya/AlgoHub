import React from "react";
import {
  Dialog,
  DialogContent,
  CircularProgress,
  Typography,
} from "@mui/material";

const LoaderDialog = ({ open }) => {
  return (
    <Dialog open={open} disableBackdropClick={true} disableEscapeKeyDown={true}>
      <DialogContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <CircularProgress />
        <Typography
          variant="body1"
          style={{ marginTop: "1rem", textAlign: "center" }}
        >
          Unlock your coding potential. Your journey to mastering algorithms
          starts here.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default LoaderDialog;
