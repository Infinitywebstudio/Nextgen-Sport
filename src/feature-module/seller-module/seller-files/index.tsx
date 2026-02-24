import PredefinedDateRanges from "../../../core/common/datePicker";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import { all_routes } from "../../router/all_routes";

const SellerFiles = () => {
  return (
    <>
      {/* Page Content */}
      <div className="page-wrapper">
        <div className="page-content content bg-light">
          <div className="container px-0">
            <div className="content">
              {/*User Files */}
              <div className="">
                <div className="main-title my-4">
                  <h4>Uploaded Files</h4>
                  <div id="tableinfo" />
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
                          <i className="ti ti-upload me-2" />
                          Uploaded For
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-lg p-2">
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
                            <Link to="#" className="dropdown-item">
                              I will do Designing..
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              Develop OpenAI...
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              I will do Professional
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
                          Uploaded By
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
                                  src="/assets/img/user/user-02.jpg"
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
                                  src="/assets/img/user/user-03.jpg"
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
                                  src="/assets/img/user/user-04.jpg"
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
                                  src="/assets/img/user/user-05.jpg"
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
                                  src="/assets/img/user/user-06.jpg"
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
                    <li>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-expanded="false"
                        >
                          <i className="ti ti-file-search me-2" />
                          File Type
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-lg p-2">
                          <li>
                            <Link to="#" className="dropdown-item">
                              png
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              MP4
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              Completed
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <div id="tablefilter" />
                </div>
                <div className="table-responsive custom-table">
                  <table className="table datatable">
                    <thead className="thead-light">
                      <tr>
                        <th>ID</th>
                        <th>Uploaded For</th>
                        <th>Uploaded On</th>
                        <th>Uploaded By</th>
                        <th>File Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#120</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to="#" className="avatar">
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-09.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#" className="text-dark">
                              I will do designing and executing targeted email
                              campaigns
                            </Link>
                          </h2>
                        </td>
                        <td>22 May 2023</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to={all_routes.buyerProfile} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/user/user-01.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to={all_routes.buyerProfile}>James Carter</Link>
                          </h2>
                        </td>
                        <td>Jpg</td>
                        <td>
                          <div className="table-action">
                            <Link to="#">
                              <i className="ti ti-download" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#file_view"
                            >
                              <i className="ti ti-eye" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#119</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to="#" className="avatar">
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-03.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#" className="text-dark">
                              I will develop openai, dalle, chat gpt app for
                              mobile
                            </Link>
                          </h2>
                        </td>
                        <td>20 May 2023</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to={all_routes.buyerProfile} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/user/user-02.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to={all_routes.buyerProfile}>
                              Michael Reynolds
                            </Link>
                          </h2>
                        </td>
                        <td>Mp4</td>
                        <td>
                          <div className="table-action">
                            <Link to="#">
                              <i className="ti ti-download" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#file_view"
                            >
                              <i className="ti ti-eye" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#118</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to="#" className="avatar">
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-02.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#" className="text-dark">
                              I will do professional lifestyle and product
                              photography
                            </Link>
                          </h2>
                        </td>
                        <td>15 May 2023</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to={all_routes.buyerProfile} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/user/user-03.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to={all_routes.buyerProfile}>Emily Sanders</Link>
                          </h2>
                        </td>
                        <td>Png</td>
                        <td>
                          <div className="table-action">
                            <Link to="#">
                              <i className="ti ti-download" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#file_view"
                            >
                              <i className="ti ti-eye" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#117</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to="#" className="avatar">
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-04.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#" className="text-dark">
                              Embedded Android &amp; AOSP customizations
                            </Link>
                          </h2>
                        </td>
                        <td>27 Apr 2023</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to={all_routes.buyerProfile} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/user/user-04.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to={all_routes.buyerProfile}>David Lawson</Link>
                          </h2>
                        </td>
                        <td>Png</td>
                        <td>
                          <div className="table-action">
                            <Link to="#">
                              <i className="ti ti-download" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#file_view"
                            >
                              <i className="ti ti-eye" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#116</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to="#" className="avatar">
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-13.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#" className="text-dark">
                              I will do creating and promoting video content to
                              engage audiences
                            </Link>
                          </h2>
                        </td>
                        <td>19 Apr 2023</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to={all_routes.buyerProfile} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/user/user-05.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to={all_routes.buyerProfile}>Ryan Mitchell</Link>
                          </h2>
                        </td>
                        <td>Png</td>
                        <td>
                          <div className="table-action">
                            <Link to="#">
                              <i className="ti ti-download" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#file_view"
                            >
                              <i className="ti ti-eye" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#115</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to="#" className="avatar">
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-05.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#" className="text-dark">
                              I will do implementing chatbots on websites or
                              messaging apps
                            </Link>
                          </h2>
                        </td>
                        <td>03 Apr 2023</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to={all_routes.buyerProfile} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/user/user-06.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to={all_routes.buyerProfile}>Jason Brooks</Link>
                          </h2>
                        </td>
                        <td>MP4</td>
                        <td>
                          <div className="table-action">
                            <Link to="#">
                              <i className="ti ti-download" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#file_view"
                            >
                              <i className="ti ti-eye" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#120</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to="#" className="avatar">
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-03.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#" className="text-dark">
                              I will develop openai, dalle, chat gpt app for
                              mobile
                            </Link>
                          </h2>
                        </td>
                        <td>20 May 2023</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to={all_routes.buyerProfile} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/user/user-02.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to={all_routes.buyerProfile}>Thomas Bennett</Link>
                          </h2>
                        </td>
                        <td>Mp4</td>
                        <td>
                          <div className="table-action">
                            <Link to="#">
                              <i className="ti ti-download" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#file_view"
                            >
                              <i className="ti ti-eye" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#121</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to="#" className="avatar">
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-02.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#" className="text-dark">
                              I will do professional lifestyle and product
                              photography
                            </Link>
                          </h2>
                        </td>
                        <td>15 May 2023</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to={all_routes.buyerProfile} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/user/user-03.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to={all_routes.buyerProfile}>Sophia Collins</Link>
                          </h2>
                        </td>
                        <td>Png</td>
                        <td>
                          <div className="table-action">
                            <Link to="#">
                              <i className="ti ti-download" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#file_view"
                            >
                              <i className="ti ti-eye" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#122</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to="#" className="avatar">
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-04.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#" className="text-dark">
                              Embedded Android &amp; AOSP customizations
                            </Link>
                          </h2>
                        </td>
                        <td>27 Apr 2023</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to={all_routes.buyerProfile} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/user/user-04.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to={all_routes.buyerProfile}>Thomas Bennett</Link>
                          </h2>
                        </td>
                        <td>Png</td>
                        <td>
                          <div className="table-action">
                            <Link to="#">
                              <i className="ti ti-download" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#file_view"
                            >
                              <i className="ti ti-eye" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#123</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to="#" className="avatar">
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-13.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#" className="text-dark">
                              I will do creating and promoting video content to
                              engage audiences
                            </Link>
                          </h2>
                        </td>
                        <td>19 Apr 2023</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to={all_routes.buyerProfile} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/user/user-05.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to={all_routes.buyerProfile}>Ryan Mitchell</Link>
                          </h2>
                        </td>
                        <td>Png</td>
                        <td>
                          <div className="table-action">
                            <Link to="#">
                              <i className="ti ti-download" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#file_view"
                            >
                              <i className="ti ti-eye" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#124</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to="#" className="avatar">
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-05.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#" className="text-dark">
                              I will do implementing chatbots on websites or
                              messaging apps
                            </Link>
                          </h2>
                        </td>
                        <td>03 Apr 2023</td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <Link to={all_routes.buyerProfile} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/user/user-06.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to={all_routes.buyerProfile}>Hendy</Link>
                          </h2>
                        </td>
                        <td>MP4</td>
                        <td>
                          <div className="table-action">
                            <Link to="#">
                              <i className="ti ti-download" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#file_view"
                            >
                              <i className="ti ti-eye" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-bottom-footer d-sm-flex align-items-center justify-content-between mt-4">
                  <div
                    className="dataTables_length"
                    id="DataTables_Table_0_length"
                  >
                    <label>
                      Showing
                      <select
                        name="DataTables_Table_0_length"
                        className="form-select form-select-sm"
                      >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>{" "}
                      Results
                    </label>
                  </div>
                  <div className="table-footer mt-0">
                    <div id="tablepage" />
                  </div>
                </div>
              </div>
              {/* /User Files */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      {/* File Details */}
      <div
        className="modal new-modal fade"
        id="file_view"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">File Details - #124</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="file-view">
                <div className="file-img">
                  <ImageWithBasePath
                    src="assets/img/gigs/gigs-04.jpg"
                    className="img-fluid"
                    alt="img"
                  />
                </div>
                <div className="upload-wrap mb-0">
                  <div className="upload-image">
                    <span>
                      <i className="ti ti-photo" />
                    </span>
                    <p className="mb-0">Video_gig-1.mp4</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link to="#" className="del-action me-2">
                      <i className="ti ti-download text-grey" />
                    </Link>
                    <Link to="#" className="del-action">
                      <i className="ti ti-trash text-error" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /File Details */}
    </>
  );
};

export default SellerFiles;
