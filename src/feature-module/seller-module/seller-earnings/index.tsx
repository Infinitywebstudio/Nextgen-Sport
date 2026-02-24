import { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import CommonSelect from "../../../core/common/common-select/commonSelect";
import { Chart } from "../../../core/common/selectOption";
import { sellerEarningsData } from "../../../core/json/sellerEarningsData";
import Table from "../../../core/dataTable/index";
import ReactApexChart from "react-apexcharts";

const SellerEarnings = () => {
  const data = sellerEarningsData;

  const [saleChart] = useState<any>({
    chart: {
      height: 290,
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ["#FF6F28", "#F8F9FA"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        borderRadius: 5,
        borderRadiusWhenStacked: "all",
        horizontal: false,
        endingShape: "rounded",
      },
    },
    series: [
      {
        name: "Income",
        data: [
          10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 160, 150,
          140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10,
        ],
      },
      {
        name: "Expenses",
        data: [60, 70, 55, 20, 15, 10, 20, 20, 20, 15, 80, 20],
      },
    ],
    xaxis: {
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
      ],
      labels: {
        style: {
          colors: "#6B7280",
          fontSize: "13px",
        },
      },
    },
    yaxis: {
      labels: {
        offsetX: -15,
        style: {
          colors: "#6B7280",
          fontSize: "13px",
        },
      },
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 5,
      padding: {
        left: -8,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    fill: {
      opacity: 1,
    },
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      render: (text: string) => (
        <Link to="" className="text-grey fw-regular">
          {text}
        </Link>
      ),
      sorter: (a: any, b: any) => a.ID.length - b.ID.length,
    },
    {
      title: "Uploaded For",
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
      title: "Payment Type",
      dataIndex: "Payment_Type",
      sorter: (a: any, b: any) => a.Payment_Type.length - b.Payment_Type.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
    },
  ];

  return (
    <>
      {/* Page Content */}
      <div className="page-wrapper">
        <div className="page-content content bg-light">
          <div className="main-title mb-4">
            <h4>Earnings</h4>
          </div>
          {/* Status*/}
          <div className="row status-info">
            <div className="col-xl-3 col-lg-6 col-md-6">
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
                  <div className="badge bg-light text-success border-success-100 users-badge text-success w-100 text-start">
                    {" "}
                    <i className="ti ti-arrow-up-right me-1" /> 6.78%{" "}
                    <span className="text-grey ps-1 fw-regular">
                      From last month
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <div className="avatar avatar-md bg-warning rounded-circle me-2 d-flex align-item-center justify-content-center text-center">
                      <i className="ti ti-arrow-up text-white d-flex align-items-center justify-content-center" />
                    </div>
                    <div>
                      <p className="mb-1"> Total Credits</p>
                      <h5 className="mb-1">$25,850.00</h5>
                    </div>
                  </div>
                  <div className="badge bg-light text-success border-success-100 users-badge text-success w-100 text-start">
                    {" "}
                    <i className="ti ti-arrow-up-right me-1" /> 4.29%{" "}
                    <span className="text-grey ps-1 fw-regular">
                      From last month
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
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
                  <div className="badge bg-light text-success border-success-100 users-badge text-success w-100 text-start">
                    {" "}
                    <i className="ti ti-arrow-up-right me-1" /> 12.8%{" "}
                    <span className="text-grey ps-1 fw-regular">
                      From last month
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <div className="avatar avatar-md bg-info rounded-circle me-2 d-flex align-item-center justify-content-center text-center">
                      <i className="ti ti-currency-dollar text-white d-flex align-items-center justify-content-center" />
                    </div>
                    <div>
                      <p className="mb-1"> Pending Payments </p>
                      <h5 className="mb-1">$1,800.00</h5>
                    </div>
                  </div>
                  <div className="badge bg-light text-success border-success-100 users-badge text-success w-100 text-start">
                    {" "}
                    <i className="ti ti-arrow-up-right me-1" /> 9.78%{" "}
                    <span className="text-grey ps-1 fw-regular">
                      From last month
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Status*/}
          {/* Graph */}
          <div className="graph-info bg-white mb-4">
            <div className="title d-flex align-items-center justify-content-between">
              <div className="sub-title">
                <h5 className="mb-3"> Earnings </h5>
              </div>
              <div className="form-sort form-wrap m-0">
                <span className="form-icon">
                  <i className="ti ti-calendar-event" />
                </span>
                <CommonSelect
                  className="select serviceselect"
                  options={Chart}
                  defaultValue={Chart[0]}
                />
              </div>
            </div>
            <div id="sales-income">
              <ReactApexChart
                id="emp-department"
                options={saleChart}
                series={saleChart.series}
                type="bar"
                height={220}
              />
            </div>
          </div>
          {/* /Graph */}
          {/* Types */}
          <div className="row align-items-center">
            <div className="col-lg-9 col-sm-8">
              <div className="sub-title">
                <h5 className="mb-3"> Earnings List </h5>
              </div>
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
                        <i className="ti ti-user-code me-2" />
                        Payment Type
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2">
                        <li>
                          <Link to="#" className="dropdown-item">
                            Paypal
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Stripe
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li />
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4">
              <div className="main-search">
                <div id="tablefilter">
                  <div className="dt-search">
                    <label htmlFor="dt-search-0"> </label>
                    <input type="search" placeholder="Search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Types */}
          {/* Tables */}
          <Table dataSource={data} columns={columns} Selection={false} />
          {/* /Tables */}
          {/* Transaction details */}
          <div
            className="modal new-modal fade"
            id="transaction_details"
            data-keyboard="false"
            data-backdrop="static"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Transaction details </h5>
                  <button
                    type="button"
                    className="close-btn"
                    data-bs-dismiss="modal"
                  >
                    <span>×</span>
                  </button>
                </div>
                <div className="modal-body service-modal">
                  <h6 className="model-head-text"> Transaction Summary </h6>
                  <div className="sumary-widget">
                    <div className="summary-info">
                      <h6> Transaction ID</h6>
                      <p> #TXN-20250321-00123462 </p>
                    </div>
                    <div className="summary-info">
                      <h6> Transaction type </h6>
                      <p> Purchase </p>
                    </div>
                    <div className="summary-info">
                      <h6> Amount</h6>
                      <p> $320 </p>
                    </div>
                    <div className="summary-info">
                      <h6> Currency</h6>
                      <p> USD </p>
                    </div>
                    <div className="summary-info">
                      <h6> Processing Fee</h6>
                      <p> $20 </p>
                    </div>
                    <div className="summary-info">
                      <h6> Payment Method</h6>
                      <p> Credit Card </p>
                    </div>
                    <div className="summary-info mb-0">
                      <h6> Sender</h6>
                      <p> John Doe </p>
                    </div>
                    <div className="summary-info mb-0">
                      <h6> Receiver</h6>
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

export default SellerEarnings;
