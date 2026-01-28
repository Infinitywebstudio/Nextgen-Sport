import PredefinedDateRanges from "../../../core/common/datePicker";
import Table from "../../../core/dataTable/index";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import { BuyerTransactionData } from "../../../core/json/buyertransactionData";

const BuyerTransactions = () => {
    const data = BuyerTransactionData;
    const columns = [
      {
        title: "Transaction ID",
        dataIndex: "Transaction_ID",
        sorter: (a: any, b: any) => a.Transaction_ID.length - b.Transaction_ID.length,
      },
      {
        title: "Uploaded For",
        dataIndex: "Uploaded_For",
        render: (text: any, record: any) => (
          <h2 className="table-avatar d-flex align-items-center">
            <Link to="#" className="avatar avatar-md">
              <ImageWithBasePath
                src={`/assets/img/gigs/${record.Image}`}
                className=""
                alt="img"
              />
            </Link>
            <Link to="#">{text}</Link>
          </h2>
        ),
        sorter: (a: any, b: any) => a.Uploaded_For.length - b.Uploaded_For.length,
      },
      {
        title: "Date",
        dataIndex: "Date",
        sorter: (a: any, b: any) => a.Date.length - b.Date.length,
      },
      {
        title: "Type",
        dataIndex: "Type",
        render: (text: string) => (
            <span className={`new-badge ${text === 'Debit' ? 'badge-soft-danger' : 'badge-soft-success'}`}>
            <i className={`fa-solid ${text === 'Debit' ? 'fa-arrow-up' : 'fa-arrow-down'} me-1`}/>{text}
          </span>
          
        ),
        sorter: (a: any, b: any) => a.Type.length - b.Type.length,
      },
      {
        title: "Amount",
        dataIndex: "Amount",
        sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
      },
      {
        title: "Action",
        dataIndex: "Action",
        render: () => (
            <div className="table-action">
            <Link
              to="#"
              className="border-rounded view-eye"
              data-bs-toggle="modal"
              data-bs-target="#transaction_details"
            >
              <i className="feather icon-eye" />
            </Link>
          </div>
          
        
        ),
        sorter: (a: any, b: any) => a.Action.length - b.Action.length,
      },
    ];
  return (
    <>

        {/* Page Content */}
        <div className="page-wrapper">
          <div className="page-content content bg-light">
            <div className="main-title mb-4">
              <h4>Transactions</h4>
            </div>
            {/* Status */}
            <div className="row status-info">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-start mb-2">
                      <div className="avatar avatar-md bg-success rounded-circle me-2 d-flex align-item-center justify-content-center text-center">
                        <i className="ti ti-arrows-exchange text-white d-flex align-items-center justify-content-center" />
                      </div>
                      <div>
                        <p className="mb-1"> Total Transactions</p>
                        <h5 className="mb-1">325</h5>
                      </div>
                    </div>
                    <div className="bg-light p-2">
                      <span className="text-success">
                        <i className="ti ti-arrow-up-right me-1" /> 6.78%
                      </span>{" "}
                      from last month
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-start mb-2">
                      <div className="avatar avatar-md bg-error rounded-circle me-2 d-flex align-item-center justify-content-center text-center">
                        <i className="ti ti-arrow-down text-white d-flex align-items-center justify-content-center" />
                      </div>
                      <div>
                        <p className="mb-1"> Total Debits</p>
                        <h5 className="mb-1">$15,500.00</h5>
                      </div>
                    </div>
                    <div className="bg-light p-2">
                      <span className="text-success">
                        <i className="ti ti-arrow-up-right me-1" /> 12.8%
                      </span>{" "}
                      from last month
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-start mb-2">
                      <div className="avatar avatar-md bg-info rounded-circle me-2 d-flex align-item-center justify-content-center text-center">
                        <i className="ti ti-currency-dollar text-white d-flex align-items-center justify-content-center" />
                      </div>
                      <div>
                        <p className="mb-1"> Montant remboursé </p>
                        <h5 className="mb-1">$1,800.00</h5>
                      </div>
                    </div>
                    <div className="bg-light p-2">
                      <span className="text-success">
                        <i className="ti ti-arrow-up-right me-1" /> 7.36%
                      </span>{" "}
                      from last month
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Status */}
            <div className="sub-title">
              <h5 className="mb-3"> Transactions List </h5>
            </div>
            {/* Types */}
            <div className="row">
              <div className="col-lg-9 col-sm-8">
                <ul className="filters-wrap">
                  {/* Categories */}
                  <li>
                    <div className="collapse-card">
                      <div className="filter-header">
                        <Link to="#">
                          <i className="ti ti-transition-top" /> Transaction
                          Type
                        </Link>
                      </div>
                      <div
                        id="categories"
                        className="collapse-body"
                        style={{ display: "none" }}
                      >
                        <ul className="checkbox-list categories-lists">
                          <li className="active">
                            <label className="custom_check">
                              <span className="checked-title">Debit</span>
                            </label>
                          </li>
                          <li>
                            <label className="custom_check">
                              <span className="checked-title">Credit</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* /Categories */}
                  {/* Date */}
                  <li>
                  <div className="mb-3">
                      <div
                        id="reportrange"
                        className="reportrange-picker d-flex align-items-center"
                      >
                        <i className="ti ti-calendar text-gray-5 fs-14 me-1" />
                        <PredefinedDateRanges />
                      </div>
                    </div>
                  </li>
                  {/* /Date */}
                </ul>
              </div>
              <div className="col-lg-3 col-sm-4">
                <div className="main-search">
                  <div id="tablefilter" />
                </div>
              </div>
            </div>
            {/* Types */}
            {/*  Tables */}
            <div className="table-responsive custom-table">
            <Table dataSource={data} columns={columns} Selection={false} />
            </div>
            {/*  /Tables */}
            {/* Transaction details  */}
            <div
              className="modal new-modal fade"
              id="transaction_details"
              data-keyboard="false"
              data-backdrop="static"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="d-flex align-item-center">
                      <h5 className="modal-title me-2">Transaction details </h5>
                      <span className="badge badge-pink-transparent">
                        Completed
                      </span>
                    </div>
                    <button
                      type="button"
                      className="close-btn"
                      data-bs-dismiss="modal"
                    >
                      <span>×</span>
                    </button>
                  </div>
                  <div className="modal-body service-modal">
                    <div className="sumary-widget">
                      <div className="summary-info">
                        <h6 className="mb-1"> Transaction ID</h6>
                        <p> #TXN-20250321-00123462 </p>
                      </div>
                      <div className="summary-info">
                        <h6 className="mb-1"> Transaction Type </h6>
                        <p> Purchase </p>
                      </div>
                      <div className="summary-info">
                        <h6 className="mb-1"> Amount</h6>
                        <p> $320 </p>
                      </div>
                      <div className="summary-info">
                        <h6 className="mb-1"> Currency</h6>
                        <p> USD </p>
                      </div>
                      <div className="summary-info">
                        <h6 className="mb-1"> Processing Fee</h6>
                        <p> $20 </p>
                      </div>
                      <div className="summary-info">
                        <h6 className="mb-1"> Payment Method</h6>
                        <p> Credit Card </p>
                      </div>
                      <div className="summary-info mb-0">
                        <h6 className="mb-1"> Sender</h6>
                        <p> John Doe </p>
                      </div>
                      <div className="summary-info mb-0">
                        <h6 className="mb-1"> Receiver</h6>
                        <p> Jane Smith </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Transaction details */}
          </div>
        </div>
        {/* /Page Content */}

    </>
  );
};

export default BuyerTransactions;
