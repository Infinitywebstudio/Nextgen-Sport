import { useState } from "react";
import ImageWithBasePath from "../../../core/img";
import { Link } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import { all_routes } from "../../router/all_routes";

const BuyerDashboard = () => {
 

  const [chartOptions] = useState<any>({
    chart: {
      height: 290,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    series: [{
      data: [510, 320, 440, 600, 450, 150, 580, 190, 430, 290, 190, 290],
      name: 'Revenue'
    },
    {
      name: 'Withdrawn',
      data: [290, 120, 280, 190, 290, 290, 290, 110, 120, 130, 290, 120]
    },
  ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "80%",
        borderRadius: 5,
        endingShape: "rounded",
      },
    },
    colors: ["#FF781A", "#45505C"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "May",
        "Mar",
        "Jun",
        "July",
        "Aug",
        "Apr",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#5D6772",
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 600,
      labels: {
        offsetX: -15,
        style: {
          colors: "#5D6772",
          fontSize: "13px",
        },
      },
    },
    grid: {
      borderColor: "#E2E4E6",
      strokeDashArray: 5,
      padding: {
        left: -8,
        right: -15,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return `${val}%`;
        },
      },
    },
  })
  return (
    <>
      {/* Page Content */}
      <div className="page-wrapper">
        <div className="page-content content pb-0">
          <div className="main-title mb-4">
            <h4>Dashboard</h4>
          </div>
          {/* status */}
          <div className="row status-info">
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="mb-1">Active Orders</p>
                      <h6 className="mb-1">950</h6>
                    </div>
                    <span className="bg-primary-transparent status-icon">
                      <i className="ti ti-arrows-maximize" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="mb-1">Pending Orders</p>
                      <h6 className="mb-1">800</h6>
                    </div>
                    <span className="bg-success-transparent status-icon">
                      <i className="ti ti-circle-check" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="mb-1">Completed Orders</p>
                      <h6 className="mb-1">150</h6>
                    </div>
                    <span className="bg-warning-transparent status-icon">
                      <i className="ti ti-info-circle" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="mb-1">Total Earnings</p>
                      <h6 className="mb-1">₹500,000</h6>
                    </div>
                    <span className="bg-danger-transparent status-icon">
                      <i className="ti ti-coin" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* status */}
          {/* Overview */}
          <div className="row">
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="dash-widget flex-fill w-100">
                <div className="d-flex align-items-center mb-3">
                  <span className="dash-icon bg-success flex-shrink-0">
                    <i className="ti ti-credit-card" />
                  </span>
                  <div>
                    <p>Total Credit</p>
                    <h5 className="mb-0">$10,292.50</h5>
                  </div>
                </div>
                <div className="bg-light p-3 rounded-2">
                  <p>
                    <span className="text-success">+10%</span> from last week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="dash-widget flex-fill w-100">
                <div className="d-flex align-items-center mb-3">
                  <span className="dash-icon bg-danger flex-shrink-0">
                    <i className="ti ti-report-money" />
                  </span>
                  <div>
                    <p>Total Debit</p>
                    <h5 className="mb-0">$4,254.47</h5>
                  </div>
                </div>
                <div className="bg-light p-3 rounded-2">
                  <p>
                    <span className="text-danger">-1%</span> from last week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 d-flex">
              <div className="dash-earning flex-fill w-100">
                <div className="d-flex align-items-center gap-3">
                  <div className="earning-info">
                    <p className="mb-1">Earnings</p>
                    <h5>$1,57,815</h5>
                  </div>
                  <div className="earning-info">
                    <p className="mb-1">Wallet Balance</p>
                    <h5>$5690</h5>
                  </div>
                </div>
                <div className="earning-btn text-end">
                  <Link
                    to={all_routes.buyerWallet}
                    className="btn btn-primary btn-lg"
                  >
                    <i className="ti ti-shopping-cart me-2" />
                    Wallet
                  </Link>
                </div>
                <Link
                  to="#"
                  className="withdraw-link"
                  data-bs-toggle="modal"
                  data-bs-target="#withdraw"
                >
                  Withdraw Funds
                </Link>
              </div>
            </div>
          </div>
          {/* /Overview */}
          <div className="row">
            {/* Sales Statistics */}
            <div className="col-lg-12">
              <div className="card dashboard-card">
                <div className="card-header">
                  <div className="gig-card-head">
                    <h5 className="card-title mb-0">Revenue Statistics</h5>
                  </div>
                  <div className="input-icon-start mb-0 position-relative">
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar-up" />
                    </span>
                    <input
                      type="text"
                      className="form-control yearpicker"
                      placeholder="2025"
                    />
                    <i className="ti ti-chevron-down" />
                  </div>
                </div>
                <div className="card-body pb-0">
                  <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap">
                    <div className="d-flex align-items-center gap-4">
                      <div>
                        <p className="mb-1">Revenue</p>
                        <h5 className="mb-0">$4,564.30</h5>
                      </div>
                      <div>
                        <p className="mb-1">Withdrawn</p>
                        <h5 className="mb-0">$1,855.64</h5>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="revenue me-2 mb-0">
                        <i className="ti ti-point-filled" />
                        Revenue
                      </p>
                      <p className="mb-0">
                        <i className="ti ti-point-filled" />
                        Withdrawn
                      </p>
                    </div>
                  </div>
                  <div id="s-col" className="chart-set">
                    <ReactApexChart
                      id="emp-department"
                      options={chartOptions}
                      series={chartOptions.series}
                      type="bar"
                      height={220}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Sales Statistics */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Withdraw */}
      <div
        className="modal new-modal fade"
        id="withdraw"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Withdraw Payment</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="amt-wrap">
                    <div className="form-wrap">
                      <label className="form-label">
                        Enter Amount ($)
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <ul className="amt-list">
                      <li>Or</li>
                      <li>
                        <Link to="#" className="vary-amt">
                          $50
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="vary-amt">
                          $100
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="vary-amt">
                          $150
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="buyer-method">
                    <h6>Select Payment Gateway *</h6>
                    <label className="custom_radio">
                      <input type="radio" name="payment" />
                      <span className="checkmark" />
                      Paypal
                    </label>
                    <label className="custom_radio">
                      <input type="radio" name="payment" />
                      <span className="checkmark" />
                      Stripe
                    </label>
                  </div>
                  <div className="form-wrap form-item">
                    <label className="form-label">
                      Email<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-wrap form-item">
                    <label className="form-label">
                      Password<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#success_credit"
                    data-bs-dismiss="modal"
                    className="btn btn-primary w-100"
                  >
                    Withdraw
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Withdraw */}
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
                <span className="badge badge-pink-transparent">Completed</span>
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
    </>
  );
};

export default BuyerDashboard;
