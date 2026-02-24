import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import { all_routes } from "../../router/all_routes";
import { sellerOrdersData } from "../../../core/json/sellerOrdersData";
import Table from "../../../core/dataTable/index";
import PredefinedDateRanges from "../../../core/common/datePicker";
import SellerOrdersModal from "./modal";

const SellerOrders = () => {
  const data = sellerOrdersData;
  const columns = [
    {
      title: "Client",
      dataIndex: "Buyer",
      render: (text: string, record: any) => (
        <span className="table-avatar d-flex align-items-center">
          <Link to={all_routes.buyerProfile} className="avatar">
            <ImageWithBasePath
              src={`assets/img/user/${record.Image}`}
              alt="User Image"
            />
          </Link>
          <Link to={all_routes.buyerProfile}>{text}</Link>
        </span>
      ),
      sorter: (a: any, b: any) => a.Buyer.length - b.Buyer.length,
    },
    {
      title: "Services",
      dataIndex: "Gigs",
      render: (text: string) => (
        <div className="upload-for-text table-avatar">
          <Link to="#">{text}</Link>
        </div>
      ),
      sorter: (a: any, b: any) => a.Gigs.length - b.Gigs.length,
    },
    {
      title: "Montant",
      dataIndex: "Amount",
      sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Statut",
      dataIndex: "Status",
      render: (text: string) => (
        <Link
          to="#"
          className={`badge ${
            text === "New"
              ? "badge-pink-transparent"
              : text === "Processing"
              ? "badge-info-transparent"
              : text === "Pending"
              ? "badge-warning-transparent"
              : "badge-success-transparent"
          }`}
          data-bs-toggle="modal"
          data-bs-target="#change_status"
        >
          {text}
        </Link>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: () => (
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
      ),
      sorter: (a: any, b: any) => a.Action.length - b.Action.length,
    },
  ];
  return (
    <>
      {/* Page Content */}
      <div className="page-wrapper">
        <div className="page-content content bg-light">
          <div className="row">
            {/* Purchase List */}
            <div className="col-12">
              <div className="main-title">
                <h4 className="mb-4">Commandes</h4>
              </div>
              <div className="table-filter">
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
                        <i className="ti ti-arrows-move-horizontal me-2" /> Statut
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2">
                        <li>
                          <Link to="#" className="dropdown-item">
                            Nouveau
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            En cours
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            En attente
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Terminé
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
                        Client
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee">
                        <li>
                          <div className="mb-2">
                            <div className="dropdown-add-search">
                              <span className="input-icon">
                                <i className="ti ti-search" />
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Rechercher"
                              />
                            </div>
                          </div>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/user/user-01.jpg"
                                className="rounded-circle"
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
                                src="assets/img/user/user-02.jpg"
                                className="rounded-circle"
                                alt="img"
                              />
                            </span>{" "}
                            Mick Reynolds
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/user/user-03.jpg"
                                className="rounded-circle"
                                alt="img"
                              />
                            </span>{" "}
                            Emily Sand
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/user/user-04.jpg"
                                className="rounded-circle"
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
                                src="assets/img/user/user-05.jpg"
                                className="rounded-circle"
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
                                src="assets/img/user/user-06.jpg"
                                className="rounded-circle"
                                alt="img"
                              />
                            </span>{" "}
                            Ryna Mitchell
                          </label>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div id="tablefilter">
                  <div className="dt-search">
                    <label htmlFor="dt-search-0"> </label>
                    <input type="search" placeholder="Rechercher" />
                  </div>
                </div>
              </div>

              <Table dataSource={data} columns={columns} Selection={false} />
            </div>
            {/* /Purchase List */}
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <SellerOrdersModal />
    </>
  );
};

export default SellerOrders;
