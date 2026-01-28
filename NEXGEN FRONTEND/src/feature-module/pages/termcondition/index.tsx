import ImageWithBasePath from '../../../core/img'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes';

const TermCondition = () => {
  const routes = all_routes;
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="breadcrumb-img">
          <div className="breadcrumb-left">
            <ImageWithBasePath src="assets/img/bg/breadcrump-bg-01.png" alt="img" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.home}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Terms &amp; Conditions
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Terms &amp; Conditions</h2>
            </div>
          </div>
        </div>
        <div className="breadcrumb-img">
          <div className="breadcrumb-right">
            <ImageWithBasePath src="assets/img/bg/breadcrump-bg-02.png" alt="img" />
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Terms & Condition */}
      <div className="page-content">
        <div className="privacy-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="terms-policy">
                  <h6 className="mb-3">Introduction</h6>
                  <p className="mb-3">
                    Welcome to DreamsGigs. By accessing or using our platform, you
                    agree to comply with and be bound by the following terms and
                    conditions (“Terms”). Please read them carefully before using
                    our services.
                  </p>
                  <h6 className="mb-3">Acceptance of Terms</h6>
                  <ul>
                    <li className="mb-2">
                      <span className="blue-dot" />
                      By accessing or using our Gigs, you confirm that you have
                      read, understood, and agreed to these Terms.
                    </li>
                    <li className="mb-3">
                      <span className="blue-dot" />
                      If you do not agree to these Terms, you may not use the
                      Website or its services.
                    </li>
                  </ul>
                  <h6 className="mb-3"> Eligibility</h6>
                  <ul>
                    <li className="mb-2">
                      <span className="blue-dot" />
                      Users must be at least 18 years old or have parental/guardian
                      consent to use the platform
                    </li>
                    <li className="mb-3">
                      <span className="blue-dot" />
                      Organizations must ensure that their members comply with these
                      Terms
                    </li>
                  </ul>
                  <h6 className="mb-3">Account Registration</h6>
                  <ul>
                    <li className="mb-2">
                      <span className="blue-dot" />
                      Users are required to register an account to access courses
                      and other features.
                    </li>
                    <li className="mb-2">
                      <span className="blue-dot" />
                      You agree to provide accurate and complete information during
                      registration.
                    </li>
                    <li className="mb-3">
                      <span className="blue-dot" />
                      You are responsible for maintaining the confidentiality of
                      your login credentials.
                    </li>
                  </ul>
                  <h6 className="mb-3">Payments and Subscriptions</h6>
                  <ul>
                    <li className="mb-2">
                      <span className="blue-dot" />
                      Certain courses or features may require payment or a
                      subscription.
                    </li>
                    <li className="mb-3">
                      <span className="blue-dot" />
                      You are responsible for any taxes applicable to your purchase.
                    </li>
                  </ul>
                  <h6 className="mb-3">Changes to Terms &amp; Conditions</h6>
                  <ul>
                    <li className="mb-0">
                      DreamsGigs may update these Terms &amp; Conditions
                      periodically. Any changes will be communicated through the
                      website or via email.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Terms & Condition */}
    </>

  )
}

export default TermCondition