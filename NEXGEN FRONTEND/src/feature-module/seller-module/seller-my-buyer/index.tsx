import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/img'

const SellerBuyer = () => {
  return (
    <>
    {/* Page Content */}
    <div className="page-wrapper">
      <div className="page-content content">
        <div className="main-title mb-4">
          <h4>Mes clients</h4>
        </div>
        <div className="row seller-list">
          <div className="col-xl-4 col-md-6">
            <div className="card">
              <div className="card-body text-center">
                <span className="avatar">
                  <Link to="#">
                    <ImageWithBasePath
                      className="rounded-pill"
                      src="/assets/img/user/user-13.jpg"
                      alt="img"
                    />
                  </Link>
                </span>
                <h6 className="mb-1">
                  <Link to="#">Sophia Chen</Link>
                </h6>
                <p>UI/UX Designer</p>
                <p className="mb-0 location-text d-inline-flex align-items-center">
                  <ImageWithBasePath
                    src="/assets/img/flags/switzerland.svg"
                    alt="img"
                    className="me-1"
                  />
                  Switzerland <i className="ti ti-point-filled mx-1" /> Total Gigs
                  : 45
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card">
              <div className="card-body text-center">
                <span className="avatar">
                  <Link to="#">
                    <ImageWithBasePath
                      className="rounded-pill"
                      src="/assets/img/user/user-18.jpg"
                      alt="img"
                    />
                  </Link>
                </span>
                <h6 className="mb-1">
                  <Link to="#">Ethan Reynolds</Link>
                </h6>
                <p>Software Engineer</p>
                <p className="mb-0 location-text d-inline-flex align-items-center">
                  <ImageWithBasePath
                    src="/assets/img/flags/malaysia.svg"
                    alt="img"
                    className="me-1"
                  />
                  Malaysia <i className="ti ti-point-filled mx-1" /> Total Gigs :
                  12
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card">
              <div className="card-body text-center">
                <span className="avatar">
                  <Link to="#">
                    <ImageWithBasePath
                      className="rounded-pill"
                      src="/assets/img/user/user-03.jpg"
                      alt="img"
                    />
                  </Link>
                </span>
                <h6 className="mb-1">
                  <Link to="#">Isabella Martinez</Link>
                </h6>
                <p>Cybersecurity Analyst</p>
                <p className="mb-0 location-text d-inline-flex align-items-center">
                  <ImageWithBasePath
                    src="/assets/img/flags/us.svg"
                    alt="img"
                    className="me-1"
                  />
                  USA <i className="ti ti-point-filled mx-1" /> Total Gigs : 15
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card">
              <div className="card-body text-center">
                <span className="avatar">
                  <Link to="#">
                    <ImageWithBasePath
                      className="rounded-pill"
                      src="/assets/img/user/user-09.jpg"
                      alt="img"
                    />
                  </Link>
                </span>
                <h6 className="mb-1">
                  <Link to="#">Liam Carter</Link>
                </h6>
                <p>FinTech Innovator</p>
                <p className="mb-0 location-text d-inline-flex align-items-center">
                  <ImageWithBasePath
                    src="/assets/img/flags/turkey.svg"
                    alt="img"
                    className="me-1"
                  />
                  Turkey <i className="ti ti-point-filled mx-1" /> Total Gigs : 22
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card">
              <div className="card-body text-center">
                <span className="avatar">
                  <Link to="#">
                    <ImageWithBasePath
                      className="rounded-pill"
                      src="/assets/img/user/user-08.jpg"
                      alt="img"
                    />
                  </Link>
                </span>
                <h6 className="mb-1">
                  <Link to="#">Sam Taylor</Link>
                </h6>
                <p>Software Engineer</p>
                <p className="mb-0 location-text d-inline-flex align-items-center">
                  <ImageWithBasePath
                    src="/assets/img/flags/malaysia.svg"
                    alt="img"
                    className="me-1"
                  />
                  Malaysia <i className="ti ti-point-filled mx-1" /> Total Gigs :
                  12
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card">
              <div className="card-body text-center">
                <span className="avatar">
                  <Link to="#">
                    <ImageWithBasePath
                      className="rounded-pill"
                      src="/assets/img/user/user-15.jpg"
                      alt="img"
                    />
                  </Link>
                </span>
                <h6 className="mb-1">
                  <Link to="#">livia Rivera</Link>
                </h6>
                <p>Finance Manager</p>
                <p className="mb-0 location-text d-inline-flex align-items-center">
                  <ImageWithBasePath
                    src="/assets/img/flags/singapore.svg"
                    alt="img"
                    className="me-1"
                  />
                  Singapore <i className="ti ti-point-filled mx-1" /> Total Gigs :
                  21
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card">
              <div className="card-body text-center">
                <span className="avatar">
                  <Link to="#">
                    <ImageWithBasePath
                      className="rounded-pill"
                      src="/assets/img/user/user-05.jpg"
                      alt="img"
                    />
                  </Link>
                </span>
                <h6 className="mb-1">
                  <Link to="#">Noah Pate</Link>
                </h6>
                <p>Data Analyst</p>
                <p className="mb-0 location-text d-inline-flex align-items-center">
                  <ImageWithBasePath
                    src="/assets/img/flags/uae.svg"
                    alt="img"
                    className="me-1"
                  />
                  UAE <i className="ti ti-point-filled mx-1" /> Total Gigs : 39
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card">
              <div className="card-body text-center">
                <span className="avatar">
                  <Link to="#">
                    <ImageWithBasePath
                      className="rounded-pill"
                      src="/assets/img/user/user-10.jpg"
                      alt="img"
                    />
                  </Link>
                </span>
                <h6 className="mb-1">
                  <Link to="#">Ava Thompson</Link>
                </h6>
                <p>Crypto</p>
                <p className="mb-0 location-text d-inline-flex align-items-center">
                  <ImageWithBasePath
                    src="/assets/img/flags/switzerland.svg"
                    alt="img"
                    className="me-1"
                  />
                  Switzerland <i className="ti ti-point-filled mx-1" /> Total
                  Gigs: 22
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card">
              <div className="card-body text-center">
                <span className="avatar">
                  <Link to="#">
                    <ImageWithBasePath
                      className="rounded-pill"
                      src="/assets/img/user/user-16.jpg"
                      alt="img"
                    />
                  </Link>
                </span>
                <h6 className="mb-1">
                  <Link to="#">James Lawson</Link>
                </h6>
                <p>Design</p>
                <p className="mb-0 location-text d-inline-flex align-items-center">
                  <ImageWithBasePath
                    src="/assets/img/flags/uruguay.svg"
                    alt="img"
                    className="me-1"
                  />
                  Uruguay <i className="ti ti-point-filled mx-1" /> Total Gigs :
                  16
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            to="#"
            className="btn btn-lg btn-dark d-inline-flex align-items-center"
          >
            <i className="ti ti-loader-3 me-2" />
            Load More
          </Link>
        </div>
      </div>
    </div>
    {/* /Page Content */}
  </>
  
  )
}

export default SellerBuyer