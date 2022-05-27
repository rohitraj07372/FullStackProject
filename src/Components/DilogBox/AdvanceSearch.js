import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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

export default function AdvanceSearch({
  buisness_year,
  doc_id,
  invoice_id,
  cust_number,
  changeHandler,
  searchHandler,
}) {
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
        variant=""
        color="primary"
        style={{
          color: "white",
          width: "100%",
          height: "34px",
          float: "left",
          display: "inline-block",
        }}
        onClick={handleClickOpen}
      >
        Advance Search
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
          Advance Search
        </BootstrapDialogTitle>
        <DialogContent
          dividers
          style={{ background: "#002741", color: "white" }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              Color: "white",
              textAlign: "center",
              justifyContent: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              name="doc_id"
              id="filled-required"
              label="Business Year"
              variant="filled"
              onChange={changeHandler}
              value={doc_id}
            />
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              name="invoice_id"
              id="filled-required"
              label="Invoice ID"
              variant="filled"
              onChange={changeHandler}
              value={invoice_id}
            />
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              name="cust_number"
              id="filled-required"
              label="Document id"
              variant="filled"
              onChange={changeHandler}
              value={cust_number}
            />
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              id="filled-required"
              label="Customr Number"
              variant="filled"
              onChange={changeHandler}
              value={buisness_year}
              name="buisness_year"
            />
          </Box>
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
              searchHandler();
              handleClose();
            }}
            style={{ width: "50%", height: "auto" }}
          >
            SEARCH
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
