import Table from "../../../core/dataTable/index";
import { BuyerPurchaseData } from "../../../core/json/buyerpurchaseData";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import PredefinedDateRanges from "../../../core/common/datePicker";
import { BuyPurchasemodal } from "./modal";
import { all_routes } from "../../router/all_routes";
const BuyerPurchase = () => {
  const data = BuyerPurchaseData;
  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      render: (text: string) => (
        <Link
          to="#"
          className="cancel"
          data-bs-toggle="modal"
          data-bs-target="#purchase-details"
        >
          {text}
        </Link>
      ),
      sorter: (a: any, b: any) => a.ID.length - b.ID.length,
    },
    {
      title: "Uploaded For",
      dataIndex: "Uploaded_For",
      render: (text: any, record: any) => (
        <div className="upload-for-text table-avatar">
          <Link to="#" className="avatar">
            <ImageWithBasePath
              src={`assets/img/gigs/${record.Image}`}
              className="rounded-pill"
              alt="img"
            />
          </Link>
          <Link to="#">{text}</Link>
        </div>
      ),
      sorter: (a: any, b: any) => a.Uploaded_For.length - b.Uploaded_For.length,
    },
    {
      title: "Purchase On",
      dataIndex: "Purchase_On",
      sorter: (a: any, b: any) => a.Purchase_On.length - b.Purchase_On.length,
    },
    {
      title: "Prestataire",
      dataIndex: "Seller",
      render: (text: string, record: any) => (
        <span className="table-avatar d-flex align-items-center">
          <Link to={all_routes.buyerProfile} className="avatar">
            <ImageWithBasePath
              src={`assets/img/user/${record.Seller_Image}`}
              alt="User Image"
            />
          </Link>
          <Link to={all_routes.buyerProfile}>{text}</Link>
        </span>
      ),
      sorter: (a: any, b: any) => a.Seller.length - b.Seller.length,
    },
    {
      title: "Feedback",
      dataIndex: "Feedback",
      render: (text: string) => (
        <Link
        to="#"
        className="cancel"
        data-bs-toggle="modal"
        data-bs-target="#add_review1"
      >
        {text}
      </Link>
      
      ),
      sorter: (a: any, b: any) => a.Feedback.length - b.Feedback.length,
    },
    {
      title: "Cancel",
      dataIndex: "Cancel",
      render: (text: string) => (
        <Link
        to="#"
        className="cancel"
        data-bs-toggle="modal"
        data-bs-target="#cancel_order"
      >
        {text}
      </Link>
      
      ),
      sorter: (a: any, b: any) => a.Cancel.length - b.Cancel.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Payment Mode",
      dataIndex: "Payment_Mode",
      sorter: (a: any, b: any) => a.Payment_Mode.length - b.Payment_Mode.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => (
        <span
        className={`badge ${
          text === "New"
            ? "badge-pink-transparent"
            : text === "Processing"
            ? "badge-info-transparent"
            : text === "Completed"
            ? "badge-success-transparent"
            : "badge-warning-transparent"
        } `}
      >
        {text}
      </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
    {
      title: "",
      dataIndex: "Action",
      render: () => (
        <div>
          <div className="action-item text-center">
            <Link
              to="#"
              className="view-icon"
              data-bs-toggle="modal"
              data-bs-target="#purchase-details"
            >
              <i className="ti ti-eye" />
            </Link>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      {/* Page Content */}
      <div className="page-wrapper">
        <div className="page-content content">
          <div className="row">
            {/* Purchase List */}
            <div className="col-12">
              <div className="main-title">
                <h4 className="mb-4">My Purchases</h4>
              </div>
              <div className="table-filter mb-4 gap-3">
                <ul className="filter-item">
                  <li>
                    <div>
                      <div
                        id="reportrange"
                        className="reportrange-picker d-flex align-items-center"
                      >
                        <i className="ti ti-calendar text-gray-5 fs-14 me-1" />
                        <PredefinedDateRanges />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <i className="ti ti-arrows-move-horizontal me-2" />
                        By Status
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            New
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            Processing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            Pending
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            Completed
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <i className="ti ti-user-heart me-2" />
                        Seller
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-search-add">
                        <li>
                          <div className="mb-2">
                            <div className="dropdown-add-search">
                              <span className="input-icon">
                                <i className="ti ti-search" />
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                              />
                            </div>
                          </div>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="/assets/img/user/user-01.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>{" "}
                            James carter
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="/assets/img/user/user-02.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>{" "}
                            Michael Reynolds
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="/assets/img/user/user-03.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>{" "}
                            Emily Sanders
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="/assets/img/user/user-05.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>{" "}
                            David Lawson
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="/assets/img/user/user-08.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>{" "}
                            Olivia Bennett
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="/assets/img/user/user-06.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>{" "}
                            Ryna Mitchell
                          </label>
                        </li>
                      </ul>
                    </div>
                  </li>
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
                        Payment Method
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            Paypal
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            Wallet
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            COD
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div id="tablefilter" />
              </div>
              <div className="table-responsive">
                <Table dataSource={data} columns={columns} Selection={false} />
              </div>
            </div>
            {/* /Purchase List */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <BuyPurchasemodal />
    </>
  );
};

export default BuyerPurchase;
