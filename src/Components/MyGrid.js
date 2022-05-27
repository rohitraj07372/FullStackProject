import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import AddInvoice from "./DilogBox/Add";
import EditInvoice from "./DilogBox/Edit";
import DeleteInvoice from "./DilogBox/Delete";
import AdvanceSearch from "./DilogBox/AdvanceSearch";

import {
  addData,
  deleteInvoice,
  updateData,
  searchData,
  cust_id_search,
} from "../Services/Data";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: "50px",
  },
  btns: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  btnsize: {
    width: "150px",
    height: "34px",
  },
}));

function MyGrid() {
  const classes = useStyles();

  const refreshPage = () => {
    // window.location.reload();

    sendGetRequest();
  };

  const [addInvoice, setAddInvoice] = useState({
    so_no: "",
    business_code: "",
    cust_number: "",
    clear_date: "",
    buisness_year: "",
    posting_date: "",
    document_create_date: "",
    due_in_date: "",
    invoice_currency: "",
    posting_id: "",
    total_open_amount: "",
    baseline_create_date: "",
    cust_payment_terms: "",
    invoice_id: "",
    document_type: "",
    doc_id: "",
  });
  const {
    sl_no,
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
  } = addInvoice;

  const submitHandler = async (update) => {
    let response = await updateData(addInvoice);
    if (response) {
      sendGetRequest();
    }
  };

  const addHandler = async (e) => {
    e.preventDefault();

    let response = await addData(addInvoice);
    if (response) {
      sendGetRequest();
      setAddInvoice({
        business_code: "",
        cust_number: "",
        clear_date: "",
        buisness_year: "",
        doc_id: "",
        posting_date: "",

        document_create_date: "",

        due_in_date: "",
        invoice_currency: "",
        posting_id: "",
        total_open_amount: "",
        baseline_create_date: "",
        cust_payment_terms: "",
        invoice_id: "",
        document_type: "",
      });
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAddInvoice({ ...addInvoice, [name]: value });
  };

  const deleteHandler = async () => {
    let response = await deleteInvoice(addInvoice.sl_no);
    if (response) {
      sendGetRequest();
    }
  };
  // desabled delete buttonGroup
  const [disabledDelete, setDesabledDelete] = useState(true);
  // disabled edit button

  const [disabledEdit, setDesabledEdit] = useState(true);

  // disabled add button

  const [disabledAdd, setDesabledAdd] = useState(false);

  const columns = [
    {
      field: "sl_no",
      headerName: "sl_no",
      width: 160,
      height: 50,
    },
    {
      field: "business_code",
      headerName: "business code ",
      width: 160,
      height: 50,
    },
    { field: "cust_number", headerName: "cust_number", width: 160, height: 50 },
    { field: "clear_date", headerName: "clear_date", width: 160, height: 50 },
    {
      field: "buisness_year",
      headerName: "buisness_year",
      width: 160,
      height: 50,
    },
    { field: "doc_id", headerName: "doc_id", width: 160, height: 50 },
    {
      field: "posting_date",
      headerName: "posting_date",
      width: 160,
      height: 50,
    },
    {
      field: "document_create_date",
      headerName: "document_create_date",
      width: 160,
      height: 50,
    },

    { field: "due_in_date", headerName: "due_in_date", width: 160, height: 50 },
    {
      field: "invoice_currency",
      headerName: "invoice_currency",
      width: 160,
      height: 50,
    },
    {
      field: "document_type",
      headerName: "document_type",
      width: 160,
      height: 50,
    },
    { field: "posting_id", headerName: "posting_id", width: 160, height: 50 },

    {
      field: "total_open_amount",
      headerName: "total_open_amount",
      width: 160,
      height: 50,
    },
    {
      field: "baseline_create_date",
      headerName: "baseline_create_date",
      width: 160,
      height: 50,
    },
    {
      field: "cust_payment_terms",
      headerName: "cust_payment_terms",
      width: 160,
      height: 50,
    },
    { field: "invoice_id", headerName: "invoice_id", width: 160, height: 50 },
  ];

  // advance search searchHandler
  const searchHandler = async () => {
    let searchResponse = await searchData(
      addInvoice.invoice_id,
      addInvoice.cust_number,
      addInvoice.doc_id,
      addInvoice.buisness_year
    );
    setTableData(searchResponse.winterInternship);
    console.log(searchResponse);
  };

  // loading data to the datagrid uisng axios.

  const [tableData, setTableData] = useState([]);
  const sendGetRequest = async () => {
    setLoading(true);
    try {
      const resp = await axios.get(
        "http://localhost:8080/HRC_Backend/DataLoading"
      );
      setTableData(resp.data.winterInternship);
      setLoading(false);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  useEffect(() => {
    sendGetRequest();
  }, []);

  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const custSearch = async (e) => {
    if (e.key === "Enter") {
      let response = await cust_id_search(addInvoice.cust_number);
      setTableData(response.winterInternship);
    }
  };

  return (
    <>
      <div className="indexBody">
        <div className={classes.btns}>
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            color="primary"
            style={{ float: "left", marginLeft: "20px" }}
          >
            <Button
              className="active"
              style={{
                color: "white",
                width: "200px",
                height: "34px",
                background: "#29b1f0",
              }}
            >
              PREDICT
            </Button>
            <Button style={{ color: "white", width: "200px", height: "34px" }}>
              ANALYTICS VIEW
            </Button>
            <Button style={{ color: "white", width: "200px", height: "34px" }}>
              <AdvanceSearch
                buisness_year={buisness_year}
                doc_id={doc_id}
                invoice_id={invoice_id}
                cust_number={cust_number}
                changeHandler={changeHandler}
                searchHandler={searchHandler}
              />
            </Button>
          </ButtonGroup>
        </div>
        <div className={classes.btns} style={{ float: "left" }}>
          <Button
            onClick={refreshPage}
            style={{ height: "34px" }}
            variant="outlined"
            color="primary"
          >
            <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
          </Button>
        </div>
        <div className={classes.btns} style={{ float: "left" }}>
          <input
            type="text"
            name="cust_number"
            value={cust_number}
            onChange={changeHandler}
            onKeyPress={custSearch}
            placeholder="search customer id"
            style={{ height: "29px", borderRadius: "8px", marginRight: "70px" }}
          ></input>
        </div>

        <div style={{ positions: "fixed" }}>
          <div style={{ float: "left", marginTop: "7px" }}>
            <AddInvoice
              disabledAdd={disabledAdd}
              business_code={business_code}
              cust_number={cust_number}
              clear_date={clear_date}
              business_year={buisness_year}
              posting_date={posting_date}
              document_create_date={document_create_date}
              due_in_date={due_in_date}
              invoice_currency={invoice_currency}
              posting_id={posting_id}
              total_open_amount={total_open_amount}
              baseline_create_date={baseline_create_date}
              customer_payment_terms={cust_payment_terms}
              invoice_id={invoice_id}
              document_type={document_type}
              document_id={doc_id}
              changeHandler={changeHandler}
              addHandler={addHandler}
            />
          </div>
          <div className="" style={{ float: "left", marginTop: "7px" }}>
            <EditInvoice
              disabledEdit={disabledEdit}
              invoice_currency={invoice_currency}
              cust_payment_terms={cust_payment_terms}
              submitHandler={submitHandler}
              changeHandler={changeHandler}
            />
          </div>
          <div className="" style={{ float: "left", marginTop: "7px" }}>
            <DeleteInvoice
              deleteHandler={deleteHandler}
              disabledDelete={disabledDelete}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          height: 450,
          width: "100%",
          position: "absolute",
          top: "11rem",
          color: "white",
        }}
      >
        <DataGrid
          sx={{
            boxShadow: 2,
            border: 0,
            color: "white",

            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
            "& .MuiCheckbox-root svg": {
              color: "white",
            },
            "& .MuiPaginationItem-root": {
              color: "white",
            },
            "& .MuiTablePagination-root": {
              color: "white",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          }}
          getRowId={(row) => row.sl_no}
          rows={tableData}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 25, 100]}
          pagination
          checkboxSelection
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRowData = tableData.filter((row) =>
              selectedIDs.has(row.sl_no)
            );

            if (selectedRowData[0] != null) {
              setDesabledEdit(false);
              setDesabledAdd(true);
              setDesabledDelete(false);
              setAddInvoice(selectedRowData[0]);
              console.log(selectedRowData[0]);
            } else {
              setDesabledEdit(true);
              setDesabledAdd(false);
              setDesabledDelete(true);
              setAddInvoice({
                business_code: "",
                cust_number: "",
                clear_date: "",
                buisness_year: "",
                doc_id: "",
                posting_date: "",

                document_create_date: "",

                due_in_date: "",
                invoice_currency: "",
                posting_id: "",
                total_open_amount: "",
                baseline_create_date: "",
                cust_payment_terms: "",
                invoice_id: "",
                document_type: "",
              });
            }
            if (selectedRowData.length > 1) {
              setDesabledEdit(true);
              console.log(selectedRowData.length);
            }
          }}
          loading={loading}
        />
      </div>
    </>
  );
}

export default MyGrid;
