import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function DeleteInvoice({ deleteHandler, disabledDelete }) {
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
        disabled={disabledDelete}
        variant="contained"
        color="primary"
        style={{
          color: "white",
          width: "150px",
          height: "34px",
          float: "left",
          display: "inline-block",
        }}
        onClick={handleClickOpen}
      >
        DELETE
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{ background: "#002741", color: "white" }}
        >
          Delete Records?
        </BootstrapDialogTitle>
        <DialogContent
          dividers
          style={{ background: "#002741", color: "white" }}
        >
          <Typography>Are you sure you want to delete record[s]?</Typography>
        </DialogContent>
        <DialogActions style={{ background: "#002741", color: "white" }}>
          <Button
            variant="outlined"
            color="primary"
            autoFocus
            onClick={handleClose}
            style={{ width: "50%", height: "auto" }}
          >
            CANCEL
          </Button>
          <Button
            variant="outlined"
            color="primary"
            autoFocus
            onClick={() => {
              deleteHandler();
              handleClose();
            }}
            style={{ width: "50%", height: "auto" }}
          >
            DELETE
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
