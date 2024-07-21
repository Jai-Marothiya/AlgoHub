import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Box, Snackbar } from "@mui/material";
import EditProblemForm from "./EditProblemForm";

const EditProblemDialog = ({ toggleEdit, setToggleEdit, problem }) => {
  const handleClose = () => {
    setToggleEdit(false);
  };
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  return (
    <React.Fragment>
      <Dialog
        open={toggleEdit}
        onClose={handleClose}
        PaperProps={{
          sx: { maxWidth: "820px", width: "100%", borderRadius: "8px" },
        }}
      >
        <Box sx={{ borderRadius: 1, p: 4, width: "92%" }}>
          <EditProblemForm
            setToggleEdit={setToggleEdit}
            problem={problem}
            setOpenSnackbar={setOpenSnackbar}
            setSnackbarMessage={setSnackbarMessage}
          />
        </Box>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => {
          setOpenSnackbar(false);
          setSnackbarMessage("");
        }}
        message={snackbarMessage}
        sx={{
          p: "8px",
          borderRadius: "8px",
          "& .MuiSnackbarContent-root": {
            backgroundColor: "rbg(0,0,0,0.82)", // Custom background color
            color: "#fff", // Custom text color
            display: "flex",
            justifyContent: "center",
            paddingX: "200px",
            borderRadius: "8px",
          },
          "& .MuiPaper-root": {
            fontFamily: "Jost, sans-serif",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "22px",
          },
        }}
      />
    </React.Fragment>
  );
};

export default EditProblemDialog;
