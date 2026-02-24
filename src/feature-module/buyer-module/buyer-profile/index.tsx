import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";

const BuyerProfile = () => {
  return (
    <>
      {/* Page Content */}
      <div className="page-wrapper">
        <div className="page-content content">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="main-title mb-4">
                <h4>My Profile</h4>
              </div>
              <div className="card profile-card">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-3 justify-content-between flex-wrap">
                    <div className="d-flex align-items-center flex-shrink-0">
                      <span className="avatar avatar-lg">
                        <ImageWithBasePath
                          className="rounded-2"
                          src="/assets/img/user/user-05.jpg"
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
                    <Link to="#" className="btn btn-lg btn-dark">
                      <i className="ti ti-user-edit me-1" />
                      Edit Profile
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card profile-details">
                <div className="card-header">
                  <h5 className="mb-0">Personal Details</h5>
                </div>
                <div className="card-body">
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
              <div className="card profile-details">
                <div className="card-header">
                  <h5 className="mb-0">Address Details</h5>
                </div>
                <div className="card-body">
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
              <div className="card mb-0">
                <div className="card-header">
                  <h6 className="mb-0">About Me</h6>
                </div>
                <div className="card-body">
                  <p className="mb-0">
                    Hello, Greetings! My name is Adrian, a professional
                    embroidery digitizer who converts an Image into embroidery
                    files such as DST, PES or any other. I can produce an
                    embroidery design file without any fabric puckering. I'm the
                    guy who has more than 15 years of experience in the field of
                    embroidery design digitizing. I love what I do because
                    embroidery digitizing is my passion and profession. so, get
                    in touch with me if you have any question. thank you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default BuyerProfile;
