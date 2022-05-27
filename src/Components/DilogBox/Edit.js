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

export default function EditInvoice({
  disabledEdit,
  invoice_currency,
  cust_payment_terms,
  changeHandler,
  submitHandler,
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
        variant="contained"
        color="primary"
        disabled={disabledEdit}
        style={{
          color: "white",
          width: "150px",
          height: "34px",
          float: "left",
          display: "inline-block",
        }}
        onClick={handleClickOpen}
      >
        EDIT
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
          Edit Invoice
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
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              name="invoice_currency"
              id="filled-required"
              label="Invoice Currency"
              variant="filled"
              onChange={changeHandler}
              value={invoice_currency}
            />
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              id="filled-required"
              label="Customer Payment Terms"
              variant="filled"
              name="cust_payment_terms"
              value={cust_payment_terms}
              onChange={changeHandler}
            />
          </Box>
        </DialogContent>
        <DialogActions style={{ background: "#002741", color: "white" }}>
          <Button
            variant="outlined"
            color="primary"
            autoFocus
            onClick={() => {
              submitHandler();
              handleClose();
            }}
            style={{ width: "50%", height: "auto" }}
          >
            EDIT
          </Button>
          <Button
            variant="outlined"
            color="primary"
            autoFocus
            onClick={handleClose}
            style={{ width: "50%", height: "auto" }}
          >
            CANCEL
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
