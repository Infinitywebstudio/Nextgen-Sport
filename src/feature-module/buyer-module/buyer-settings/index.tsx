import { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { city, country, state } from "../../../core/common/selectOption";
import CommonSelect from "../../../core/common/common-select/commonSelect";
import CommonTagInputs from "../../../core/common/Taginput";


const BuyerSettings = () => {
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
              <div className="settings-info bg-white rounded-2">
                <div className="settings-page-lists">
                  <ul
                    className="settings-head nav nav-tabs rounded-0 bg-transparent"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <Link
                        to="#"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#my_profile"
                        aria-selected="true"
                        role="tab"
                      >
                        My Profile
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        to="#"
                        className="nav-link"
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
                  {/* My Profile View */}
                  <div
                    className="tab-pane fade show active"
                    id="my_profile"
                    role="tabpanel"
                  >
                    <div className="settings-card">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center gap-3 justify-content-between flex-wrap">
                          <div className="d-flex align-items-center flex-shrink-0">
                            <span className="avatar avatar-lg">
                              <ImageWithBasePath
                                className="rounded-2"
                                src="assets/img/user/user-05.jpg"
                                alt="img"
                              />
                            </span>
                            <div className="ms-3">
                              <h6 className="mb-1 d-inline-flex flex-wrap align-items-center">
                                Adrian Revolt
                              </h6>
                              <p className="mb-2">California, US</p>
                              <p className="mb-0 d-inline-flex align-items-center">
                                <i className="ti ti-star-filled me-2 text-warning" />
                                Ratings 5.0 (45 Reviews)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="settings-card">
                      <div className="settings-card-head bg-light">
                        <h5 className="mb-0">Personal Details</h5>
                      </div>
                      <div className="settings-card-body">
                        <div className="row row-gap-3">
                          <div className="col-md-4 col-sm-6">
                            <h6>Name</h6>
                            <p className="mb-0">David Wilson</p>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <h6>Email</h6>
                            <p className="mb-0">davidwilson@example.com</p>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <h6>Phone</h6>
                            <p className="mb-0">+1(452) 125-6789</p>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <h6>Date</h6>
                            <p className="mb-0">25 Jan 2024</p>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <h6>Speaks</h6>
                            <p className="mb-0">English, Portugese</p>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <h6>Member Since</h6>
                            <p className="mb-0">25 Jan 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="settings-card">
                      <div className="settings-card-head bg-light">
                        <h5 className="mb-0">Address Details</h5>
                      </div>
                      <div className="settings-card-body">
                        <div className="row row-gap-3">
                          <div className="col-md-4 col-sm-6">
                            <h6>Country</h6>
                            <p className="mb-0">United States</p>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <h6>City</h6>
                            <p className="mb-0">California</p>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <h6>State</h6>
                            <p className="mb-0">Los Angeles</p>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <h6>Address Line</h6>
                            <p className="mb-0">1234 Sunset Blvd, Apt 56B</p>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <h6>Postal Code</h6>
                            <p className="mb-0">90026</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="settings-card">
                      <div className="settings-card-head bg-light">
                        <h6 className="mb-0">About Me</h6>
                      </div>
                      <div className="settings-card-body">
                        <p className="mb-0">
                          Hello, Greetings! My name is Adrian, a professional
                          embroidery digitizer who converts an Image into embroidery
                          files such as DST, PES or any other. I can produce an
                          embroidery design file without any fabric puckering. I'm the
                          guy who has more than 15 years of experience in the field of
                          embroidery digitizing. I love what I do because
                          embroidery digitizing is my passion and profession. so, get
                          in touch with me if you have any question. thank you!
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /My Profile View */}
                  {/* Profile Settings */}
                  <div
                    className="tab-pane fade"
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
                                <label className="form-label">
                                  {" "}
                                  First Name{" "}
                                  <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="form-label">
                                  {" "}
                                  Last Name{" "}
                                  <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="form-label">
                                  {" "}
                                  Email <span className="text-primary">*</span>
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="form-label">
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
                                <label className="form-label">
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
                                  Country<span className="text-primary">*</span>
                                </label>
                                <CommonSelect
                                  options={country}
                                  className="select"
                                  defaultValue={country[0]}
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="form-label mb-1 fw-medium text-dark">
                                  State<span className="text-primary">*</span>
                                </label>
                                <CommonSelect
                                  options={state}
                                  className="select"
                                  defaultValue={state[0]}
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="form-label mb-1 fw-medium text-dark">
                                  City<span className="text-primary">*</span>
                                </label>
                                <CommonSelect
                                  options={city}
                                  className="select"
                                  defaultValue={city[0]}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-wrap mb-0">
                                <label className="form-label">
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
                                <label className="form-label">
                                  {" "}
                                  Current Email{" "}
                                  <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap mb-lg-0 mb-md-0">
                                <label className="form-label">
                                  {" "}
                                  New Email{" "}
                                  <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap mb-0">
                                <label className="form-label">
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
                                <label className="form-label"> Job Title</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="form-label">
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
                                <label className="form-label">
                                  {" "}
                                  About You{" "}
                                </label>
                                <textarea
                                  className="form-control text-area"
                                  placeholder="Type here..."
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-wrap m-0">
                                <label className="form-label">
                                  {" "}
                                  Why Work With Me{" "}
                                </label>
                                <textarea
                                  className="form-control text-area"
                                  placeholder="Type here..."
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /Profile Settings */}
                  {/* Account Settings */}
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
                                <label className="form-label"> Email </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="form-label"> Password </label>
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
                    {/* /Paypal */}
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
                                <label className="form-label">
                                  {" "}
                                  Bank Name{" "}
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="form-label">
                                  {" "}
                                  Swift Code{" "}
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="form-label"> IBAN </label>
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
                    {/* /Bank Transfer */}
                    {/* Stripe Transfer */}
                    <div className="settings-card">
                      <div className="settings-card-head bg-light">
                        <h4>Bank Transfer</h4>
                      </div>
                      <form>
                        <div className="settings-card-body">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="form-label">
                                  {" "}
                                  Email <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="form-label">
                                  {" "}
                                  Password{" "}
                                  <span className="text-primary">*</span>
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
                    {/* /Stripe Transfer */}
                  </div>
                  {/* /Account Settings  */}
                </div>
                {/* /Page Content */}
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
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Mouse Cursor */}
        <div className="mouse-cursor cursor-outer" />
        <div className="mouse-cursor cursor-inner" />
        {/* /Mouse Cursor */}
        {/* Top Scroll */}
        <div className="back-to-top">
          <Link
            className="back-to-top-icon align-items-center justify-content-center d-flex"
            to="#top"
          >
            <ImageWithBasePath
              src="assets/img/icons/arrow-badge-up.svg"
              alt="img"
            />
          </Link>
        </div>
        {/* /Top Scroll */}
      </div>
    </>
  );
};

export default BuyerSettings;
