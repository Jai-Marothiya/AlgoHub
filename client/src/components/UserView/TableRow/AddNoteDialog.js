import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { TextField, Box, Typography, Snackbar } from "@mui/material";
import { endpoints } from "../../../constants/endpoints";
import { DataContext } from "../../../context/DataProvider";
import axios from "axios";

const AddNoteDialog = ({ toggleNote, setToggleNote, note, problemId }) => {
  const { setProblemNotes } = React.useContext(DataContext);
  const [currNote, setCurrNote] = React.useState(note);
  const { account } = React.useContext(DataContext);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  const handleClose = () => {
    setCurrNote(note);
    setToggleNote(false);
  };

  const handleUpdateNote = async () => {
    if (!currNote && currNote.length === 0) {
      setSnackbarMessage("Please add a note");
      setOpenSnackbar(true);
      return;
    }
    axios({
      method: "POST",
      url: endpoints.saveNote,
      data: {
        user_id: account.id,
        problem_id: problemId,
        note: currNote,
      },
    }).then((response) => {
      setCurrNote(response.data.note);
      const newNote = response.data.data;
      setProblemNotes((prevNotes) => {
        if (!Array.isArray(prevNotes)) {
          prevNotes = [];
        }
        // Check if the note already exists
        const noteIndex = prevNotes.findIndex(
          (note) => note.problem_id === newNote.problem_id
        );

        if (noteIndex !== -1) {
          // Update the existing note
          const updatedNotes = [...prevNotes];
          updatedNotes[noteIndex] = newNote;
          return updatedNotes;
        } else {
          // Add the new note
          return [...prevNotes, newNote];
        }
      });
    });

    setToggleNote(false);
    setSnackbarMessage(
      note.length > 0 ? "Note edited" : "Note successfully added"
    );
    setOpenSnackbar(true);
  };

  const handleDelete = async () => {
    axios({
      method: "PUT",
      url: endpoints.deleteNote,
      data: {
        user_id: account.id,
        problem_id: problemId,
      },
    }).then((response) => {
      setCurrNote(response.data.note);
    });

    setToggleNote(false);

    setSnackbarMessage("Edits deleted");
    setOpenSnackbar(true);
  };

  const handleDiscard = () => {
    setCurrNote(note);
    setToggleNote(false);
    setSnackbarMessage(
      note.length > 0 ? "Changes discarded" : "Note discarded"
    );
    setOpenSnackbar(true);
  };

  React.useEffect(() => {
    setCurrNote(note);
  }, [note]);

  return (
    <React.Fragment>
      <Dialog
        open={toggleNote}
        onClose={handleClose}
        PaperProps={{
          sx: { maxWidth: "780px", borderRadius: "8px" },
        }}
      >
        <Box sx={{ borderRadius: 1, p: 4 }}>
          <Typography
            id="add-note-dialog-title"
            sx={{
              color: "rgba(0, 0, 0, 0.87)",
              fontFamily: "Jost, sans-serif",
              fontSize: "20px",
              fontWeight: "500",
              lineHeight: "32.0px",
              letterSpacing: "0px",
              mb: 4,
            }}
          >
            {note.length > 0
              ? "Edit note"
              : "Make a note for future references"}
          </Typography>
          <Box>
            <TextField
              multiline
              maxRows={10} // Set the maximum number of rows before scrolling starts
              value={currNote}
              onChange={(e) => setCurrNote(e.target.value)}
              sx={{
                mb: 4,
                width: "700px",
                maxHeight: "275px",
                overflow: "auto",
                color: "rgba(0, 0, 0, 0.87)",
                fontFamily: "Jost, sans-serif",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "24.0px",
                letterSpacing: "0px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                borderRadius: "4px",
              }}
              InputProps={{
                sx: {
                  "& textarea": {
                    whiteSpace: "pre-wrap",
                    overflowY: "auto",
                  },
                  "&.MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "1px solid rgba(0, 0, 0, 0.08)", // Default border color
                    },
                    "&:hover fieldset": {
                      border: "1px solid rgba(0, 0, 0, 0.08)", // Disable hover effect
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid rgba(0, 0, 0, 0.08)", // Disable focus effect
                    },
                  },
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: note.length > 0 ? "space-between" : "flex-end",
            }}
          >
            {note.length > 0 && (
              <Button
                onClick={handleDelete}
                sx={{
                  paddingX: 1.5,
                  paddingY: 1,
                  "&:hover": {
                    background: "#fff7f8",
                    borderRadius: "4px",
                  },
                  color: "#C7192E",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "14px",
                  fontWeight: "500",
                  borderRadius: "4px",
                  textTransform: "none",
                }}
              >
                Delete note
              </Button>
            )}
            <Box>
              <Button
                onClick={handleDiscard}
                sx={{
                  paddingX: 1.5,
                  paddingY: 1,
                  ml: 1,
                  "&:hover": {
                    background: "#F5F7FF",
                    borderRadius: "4px",
                  },
                  color: "#1E3DCE",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "14px",
                  fontWeight: "500",
                  borderRadius: "4px",
                  textTransform: "none",
                }}
              >
                Discard
              </Button>
              <Button
                onClick={handleUpdateNote}
                sx={{
                  paddingX: 1.5,
                  paddingY: 1,
                  ml: 1,
                  background: "rgba(65, 93, 221, 1)",
                  "&:hover": {
                    background: "#1E3DCE",
                  },
                  color: "#fff",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "14px",
                  fontWeight: "500",
                  borderRadius: "4px",
                  textTransform: "none",
                }}
              >
                {note.length > 0 ? "Save note" : "Add note"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
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

export default AddNoteDialog;
