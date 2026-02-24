import ImageWithBasePath from '../../../core/img'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'

const PrivacyPolicy = () => {
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
                    <Link to={all_routes.home}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Privacy Policy
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Privacy Policy</h2>
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
      {/* Privacy Policy */}
      <div className="page-content">
        <div className="privacy-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="terms-policy">
                  <p className="mb-3">
                    At DreamsGigs, we are committed to protecting your privacy. This
                    policy outlines how we handle your information:
                  </p>
                  <h6 className="mb-2">Information We Collect</h6>
                  <ul>
                    <li className="mb-1">
                      <span className="blue-dot" />
                      Personal data, such as your name, email address, and payment
                      details, collected during registration or purchases.
                    </li>
                    <li className="mb-3">
                      <span className="blue-dot" />
                      Non-personal data, including device information, browser type,
                      and usage patterns, to improve user experience.
                    </li>
                  </ul>
                  <h6 className="mb-2">How We Use Your Information</h6>
                  <ul>
                    <li className="mb-1">
                      <span className="blue-dot" />
                      To provide access to courses and services.
                    </li>
                    <li className="mb-1">
                      <span className="blue-dot" />
                      To process payments securely.
                    </li>
                    <li className="mb-1">
                      <span className="blue-dot" />
                      To deliver personalized content and updates.
                    </li>
                    <li className="mb-3">
                      <span className="blue-dot" />
                      For research, analytics, and marketing (with your consent when
                      required).
                    </li>
                  </ul>
                  <h6 className="mb-2">Data Protection</h6>
                  <ul>
                    <li className="mb-1">
                      <span className="blue-dot" />
                      We implement technical and organizational measures to
                      safeguard your data.
                    </li>
                    <li className="mb-3">
                      <span className="blue-dot" />
                      Your information is not sold or shared with third parties
                      except for essential service providers (e.g., payment
                      processors) or legal obligations.
                    </li>
                  </ul>
                  <h6 className="mb-2">Third-Party Links</h6>
                  <ul>
                    <li className="mb-1">
                      <span className="blue-dot" />
                      Our platform may include links to external websites.
                    </li>
                    <li className="mb-3">
                      <span className="blue-dot" />
                      We are not responsible for their privacy practices, and you
                      should review their policies.
                    </li>
                  </ul>
                  <h6 className="mb-2">Your Rights</h6>
                  <ul>
                    <li className="mb-3">
                      Access, update, or delete your personal information by
                      contacting us at [Insert Contact Information].
                    </li>
                  </ul>
                  <h6 className="mb-2">Policy Updates</h6>
                  <ul>
                    <li className="mb-3">
                      We may update this policy and notify you of significant
                      changes through our platform or email.
                    </li>
                    <li className="mb-0">
                      For any questions or concerns about this Privacy Policy,
                      contact us at dreamgigs@example.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Privacy Policy */}
    </>

  )
}

export default PrivacyPolicy