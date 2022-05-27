import axios from "axios";

// export const getData = async () => {
//   let response = await axios.get(
//     "http://localhost:8080/HRC_Backend/DataLoading"
//   );
//   console.log(response.data.winterInternship);
//   return response.data.winterInternship;
// };
// getData();
export const addData = async ({
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
}) => {
  let data =
    "business_code=" +
    business_code +
    "&cust_number=" +
    cust_number +
    "&clear_date=" +
    clear_date +
    "&buisness_year=" +
    buisness_year +
    "&posting_date=" +
    posting_date +
    "&document_create_date=" +
    document_create_date +
    "&due_in_date=" +
    due_in_date +
    "&invoice_currency=" +
    invoice_currency +
    "&posting_id=" +
    posting_id +
    "&total_open_amount=" +
    total_open_amount +
    "&baseline_create_date=" +
    baseline_create_date +
    "&cust_payment_terms=" +
    cust_payment_terms +
    "&invoice_id=" +
    invoice_id +
    "&document_type=" +
    document_type +
    "&doc_id=" +
    doc_id;

  let response = await axios.get(
    "http://localhost:8080/HRC_Backend/AddInvoice?" + data
  );
  return response.data;
};
export const updateData = async ({
  sl_no,
  invoice_currency,
  cust_payment_terms,
}) => {
  let data =
    "invoice_currency=" +
    invoice_currency +
    "&cust_payment_terms=" +
    cust_payment_terms +
    "&sl_no=" +
    sl_no;
  let response = await axios.get(
    "http://localhost:8080/HRC_Backend/EditInvoice?" + data
  );
  return response.data;
};

export const deleteInvoice = async (sl_no) => {
  let data = "sl_no=" + sl_no;
  let response = await axios.get(
    "http://localhost:8080/HRC_Backend/DeleteInvoice?" + data
  );

  return response.data;
};

export const searchData = async (
  invoice_id,
  doc_id,
  buisness_year,
  cust_number
) => {
  let data =
    "invoice_id=" +
    invoice_id +
    "&doc_id=" +
    doc_id +
    "&buisness_year=" +
    buisness_year +
    "&cust_number=" +
    cust_number;
  let response = await axios.get(
    "http://localhost:8080/HRC_Backend/SearchInvoice?" + data
  );

  return response.data;
};

export const cust_id_search = async (cust_number) => {
  let data = "cust_number=" + cust_number;
  let response = await axios.get(
    "http://localhost:8080/HRC_Backend/Cust_id_search?" + data
  );

  return response.data;
};
