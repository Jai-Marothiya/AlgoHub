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
        <Typography variant="body1" style={{ marginTop: "1rem" }}>
          Please wait, we are processing your login...
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default LoaderDialog;
