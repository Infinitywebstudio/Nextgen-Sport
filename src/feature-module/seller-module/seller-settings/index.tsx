import { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import CommonSelect from "../../../core/common/common-select/commonSelect";
import { city, country, state } from "../../../core/common/selectOption";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import CommonTagInputs from "../../../core/common/Taginput";
import SellerSettingsModal from "./modal";

const SellerSettings = () => {
  const [phone, setPhone] = useState("");

  const [tags, setTags] = useState<string[]>();
  const [tags2, setTags2] = useState<string[]>();
  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };
  const handleTagsChange2 = (newTags: string[]) => {
    setTags2(newTags);
  };

  return (
    <>
      {/* Page Content */}
      <div className="page-wrapper">
        <div className="page-content content bg-light">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="main-title mb-4">
                <h4>Settings</h4>
              </div>
              <div className="settings-info bg-white">
                <div className="settings-page-lists">
                  <ul className="settings-head nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <Link
                        to="#"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#Personal_Information"
                        aria-selected="false"
                        role="tab"
                        tabIndex={-1}
                      >
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        to="#"
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#security"
                        aria-selected="false"
                        role="tab"
                        tabIndex={-1}
                      >
                        Security
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        to="#"
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#preferences"
                        aria-selected="false"
                        role="tab"
                        tabIndex={-1}
                      >
                        Preferences
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        to="#"
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#billing"
                        aria-selected="false"
                        role="tab"
                        tabIndex={-1}
                      >
                        Plan &amp; Billing
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        to="#"
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#notifications"
                        aria-selected="false"
                        role="tab"
                        tabIndex={-1}
                      >
                        Notifications
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        to="#"
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#integration"
                        aria-selected="false"
                        role="tab"
                        tabIndex={-1}
                      >
                        Integrations
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        to="#"
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#acc_settings"
                        aria-selected="false"
                        role="tab"
                        tabIndex={-1}
                      >
                        Account Settings
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  {/* Profile Settings  */}
                  <div
                    className="tab-pane fade show active"
                    id="Personal_Information"
                    role="tabpanel"
                  >
                    <div className="settings-card">
                      <div className="settings-card-head bg-light">
                        <h4>Personal Information</h4>
                      </div>
                      <form>
                        <div className="settings-card-body">
                          <div className="img-upload-head">
                            <div className="profile-img">
                              <ImageWithBasePath
                                src="assets/img/user/user-20.png"
                                alt=""
                              />
                              <i className="ti ti-trash"> </i>
                            </div>
                            <div className="img-formate">
                              <div className="upload-remove-btns">
                                <div className="drag-upload form-wrap">
                                  <input type="file" accept="image/*" />
                                  <div className="img-upload">
                                    <p>Upload Image</p>
                                  </div>
                                </div>
                              </div>
                              <p>
                                Max file size is 5MB, Minimum dimension: 150x150
                                And Suitable files are .jpg &amp; .png
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  First Name{" "}
                                  <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Last Name{" "}
                                  <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Email <span className="text-primary">*</span>
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Phone number{" "}
                                  <span className="text-primary">*</span>
                                </label>
                                <PhoneInput
                                  country={"us"} // Default to India (+91)
                                  value={phone}
                                  onChange={setPhone}
                                  enableSearch={true}
                                  inputProps={{
                                    name: "phone",
                                    required: true,
                                    autoFocus: true,
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Date of birth{" "}
                                  <span className="text-primary">*</span>
                                </label>
                                <input type="date" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap gig-option">
                                <label className="mb-1 fw-medium text-dark d-block mb-2">
                                  {" "}
                                  Gender <span className="text-primary">*</span>
                                </label>
                                <label className="custom_radio">
                                  <input
                                    type="radio"
                                    name="buyer"
                                    defaultChecked
                                  />
                                  <span className="checkmark" />
                                  Male
                                </label>
                                <label className="custom_radio">
                                  <input type="radio" name="buyer" />
                                  <span className="checkmark" />
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="form-label mb-1 fw-medium text-dark">
                                  Country{" "}
                                  <span className="text-primary">*</span>
                                </label>
                                <CommonSelect
                                  className="select"
                                  options={country}
                                  defaultValue={country[0]}
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="form-label mb-1 fw-medium text-dark">
                                  State <span className="text-primary">*</span>
                                </label>
                                <CommonSelect
                                  className="select"
                                  options={state}
                                  defaultValue={state[0]}
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="form-label mb-1 fw-medium text-dark">
                                  City <span className="text-primary">*</span>
                                </label>
                                <CommonSelect
                                  className="select"
                                  options={city}
                                  defaultValue={city[0]}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-wrap mb-0">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Address{" "}
                                  <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="settings-card">
                      <div className="settings-card-head bg-light">
                        <h4>Change Email</h4>
                      </div>
                      <form>
                        <div className="settings-card-body">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-wrap mb-lg-0 mb-md-0">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Current Email{" "}
                                  <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap mb-lg-0 mb-md-0">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  New Email{" "}
                                  <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap mb-0">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Confirm Email{" "}
                                  <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="settings-card">
                      <div className="settings-card-head bg-light">
                        <h4>Other Information</h4>
                      </div>
                      <form>
                        <div className="settings-card-body">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Job Title
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="col-form-label">
                                  Language Known
                                </label>
                                <div className="input-block input-block-tagsinput mb-1">
                                  <CommonTagInputs
                                    initialTags={tags}
                                    onTagsChange={handleTagsChange}
                                  />
                                </div>
                                <span>Enter value separated by comma</span>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="col-form-label">Tags</label>
                                <div className="input-block input-block-tagsinput mb-1">
                                  <CommonTagInputs
                                    initialTags={tags2}
                                    onTagsChange={handleTagsChange2}
                                  />
                                </div>
                                <span>Enter value separated by comma</span>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-wrap">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  About You{" "}
                                </label>
                                <input
                                  className="form-control text-area"
                                  placeholder="Type here..."
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-wrap m-0">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Why Work With Me{" "}
                                </label>
                                <input
                                  className="form-control text-area"
                                  placeholder="Type here..."
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /Profile Settings  */}
                  {/* Account Settings  */}
                  <div
                    className="tab-pane fade"
                    id="acc_settings"
                    role="tabpanel"
                  >
                    {/* Paypal */}
                    <div className="settings-card">
                      <div className="settings-card-head bg-light">
                        <h4>Paypal</h4>
                      </div>
                      <form>
                        <div className="settings-card-body">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Email{" "}
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Password{" "}
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="settings-card-footer text-start mt-0">
                            <Link to="#" className="btn btn-dark text-white">
                              Change PayPal Email{" "}
                              <i className="ti ti-arrow-up-right ms-1" />
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Paypal */}
                    {/* Bank Transfer */}
                    <div className="settings-card">
                      <div className="settings-card-head bg-light">
                        <h4>Bank Transfer</h4>
                      </div>
                      <form>
                        <div className="settings-card-body">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Bank Name{" "}
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Swift Code{" "}
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  IBAN{" "}
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="settings-card-footer text-start mt-0">
                            <Link to="#" className="btn btn-dark text-white">
                              {" "}
                              Update Bank Details{" "}
                              <i className="ti ti-arrow-up-right ms-1" />
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Bank Transfer */}
                    {/* Stripe Transfer */}
                    <div className="settings-card">
                      <div className="settings-card-head bg-light">
                        <h4> Stripe </h4>
                      </div>
                      <form>
                        <div className="settings-card-body">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Email{" "}
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="mb-1 fw-medium text-dark">
                                  {" "}
                                  Password{" "}
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="settings-card-footer text-start mt-0">
                            <Link to="#" className="btn btn-dark text-white">
                              Change Stripe Email{" "}
                              <i className="ti ti-arrow-up-right ms-1" />
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Stripe Transfer */}
                  </div>
                  {/* Account Settings */}
                  {/* Security settings */}
                  <div className="tab-pane fade" id="security" role="tabpanel">
                    <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none securitys-card-info">
                      <div className="card-body">
                        <div>
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-md border bg-light fs-24 me-2 d-flex align-items-center justify-content-center">
                                <i className="ti ti-lock text-dark fs-24 d-flex align-items-center justify-content-center" />
                              </span>
                              <div>
                                <h6 className="mb-1">Password</h6>
                                <span className="fs-13">
                                  Set a unique password to secure the account
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="badge bg-soft-secondary new-badge text-muted me-3">
                                {" "}
                                Last Changed, 18 Jan 2025
                              </span>
                              <Link
                                to="#"
                                className="btn btn-sm btn-primary secure-password"
                                data-bs-toggle="modal"
                                data-bs-target="#password_update"
                              >
                                {" "}
                                <i className="ti ti-edit" />{" "}
                              </Link>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-md border bg-light fs-24 me-2 d-flex align-items-center justify-content-center">
                                <i className="ti ti-shield-lock text-dark fs-24 d-flex align-items-center justify-content-center" />
                              </span>
                              <div>
                                <h6 className="mb-1">
                                  Two Factor Authentication
                                </h6>
                                <span className="fs-13">
                                  Receive codes via SMS or email every time you
                                  login
                                </span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                              <span className="badge bg-soft-secondary new-badge text-muted me-0">
                                {" "}
                                Enabled, 18 Jan 2025{" "}
                              </span>
                              <div className="form-check form-switch p-0 m-0">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                              <Link
                                to="#"
                                className="btn btn-sm btn-primary secure-password"
                                data-bs-toggle="modal"
                                data-bs-target="#change-password"
                              >
                                {" "}
                                <i className="ti ti-settings" />{" "}
                              </Link>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-md border bg-light fs-24 me-2 d-flex align-items-center justify-content-center">
                                <i className="ti ti-device-laptop text-dark fs-24 d-flex align-items-center justify-content-center" />
                              </span>
                              <div>
                                <h6 className="mb-1">Device Management</h6>
                                <span className="fs-13">
                                  The browsrs &amp; devices associated with the
                                  account
                                </span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="btn btn-sm btn-primary secure-password"
                                data-bs-toggle="modal"
                                data-bs-target="#change-password"
                              >
                                {" "}
                                <i className="ti ti-file-description" />{" "}
                              </Link>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4">
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-md border bg-light fs-24 me-2 d-flex align-items-center justify-content-center">
                                <i className="ti ti-creative-commons-sa text-dark fs-24 d-flex align-items-center justify-content-center" />
                              </span>
                              <div>
                                <h6 className="mb-1">Account Activity</h6>
                                <span className="fs-13">
                                  Track user actions, logins, updates, and
                                  changes for security monitoring.
                                </span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="btn btn-sm btn-primary secure-password"
                                data-bs-toggle="modal"
                                data-bs-target="#change-password"
                              >
                                {" "}
                                <i className="ti ti-settings" />{" "}
                              </Link>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-4 pb-4 ">
                            <div className="d-flex align-items-center">
                              <span className="avatar flex-shrink-0 avatar-md border bg-light fs-24 me-2 d-flex align-items-center justify-content-center">
                                <i className="ti ti-exclamation-circle text-dark fs-24 d-flex align-items-center justify-content-center" />
                              </span>
                              <div>
                                <h6 className="mb-1">Deactivate Account</h6>
                                <span className="fs-13">
                                  Your account will be permanantly deleted{" "}
                                </span>
                              </div>
                            </div>
                            <Link
                              to=""
                              className="btn btn-sm btn-primary secure-password"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_review"
                            >
                              {" "}
                              <i className="ti ti-trash" />{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Security settings */}
                  {/* Preference */}
                  <div
                    className="tab-pane fade"
                    id="preferences"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-4 col-md-4 col-sm-6">
                        <div className="settings-card">
                          <div className="settings-card-body d-flex justify-content-between">
                            <h6 className="settings-text">Purchase List</h6>
                            <div className="status-toggle d-flex align-items-center">
                              <input
                                type="checkbox"
                                id="toggle1"
                                className="check"
                                defaultChecked
                              />
                              <label
                                htmlFor="toggle1"
                                className="checktoggle"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-6">
                        <div className="settings-card">
                          <div className="settings-card-body d-flex justify-content-between">
                            <h6 className="settings-text">Sales List</h6>
                            <div className="status-toggle d-flex align-items-center">
                              <input
                                type="checkbox"
                                id="toggle2"
                                className="check"
                                defaultChecked
                              />
                              <label
                                htmlFor="toggle2"
                                className="checktoggle"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-6">
                        <div className="settings-card">
                          <div className="settings-card-body d-flex justify-content-between">
                            <h6 className="settings-text">Uploaded Files</h6>
                            <div className="status-toggle d-flex align-items-center">
                              <input
                                type="checkbox"
                                id="toggle3"
                                className="check"
                                defaultChecked
                              />
                              <label
                                htmlFor="toggle3"
                                className="checktoggle"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-6">
                        <div className="settings-card">
                          <div className="settings-card-body d-flex justify-content-between">
                            <h6 className="settings-text">Reviews</h6>
                            <div className="status-toggle d-flex align-items-center">
                              <input
                                type="checkbox"
                                id="toggle4"
                                className="check"
                                defaultChecked
                              />
                              <label
                                htmlFor="toggle4"
                                className="checktoggle"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-6">
                        <div className="settings-card">
                          <div className="settings-card-body d-flex justify-content-between">
                            <h6 className="settings-text">Wishlist</h6>
                            <div className="status-toggle d-flex align-items-center">
                              <input
                                type="checkbox"
                                id="toggle5"
                                className="check"
                                defaultChecked
                              />
                              <label
                                htmlFor="toggle5"
                                className="checktoggle"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-6">
                        <div className="settings-card">
                          <div className="settings-card-body d-flex justify-content-between">
                            <h6 className="settings-text">Chat</h6>
                            <div className="status-toggle d-flex align-items-center">
                              <input
                                type="checkbox"
                                id="toggle6"
                                className="check"
                                defaultChecked
                              />
                              <label
                                htmlFor="toggle6"
                                className="checktoggle"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-6">
                        <div className="settings-card">
                          <div className="settings-card-body d-flex justify-content-between">
                            <h6 className="settings-text">Wallet</h6>
                            <div className="status-toggle d-flex align-items-center">
                              <input
                                type="checkbox"
                                id="toggle7"
                                className="check"
                                defaultChecked
                              />
                              <label
                                htmlFor="toggle7"
                                className="checktoggle"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-6">
                        <div className="settings-card">
                          <div className="settings-card-body d-flex justify-content-between">
                            <h6 className="settings-text">Payments</h6>
                            <div className="status-toggle d-flex align-items-center">
                              <input
                                type="checkbox"
                                id="toggle8"
                                className="check"
                                defaultChecked
                              />
                              <label
                                htmlFor="toggle8"
                                className="checktoggle"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Preference */}
                  {/* Plan Billing */}
                  <div className="tab-pane fade" id="billing" role="tabpanel">
                    <div className="plan-billing-info">
                      <h6 className="mb-3">Current Plan Information</h6>
                      <div className="billing-type">
                        <div className="settings-card bg-light">
                          <div className="settings-card-head">
                            <h6 className="text-dark fw-medium">Basic Plan</h6>
                            <span>
                              {" "}
                              <i className="ti ti-clock"> </i> 20 Days Left
                            </span>
                          </div>
                          <div className="settings-card-body">
                            <div className="btn-item">
                              <Link
                                to="#"
                                className="btn btn-dark text-white"
                                data-bs-toggle="modal"
                                data-bs-target="#add-card"
                              >
                                {" "}
                                <i className="ti ti-plus me-1" />
                                Add New Card{" "}
                              </Link>
                              <Link
                                to="#"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#plans-modal"
                              >
                                {" "}
                                <i className="ti ti-shield-checkered me-1" />{" "}
                                Upgrade{" "}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="settings-card d-block">
                              <div className="settings-new">
                                <div className="settings-img d-flex align-items-center gap-3 mb-3">
                                  <ImageWithBasePath
                                    src="assets/img/payment/gateway-04.png"
                                    alt=""
                                  />
                                  <h6>
                                    <span> James Peterson </span>
                                    Visa •••• 1568
                                  </h6>
                                </div>
                                <div className="setting-bottom d-flex align-items-center justify-content-between">
                                  <span className="badge badge-success bg-success text-white">
                                    {" "}
                                    Default{" "}
                                  </span>
                                  <div className="edit d-flex gap-2">
                                    <Link
                                      to="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit-card"
                                    >
                                      {" "}
                                      <i className="ti ti-edit" />{" "}
                                    </Link>
                                    <Link
                                      to="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete-card"
                                    >
                                      {" "}
                                      <i className="ti ti-trash" />{" "}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="settings-card d-block">
                              <div className="settings-new">
                                <div className="settings-img d-flex align-items-center gap-3 mb-3">
                                  <ImageWithBasePath
                                    src="assets/img/payment/gateway-05.png"
                                    alt=""
                                  />
                                  <h6>
                                    <span> James Peterson </span>
                                    Visa •••• 1568
                                  </h6>
                                </div>
                                <div className="setting-bottom d-flex align-items-center justify-content-between">
                                  <span className="text-muted text-decoration-underline">
                                    {" "}
                                    Set as default{" "}
                                  </span>
                                  <div className="edit d-flex gap-2">
                                    <Link
                                      to="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit-card"
                                    >
                                      {" "}
                                      <i className="ti ti-edit" />{" "}
                                    </Link>
                                    <Link
                                      to="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete-card"
                                    >
                                      {" "}
                                      <i className="ti ti-trash" />{" "}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4" />
                        </div>
                      </div>
                      <div className="plan-bill-table">
                        <div className="dashboard-header">
                          <div className="main-title">
                            <h3>Invoices</h3>
                            <div id="tableinfo" />
                          </div>
                          <div className="head-info">
                            <p>
                              Total Payments{" "}
                              <span className="text-primary">(17)</span>
                            </p>
                          </div>
                        </div>
                        <div className="table-responsive custom-table invoice-table">
                          <table className="table table-stripe">
                            <thead className="thead-light">
                              <tr>
                                <th className="text-start">ID</th>
                                <th>Invoice No</th>
                                <th>Billing Date</th>
                                <th>Plan</th>
                                <th>Status</th>
                                <th className="text-end">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-start">1</td>
                                <td>
                                  <Link to="#">INV0045</Link>
                                </td>
                                <td>01 Dec 2023 09:00AM</td>
                                <td>Basic</td>
                                <td>
                                  <span className="badge badge-receive bg-success d-inline-flex align-items-center">
                                    <i className="feather icon-check me-2" />
                                    Paid
                                  </span>
                                </td>
                                <td>
                                  <div className="table-action justify-content-end">
                                    <Link to="#">
                                      <i className="feather icon-download" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-start">2</td>
                                <td>
                                  <Link to="#">INV0044</Link>
                                </td>
                                <td>01 Nov 2023 10:00AM</td>
                                <td>Basic</td>
                                <td>
                                  <span className="badge badge-receive bg-success d-inline-flex align-items-center">
                                    <i className="feather icon-check me-2" />
                                    Paid
                                  </span>
                                </td>
                                <td>
                                  <div className="table-action justify-content-end">
                                    <Link to="#">
                                      <i className="feather icon-download" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-start">3</td>
                                <td>
                                  <Link to="#">INV0043</Link>
                                </td>
                                <td>01 Oct 2023 09:15AM</td>
                                <td>Basic</td>
                                <td>
                                  <span className="badge badge-receive bg-success d-inline-flex align-items-center">
                                    <i className="feather icon-check me-2" />
                                    Paid
                                  </span>
                                </td>
                                <td>
                                  <div className="table-action justify-content-end">
                                    <Link to="#">
                                      <i className="feather icon-download" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-start">4</td>
                                <td>
                                  <Link to="#">INV0043</Link>
                                </td>
                                <td>01 Sep 2023 09:30AM</td>
                                <td>Basic</td>
                                <td>
                                  <span className="badge badge-receive bg-success d-inline-flex align-items-center">
                                    <i className="feather icon-check me-2" />
                                    Paid
                                  </span>
                                </td>
                                <td>
                                  <div className="table-action justify-content-end">
                                    <Link to="#">
                                      <i className="feather icon-download" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-start">5</td>
                                <td>
                                  <Link to="#">INV0041</Link>
                                </td>
                                <td>30 Aug 2023 09:30AM</td>
                                <td>Basic</td>
                                <td>
                                  <span className="badge badge-receive bg-success d-inline-flex align-items-center">
                                    <i className="feather icon-check me-2" />
                                    Paid
                                  </span>
                                </td>
                                <td>
                                  <div className="table-action justify-content-end">
                                    <Link to="#">
                                      <i className="feather icon-download" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-start">6</td>
                                <td>
                                  <Link to="#">INV0040</Link>
                                </td>
                                <td>25 Aug 2023 07:30AM</td>
                                <td>Basic</td>
                                <td>
                                  <span className="badge badge-receive bg-success d-inline-flex align-items-center">
                                    <i className="feather icon-check me-2" />
                                    Paid
                                  </span>
                                </td>
                                <td>
                                  <div className="table-action justify-content-end">
                                    <Link to="#">
                                      <i className="feather icon-download" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-start">7</td>
                                <td>
                                  <Link to="#">INV0039</Link>
                                </td>
                                <td>15 Aug 2023 06:30AM</td>
                                <td>Basic</td>
                                <td>
                                  <span className="badge badge-receive bg-success d-inline-flex align-items-center">
                                    <i className="feather icon-check me-2" />
                                    Paid
                                  </span>
                                </td>
                                <td>
                                  <div className="table-action justify-content-end">
                                    <Link to="#">
                                      <i className="feather icon-download" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-start">8</td>
                                <td>
                                  <Link to="#">INV0038</Link>
                                </td>
                                <td>10 Aug 2023 09:30AM</td>
                                <td>Basic</td>
                                <td>
                                  <span className="badge badge-receive bg-success d-inline-flex align-items-center">
                                    <i className="feather icon-check me-2" />
                                    Paid
                                  </span>
                                </td>
                                <td>
                                  <div className="table-action justify-content-end">
                                    <Link to="#">
                                      <i className="feather icon-download" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-start">9</td>
                                <td>
                                  <Link to="#">INV0037</Link>
                                </td>
                                <td>01 Aug 2023 11:30AM</td>
                                <td>Basic</td>
                                <td>
                                  <span className="badge badge-receive bg-success d-inline-flex align-items-center">
                                    <i className="feather icon-check me-2" />
                                    Paid
                                  </span>
                                </td>
                                <td>
                                  <div className="table-action justify-content-end">
                                    <Link to="#">
                                      <i className="feather icon-download" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-start">10</td>
                                <td>
                                  <Link to="#">INV0036</Link>
                                </td>
                                <td>20 Jul 2023 12:30AM</td>
                                <td>Basic</td>
                                <td>
                                  <span className="badge badge-receive bg-success d-inline-flex align-items-center">
                                    <i className="feather icon-check me-2" />
                                    Paid
                                  </span>
                                </td>
                                <td>
                                  <div className="table-action justify-content-end">
                                    <Link to="#">
                                      <i className="feather icon-download" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-start">11</td>
                                <td>
                                  <Link to="#">INV0035</Link>
                                </td>
                                <td>10 JUl 2023 05:30AM</td>
                                <td>Basic</td>
                                <td>
                                  <span className="badge badge-receive bg-success d-inline-flex align-items-center">
                                    <i className="feather icon-check me-2" />
                                    Paid
                                  </span>
                                </td>
                                <td>
                                  <div className="table-action justify-content-end">
                                    <Link to="#">
                                      <i className="feather icon-download" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-start">12</td>
                                <td>
                                  <Link to="#">INV0034</Link>
                                </td>
                                <td>01 Jul 2023 09:30AM</td>
                                <td>Basic</td>
                                <td>
                                  <span className="badge badge-receive bg-success d-inline-flex align-items-center">
                                    <i className="feather icon-check me-2" />
                                    Paid
                                  </span>
                                </td>
                                <td>
                                  <div className="table-action justify-content-end">
                                    <Link to="#">
                                      <i className="feather icon-download" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-start">13</td>
                                <td>
                                  <Link to="#">INV0033</Link>
                                </td>
                                <td>01 Jun 2023 11:30AM</td>
                                <td>Basic</td>
                                <td>
                                  <span className="badge badge-receive bg-success d-inline-flex align-items-center">
                                    <i className="feather icon-check me-2" />
                                    Paid
                                  </span>
                                </td>
                                <td>
                                  <div className="table-action justify-content-end">
                                    <Link to="#">
                                      <i className="feather icon-download" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="table-bottom-footer d-sm-flex d-md-flex d-lg-flex align-items-center justify-content-between mt-4">
                          <div
                            className="dataTables_length"
                            id="DataTables_Table_0_length"
                          >
                            <label>
                              Showing
                              <select className="form-select form-select-sm">
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
                    </div>
                  </div>
                  {/* Plan Billing */}
                  {/* Notification */}
                  <div
                    className="tab-pane fade"
                    id="notifications"
                    role="tabpanel"
                  >
                    <div className="notification-info-table">
                      <div className="table-card noti-setting-table custom-setting-table">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Transactional Notifications</th>
                                <th className="text-grey fw-regular">Push</th>
                                <th className="text-grey fw-regular">Email</th>
                                <th className="text-grey fw-regular">SMS</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Order Confirmation</td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle14"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle14"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle15"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle15"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle16"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle16"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>Service Requests</td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle17"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle17"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle18"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle18"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle19"
                                      className="check"
                                    />
                                    <label
                                      htmlFor="toggle19"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>Payment Receipts</td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle20"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle20"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle21"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle21"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle22"
                                      className="check"
                                    />
                                    <label
                                      htmlFor="toggle22"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>Appointment Reminders</td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle10"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle10"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle11"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle11"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle12"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle12"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="notification-info-table">
                      <div className="table-card noti-setting-table custom-setting-table">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>User Engagement Notifications</th>
                                <th className="text-grey fw-regular">Push</th>
                                <th className="text-grey fw-regular">Email</th>
                                <th className="text-grey fw-regular">SMS</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Profile Completion Reminder</td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-1"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-1"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-2"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-2"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-3"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-3"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>Feedback or Survey Requests</td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-4"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-4"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-5"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-5"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-6"
                                      className="check"
                                    />
                                    <label
                                      htmlFor="toggle-6"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>Achievements</td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-7"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-7"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-8"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-8"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-9"
                                      className="check"
                                    />
                                    <label
                                      htmlFor="toggle-9"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>Suggestions</td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-10"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-10"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-11"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-11"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-12"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-12"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="notification-info-table">
                      <div className="table-card noti-setting-table custom-setting-table">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>System Notifications</th>
                                <th className="text-grey fw-regular">Push</th>
                                <th className="text-grey fw-regular">Email</th>
                                <th className="text-grey fw-regular">SMS</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>System Maintenance Schedules</td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggles-1"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggles-1"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggles-2"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggles-2"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggles-3"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggles-3"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>Updates</td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggles-4"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggles-4"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggles-5"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggles-5"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggles-6"
                                      className="check"
                                    />
                                    <label
                                      htmlFor="toggles-6"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>Security Alerts</td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggles-7"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggles-7"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggles-8"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggles-8"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggles-9"
                                      className="check"
                                    />
                                    <label
                                      htmlFor="toggles-9"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>Service Availability</td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggles-10"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggles-10"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggles-11"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggles-11"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggles-12"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggles-12"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Notification */}
                  {/* Integration */}
                  <div
                    className="tab-pane fade"
                    id="integration"
                    role="tabpanel"
                  >
                    <div className="notification-info-table">
                      <div className="table-card integrated-table custom-setting-table">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>SMS Gateway Integrations</th>
                                <th></th>
                                <th></th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="custom-first-row">
                                <td>
                                  <div className="d-flex align-items-center integration-name">
                                    <span className="integration-icon">
                                      <ImageWithBasePath
                                        src="assets/img/gateway/gateway-01.svg"
                                        alt=""
                                      />
                                    </span>
                                    <h6> Nexmo </h6>
                                  </div>
                                </td>
                                <td>
                                  <span className="badge bg-soft-secondary new-badge text-success">
                                    {" "}
                                    <i className="ti ti-point-filled me-1" />{" "}
                                    Connected
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    to="#"
                                    className="settings-modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#integration_popup"
                                  >
                                    <i className="feather icon-settings" />
                                  </Link>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-13"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-13"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center integration-name">
                                    <span className="integration-icon">
                                      <ImageWithBasePath
                                        src="assets/img/gateway/gateway-02.svg"
                                        alt=""
                                      />
                                    </span>
                                    <h6> 2Factor </h6>
                                  </div>
                                </td>
                                <td>
                                  <span className="badge bg-soft-secondary new-badge text-success">
                                    {" "}
                                    <i className="ti ti-point-filled me-1" />
                                    Connected
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    to="#"
                                    className="settings-modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#integration_popup"
                                  >
                                    <i className="feather icon-settings" />
                                  </Link>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-14"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-14"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center integration-name">
                                    <span className="integration-icon">
                                      <ImageWithBasePath
                                        src="assets/img/gateway/gateway-03.svg"
                                        alt=""
                                      />
                                    </span>
                                    <h6> Twilio </h6>
                                  </div>
                                </td>
                                <td>
                                  <span className="badge bg-soft-secondary new-badge text-success">
                                    {" "}
                                    <i className="ti ti-point-filled me-1" />
                                    Connected
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    to="#"
                                    className="settings-modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#integration_popup"
                                  >
                                    <i className="feather icon-settings" />
                                  </Link>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-15"
                                      className="check"
                                    />
                                    <label
                                      htmlFor="toggle-15"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="notification-info-table">
                      <div className="table-card integrated-table custom-setting-table">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Email Integrations</th>
                                <th></th>
                                <th></th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="custom-first-row">
                                <td>
                                  <div className="d-flex align-items-center integration-name">
                                    <span className="integration-icon">
                                      <ImageWithBasePath
                                        src="assets/img/gateway/gateway-04.svg"
                                        alt=""
                                      />
                                    </span>
                                    <h6>SendGrid</h6>
                                  </div>
                                </td>
                                <td>
                                  <span className="badge bg-soft-secondary new-badge text-success">
                                    {" "}
                                    <i className="ti ti-point-filled me-1" />
                                    Connected
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    to="#"
                                    className="settings-modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#integration_popup"
                                  >
                                    <i className="feather icon-settings" />
                                  </Link>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-16"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-16"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center integration-name">
                                    <span className="integration-icon">
                                      <ImageWithBasePath
                                        src="assets/img/gateway/gateway-05.svg"
                                        alt=""
                                      />
                                    </span>
                                    <h6>PHP Mailer</h6>
                                  </div>
                                </td>
                                <td>
                                  <span className="badge bg-soft-secondary new-badge text-success">
                                    {" "}
                                    <i className="ti ti-point-filled me-1" />
                                    Connected
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    to="#"
                                    className="settings-modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#integration_popup"
                                  >
                                    <i className="feather icon-settings" />
                                  </Link>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-17"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-17"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="notification-info-table">
                      <div className="table-card integrated-table custom-setting-table">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Payment Gateway Integrations</th>
                                <th></th>
                                <th></th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="custom-first-row">
                                <td>
                                  <div className="d-flex align-items-center integration-name">
                                    <span className="integration-icon">
                                      <ImageWithBasePath
                                        src="assets/img/gateway/gateway-09.svg"
                                        alt=""
                                      />
                                    </span>
                                    <h6> Paypal </h6>
                                  </div>
                                </td>
                                <td>
                                  <span className="badge bg-soft-secondary new-badge text-success">
                                    {" "}
                                    <i className="ti ti-point-filled me-1" />
                                    Connected
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    to="#"
                                    className="settings-modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#integration_popup"
                                  >
                                    <i className="feather icon-settings" />
                                  </Link>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-18"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-18"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center integration-name">
                                    <span className="integration-icon">
                                      <ImageWithBasePath
                                        src="assets/img/gateway/gateway-10.svg"
                                        alt=""
                                      />
                                    </span>
                                    <h6> Stripe </h6>
                                  </div>
                                </td>
                                <td>
                                  <span className="badge bg-soft-secondary new-badge text-success">
                                    {" "}
                                    <i className="ti ti-point-filled me-1" />
                                    Connected
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    to="#"
                                    className="settings-modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#integration_popup"
                                  >
                                    <i className="feather icon-settings" />
                                  </Link>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-19"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-19"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center integration-name">
                                    <span className="integration-icon">
                                      <ImageWithBasePath
                                        src="assets/img/gateway/gateway-11.svg"
                                        alt=""
                                      />
                                    </span>
                                    <h6> Visa </h6>
                                  </div>
                                </td>
                                <td>
                                  <span className="badge bg-soft-danger new-badge text-success">
                                    {" "}
                                    <i className="ti ti-point-filled me-1" />{" "}
                                    Connected
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    to="#"
                                    className="settings-modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#integration_popup"
                                  >
                                    <i className="feather icon-settings" />
                                  </Link>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-20"
                                      className="check"
                                    />
                                    <label
                                      htmlFor="toggle-20"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="notification-info-table">
                      <div className="table-card integrated-table custom-setting-table">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Social Media Integrations</th>
                                <th></th>
                                <th></th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="custom-first-row">
                                <td>
                                  <div className="d-flex align-items-center integration-name">
                                    <span className="integration-icon">
                                      <ImageWithBasePath
                                        src="assets/img/gateway/gateway-06.svg"
                                        alt=""
                                      />
                                    </span>
                                    <h6>Facebook</h6>
                                  </div>
                                </td>
                                <td>
                                  <span className="badge bg-soft-secondary new-badge text-success">
                                    {" "}
                                    <i className="ti ti-point-filled me-1" />
                                    Connected
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    to="#"
                                    className="settings-modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#integration_popup"
                                  >
                                    <i className="feather icon-settings" />
                                  </Link>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-21"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-21"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center integration-name">
                                    <span className="integration-icon">
                                      <ImageWithBasePath
                                        src="assets/img/gateway/gateway-07.svg"
                                        alt=""
                                      />
                                    </span>
                                    <h6>Twitter</h6>
                                  </div>
                                </td>
                                <td>
                                  <span className="badge bg-soft-secondary new-badge text-success">
                                    {" "}
                                    <i className="ti ti-point-filled me-1" />
                                    Connected
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    to="#"
                                    className="settings-modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#integration_popup"
                                  >
                                    <i className="feather icon-settings" />
                                  </Link>
                                </td>
                                <td>
                                  <div className="status-toggle d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="toggle-22"
                                      className="check"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="toggle-22"
                                      className="checktoggle"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Integration */}
                </div>
                <div className="settings-card-footer">
                  <div className="btn-item">
                    <Link to="#" className="btn">
                      Cancel
                    </Link>
                    <button className="btn btn-primary" type="submit">
                      Save Changes
                    </button>
                  </div>
                </div>
                {/* /Page Content */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <SellerSettingsModal />
    </>
  );
};

export default SellerSettings;
