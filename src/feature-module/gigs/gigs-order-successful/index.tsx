import { all_routes } from '../../router/all_routes'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/img'

const GigsOrderSuccessful = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="breadcrumb-img">
          <div className="breadcrumb-left">
            <ImageWithBasePath src="assets/img/bg/banner-bg-03.png" alt="img" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.home}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Thank You
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title mb-0">
                Thank You <span className="text-primary" />
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          {/* Received gigs */}
          <div className="service-wrap text-center rounded-0 border-0 shadow-none p-0">
            <div className="received-iocn mb-4 m-auto d-flex align-items-center justify-content-center">
              <i className="ti ti-check" />
            </div>
            <h5 className="mb-1"> Thank you! Your Order has been Recieved </h5>
            <p>
              {" "}
              Order Number : <span> #OR1234 </span>{" "}
            </p>
          </div>
          {/* Received gigs */}
          {/* Order details */}
          <div className="service-widget member-widget">
            <h5 className="service-head d-flex align-items-center">
              Order Details
            </h5>
            <div className="user-details bg-light p-3 mb-16">
              <div className="user-img service-user">
                <ImageWithBasePath src="assets/img/checkout-image.png" alt="img" />
              </div>
              <div className="user-info">
                <h5>
                  <span className="me-2">
                    I will design, redesign wordpress website using elementor pro
                  </span>{" "}
                </h5>
                <p>Delivery : Jan 29 2025</p>
              </div>
            </div>
            <ul className="member-info">
              <li>
                Gigs Price
                <span>$45</span>
              </li>
              <li>
                Gig's Quantity x 3<span>$105</span>
              </li>
              <li>
                Extra Services
                <span>$98</span>
              </li>
              <li>
                Processing Fees
                <span>$4</span>
              </li>
              <li>
                Tax (15%)
                <span>$18</span>
              </li>
            </ul>
            <div className="about-me m-0 pt-3 mt-3 border-top border-grey">
              <h6 className="d-flex justify-content-between align-items-center m-0">
                Total <span> $298</span>
              </h6>
            </div>
          </div>
          {/* Order details */}
          {/* Billing details */}
          <div className="row">
            <div className="col-lg-12">
              <div className="service-widget">
                <h5 className="service-head mb-3">Billing Information </h5>
                <h6 className="mb-2">Darren Jurel</h6>
                <div className="service-text">
                  <p className="mb-1">
                    367 hillcrest lane, Irvine, California, USA
                  </p>
                  <p className="mb-1">Phone Number : 310-437-2766</p>
                  <p className="mb-0">Email ID : info@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="service-widget m-0">
                <h5 className="service-head mb-3">Payment Details </h5>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <div className="service-text mb-0">
                    <h6 className="mb-1">Payment Method</h6>
                    <p className="mb-0"> Stripe </p>
                  </div>
                  <div className="service-text mb-0">
                    <h6 className="mb-1">Transaction ID</h6>
                    <p className="mb-0">#TXN1324566788929</p>
                  </div>
                  <div className="service-text mb-0">
                    <h6 className="mb-1">Time &amp; Date</h6>
                    <p className="mb-0">25 Jan 2025, 05:24 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Billing details */}
        </div>
      </div>
      {/* Page Content */}
    </>
  )
}

export default GigsOrderSuccessful