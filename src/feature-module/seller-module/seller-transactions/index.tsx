import ImageWithBasePath from "../../../core/img";
import { Link } from "react-router-dom";
import { sellerTransactionsData } from "../../../core/json/sellerTransactionsData";
import Table from "../../../core/dataTable/index";
import { DatePicker } from "antd";

const SellerTransactions = () => {
  const data = sellerTransactionsData;
  const columns = [
    {
      title: "ID de transaction",
      dataIndex: "Transaction_ID",
      sorter: (a: any, b: any) =>
        a.Transaction_ID.length - b.Transaction_ID.length,
    },
    {
      title: "Service",
      dataIndex: "Uploaded_For",
      render: (text: string, record: any) => (
        <h2 className="table-avatar d-flex align-items-center">
          <Link to="#" className="avatar avatar-md">
            <ImageWithBasePath
              src={`assets/img/gigs/${record.Image}`}
              className=""
              alt="User Image"
            />
          </Link>
          <Link to="#" className="text-dark">
            {text}
          </Link>
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
        <span
          className={`badge bg-light text-success border-success-100 users-badge ${
            text === "Debit" ? "debit-badge" : "credit-badge"
          }`}
        >
          <i
            className={`fa-solid ${
              text === "Debit" ? "fa-arrow-up" : "fa-arrow-down"
            } me-1`}
          />
          {text === "Debit" ? "Remboursement" : "Crédit"}
        </span>
      ),
      sorter: (a: any, b: any) => a.Type.length - b.Type.length,
    },
    {
      title: "Montant",
      dataIndex: "Amount",
      sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
    },
  ];
  return (
    <>
      {/* Contenu de la page */}
      <div className="page-wrapper">
        <div className="page-content content bg-light">
          <div className="main-title mb-4">
            <h4>Transactions</h4>
          </div>
          {/* Statut */}
          <div className="row status-info">
            <div className="col-lg-3 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="mb-1">Total des transactions</p>
                      <h5 className="mb-1">325</h5>
                      <span className="badge bg-light text-success border-success-100 users-badge">
                        {" "}
                        <i className="ti ti-arrow-up-right me-1" /> 6,78%{" "}
                      </span>
                    </div>
                    <ImageWithBasePath
                      src="assets/img/icons/transaction-icon-01.svg"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="mb-1">Total des crédits</p>
                      <h5 className="mb-1">25 850,00 €</h5>
                      <span className="badge bg-light text-success border-success-100 users-badge">
                        {" "}
                        <i className="ti ti-arrow-up-right me-1" /> 4,29%{" "}
                      </span>
                    </div>
                    <ImageWithBasePath
                      src="assets/img/icons/transaction-icon-02.svg"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="mb-1">Total des remboursements</p>
                      <h5 className="mb-1">15 500,00 €</h5>
                      <span className="badge bg-light text-success border-success-100 users-badge">
                        {" "}
                        <i className="ti ti-arrow-up-right me-1" /> 12,8%{" "}
                      </span>
                    </div>
                    <ImageWithBasePath
                      src="assets/img/icons/transaction-icon-03.svg"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="mb-1">Paiements en attente</p>
                      <h5 className="mb-1">1 800,00 €</h5>
                      <span className="badge bg-light text-success border-success-100 users-badge">
                        {" "}
                        <i className="ti ti-arrow-up-right me-1" /> 7,36%{" "}
                      </span>
                    </div>
                    <ImageWithBasePath
                      src="assets/img/icons/transaction-icon-04.svg"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Statut */}
          <div className="sub-title">
            <h5 className="mb-3">Liste des transactions</h5>
          </div>
          {/* Types */}
          <div className="row">
            <div className="col-lg-9">
              <div className="table-filter">
                <ul className="filter-item">
                  <li>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <i className="ti ti-transition-top me-2" />
                        Type de transaction
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2">
                        <li>
                          <Link to="#" className="dropdown-item">
                            Remboursement
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Crédit
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="form-sort form-wrap mb-0 date-info">
                      <span className="form-icon">
                        <i className="ti ti-calendar-event" />
                      </span>
                      <DatePicker
                        format={{
                          format: "DD-MM-YYYY",
                          type: "mask",
                        }}
                        className="form-control datetimepicker"
                        placeholder="03-04-2025"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="main-search">
                <div id="tablefilter">
                  <div className="dt-search">
                    <label htmlFor="dt-search-0"> </label>
                    <input type="search" placeholder="Rechercher" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Types */}
          {/* Tables */}
            <Table dataSource={data} columns={columns} Selection={false} />
          {/* /Tables */}
        </div>
      </div>
      {/* /Contenu de la page */}
    </>
  );
};

export default SellerTransactions;
