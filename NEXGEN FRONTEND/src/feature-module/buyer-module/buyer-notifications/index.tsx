import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import CommonSelect from "../../../core/common/common-select/commonSelect";
import { datepicker } from "../../../core/common/selectOption";

const BuyerNotification = () => {
  return (
    <>
      <>
        {/* Page Content */}
        <div className="page-wrapper">
          <div className="page-content content bg-light notify-info">
            <div className="main-title mb-4">
              <h4>Notifications</h4>
            </div>
            <div className="row">
              {/* Notifications */}
              <div className="col-xl-12">
                <div className="notification-header">
                  <div className="form-sort form-wrap">
                    <span className="form-icon">
                      <i className="ti ti-calendar-event" />
                    </span>
                    <CommonSelect
                      options={datepicker}
                      className="select"
                      defaultValue={datepicker[0]}
                    />
                  </div>
                  <ul>
                    <li>
                      <Link to="#" className="btn btn-white">
                        <i className="feather-check" /> Mark all as read
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="btn btn-delete">
                        <i className="feather-trash-2" /> Delete all
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="notication-list">
                  {/* Notification 1 */}
                  <div className="notication-item bg-white">
                    <div className="row align-items-center">
                      <div className="col-lg-9">
                        <div className="notication-content">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/user/user-01.jpg"
                              className="img-fluid"
                              alt="img"
                            />
                          </span>
                          <div className="notication-info">
                            <div>
                              <p>
                                {" "}
                                <span className="text-dark me-0">
                                  {" "}
                                  <b>John,</b>{" "}
                                </span>{" "}
                                Your <b> Order </b> Has Been <b>Confirmed!</b>
                              </p>
                              <p className="notify-time">
                                Your order for 'Logo Design Service' has been
                                successfully placed. The seller, Sarah, will
                                begin working on it soon!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="d-lg-flex align-items-center justify-content-between">
                          <div className="noti-btn d-flex align-item-center gap-2 flex-wrap">
                            <Link to="#" className="btn btn-dark m-0">
                              Decline
                            </Link>
                            <Link to="#" className="btn btn-primary m-0">
                              Accept
                            </Link>
                          </div>
                          <p className="m-0"> 2 mins ago </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Notification 2 */}
                  <div className="notication-item bg-white">
                    <div className="row align-items-center">
                      <div className="col-lg-9">
                        <div className="notication-content">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/user/user-02.jpg"
                              className="img-fluid"
                              alt="img"
                            />
                          </span>
                          <div className="notication-info">
                            <div>
                              <p>
                                {" "}
                                <span className="text-dark me-0">
                                  {" "}
                                  <b>Michael,</b>{" "}
                                </span>{" "}
                                Your <b> Order </b> Has Been <b>Delivered!</b>
                              </p>
                              <p className="notify-time">
                                The seller, David, has submitted the completed
                                work. Please review and approve or request
                                revisions.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="d-lg-flex align-items-center justify-content-end">
                          <div className="noti-btn me-3">
                            <Link
                              to="#"
                              className="btn btn-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_message"
                            >
                              Delete
                            </Link>
                          </div>
                          <p className="m-0"> 2 mins ago </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Notification 3 */}
                  <div className="notication-item bg-white">
                    <div className="row align-items-center">
                      <div className="col-lg-9">
                        <div className="notication-content">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/user/user-03.jpg"
                              className="img-fluid"
                              alt="img"
                            />
                          </span>
                          <div className="notication-info">
                            <div>
                              <p>
                                {" "}
                                <span className="text-dark me-0">
                                  {" "}
                                  <b>Emma,</b>{" "}
                                </span>{" "}
                                Your <b>Payment successfull!</b>
                              </p>
                              <p className="notify-time">
                                “Your payment of $150.00 for 'SEO Optimization
                                Service' has been successfully processed. Your
                                order is now in progress.”
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="d-lg-flex align-items-center justify-content-end">
                          <div className="noti-btn me-3">
                            <Link
                              to="#"
                              className="btn btn-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_message"
                            >
                              Delete
                            </Link>
                          </div>
                          <p className="m-0"> 2 mins ago </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Notification 4 */}
                  <div className="notication-item bg-white">
                    <div className="row align-items-center">
                      <div className="col-lg-9">
                        <div className="notication-content">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/user/user-04.jpg"
                              className="img-fluid"
                              alt="img"
                            />
                          </span>
                          <div className="notication-info">
                            <div>
                              <p>
                                {" "}
                                <span className="text-dark me-0">
                                  {" "}
                                  <b>Daniel,</b>{" "}
                                </span>{" "}
                                Your <b> Order </b> Has Been <b>Confirmed!</b>
                              </p>
                              <p className="notify-time">
                                Your order for 'Logo Design Service' has been
                                successfully placed. The seller, Sarah, will
                                begin working on it soon!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="d-lg-flex align-items-center justify-content-end">
                          <div className="noti-btn me-3">
                            <Link
                              to="#"
                              className="btn btn-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_message"
                            >
                              Delete
                            </Link>
                          </div>
                          <p className="m-0"> 2 mins ago </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Notification 5 */}
                  <div className="notication-item bg-white">
                    <div className="row align-items-center">
                      <div className="col-lg-9">
                        <div className="notication-content">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/user/user-05.jpg"
                              className="img-fluid"
                              alt="img"
                            />
                          </span>
                          <div className="notication-info">
                            <div>
                              <p>
                                {" "}
                                <span className="text-dark me-0">
                                  {" "}
                                  <b>Wick,</b>{" "}
                                </span>{" "}
                                Your <b> Order </b> Has Been <b>Confirmed!</b>
                              </p>
                              <p className="notify-time">
                                Your order for 'Logo Design Service' has been
                                successfully placed. The seller, Sarah, will
                                begin working on it soon!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="d-lg-flex align-items-center justify-content-end">
                          <div className="noti-btn me-3">
                            <Link
                              to="#"
                              className="btn btn-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_message"
                            >
                              Delete
                            </Link>
                          </div>
                          <p className="m-0"> 2 mins ago </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Notifications */}
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Notification details  */}
        <div
          className="modal new-modal fade"
          id="delete_message"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered notify-modal">
            <div className="modal-content">
              <div className="modal-body service-modal">
                <div className="sumary-widget text-center">
                  <div className="summary-info">
                    <ImageWithBasePath
                      src="assets/img/icons/delete-vector.svg"
                      alt="delete-notify"
                      className="img-fluid img1 mb-4"
                    />
                    <div className="mb-4">
                      <h6 className="mb-1 text-center">Are You Sure?</h6>
                      <span>Want to permanently delete this item?</span>
                    </div>
                    <div className="delete-btn d-flex align-item-center justify-content-between gap-2">
                      <Link
                        to="#"
                        className="btn btn-light w-100 bg-light close-btn"
                        data-bs-dismiss="modal"
                      >
                        {" "}
                        Cancel{" "}
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-primary w-100 close-btn"
                        data-bs-dismiss="modal"
                      >
                        {" "}
                        Delete{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Notification details */}
      </>
    </>
  );
};

export default BuyerNotification;
