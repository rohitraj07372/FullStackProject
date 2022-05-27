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

export default function AddInvoice({
  disabledAdd,
  business_code,
  cust_number,
  clear_date,
  buisness_year,
  posting_date,
  document_create_date,
  due_in_date,
  invoice_currency,
  posting_id,
  total_open_amount,
  baseline_create_date,
  cust_payment_terms,
  invoice_id,
  document_type,
  doc_id,
  addHandler,
  changeHandler,
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
        disabled={disabledAdd}
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
        ADD
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .MuiPaper-root ": {
            maxWidth: "1000px",
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{ background: "#002741", color: "white" }}
        >
          AddInvoice
        </BootstrapDialogTitle>
        <DialogContent
          dividers
          style={{ background: "#002741", color: "white" }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              "& .MuiInputLabel-root": { m: -1 },
              Color: "white",

              justifyContent: "center",
            }}
            noValidate
            autoComplete="on"
          >
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              name="business_code"
              id="filled-required"
              label="Business Code"
              variant="filled"
              value={business_code}
              onChange={changeHandler}
            />
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              name="cust_number"
              id="filled-required"
              label="Customer Number"
              variant="filled"
              value={cust_number}
              onChange={changeHandler}
            />
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              id="filled-required"
              label="Clear Date"
              variant="filled"
              name="clear_date"
              type="date"
              value={clear_date}
              onChange={changeHandler}
            />
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              name="buisness_year"
              id="filled-required"
              label="Business Year"
              variant="filled"
              value={buisness_year}
              onChange={changeHandler}
            />
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              name="doc_id"
              id="filled-required"
              label="Document Id"
              variant="filled"
              value={doc_id}
              onChange={changeHandler}
            />
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              name="posting_date"
              value={posting_date}
              onChange={changeHandler}
              id="filled-required"
              type="date"
              label="Posting Date"
              variant="filled"
            />
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              id="filled-required"
              label="Document Create Date"
              variant="filled"
              type="date"
              name="document_create_date"
              value={document_create_date}
              onChange={changeHandler}
            />
            <TextField
              style={{
                background: "white",
                borderRadius: "6px",
              }}
              required
              id="filled-required"
              label="Due Date"
              lablePlacement="left"
              variant="filled"
              name="due_in_date"
              type="date"
              value={due_in_date}
              onChange={changeHandler}
            />
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              id="filled-required"
              label="Invoice Currency"
              variant="filled"
              name="invoice_currency"
              value={invoice_currency}
              onChange={changeHandler}
            />

            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              id="filled-required"
              label="Document Type"
              variant="filled"
              name="document_type"
              value={document_type}
              onChange={changeHandler}
            />
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              id="filled-required"
              label="Posting Id"
              variant="filled"
              name="posting_id"
              value={posting_id}
              onChange={changeHandler}
            />
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              id="filled-required"
              label="Total Open Amount"
              variant="filled"
              name="total_open_amount"
              value={total_open_amount}
              onChange={changeHandler}
            />
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              id="filled-required"
              label="Baseline create date"
              variant="filled"
              name="baseline_create_date"
              type="date"
              value={baseline_create_date}
              onChange={changeHandler}
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
            <TextField
              style={{ background: "white", borderRadius: "6px" }}
              required
              id="filled-required"
              label="Invoice Id"
              variant="filled"
              name="invoice_id"
              value={invoice_id}
              onChange={changeHandler}
            />
          </Box>
        </DialogContent>
        <DialogActions style={{ background: "#002741", color: "white" }}>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            autoFocus
            onClick={addHandler}
            style={{ width: "50%", height: "auto" }}
          >
            ADD
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
