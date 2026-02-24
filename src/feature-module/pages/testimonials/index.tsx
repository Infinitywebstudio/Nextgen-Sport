import ImageWithBasePath from '../../../core/img'
import { all_routes } from '../../router/all_routes'
import { Link } from 'react-router-dom'

const Testimonials = () => {
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
                Testimonials
              </li>
            </ol>
          </nav>
          <h2 className="breadcrumb-title mb-0">
            Testimonials <span className="text-primary" />
          </h2>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  {/* Content */}
  <div className="page-content content">
    <div className="container">
      <div className="row">
        {/* Testimonial -1 */}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="testimonial-slider-card">
            <div className="testimonial-item">
              <div className="testimonial-icon">
                <i className="ti ti-quote-filled" />
              </div>
              <h5 className="mb-2">Great Work</h5>
              <p className="mb-3">
                The best part about this service is the variety of skills
                available. I've hired designers, writers, and developers, all in
                one place.
              </p>
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="testimonial-user p-0">
                  <ImageWithBasePath src="assets/img/user/user-01.jpg" alt="img" />
                  <div className="testimonial-info">
                    <h6>Gloria Weber</h6>
                    <p>United States</p>
                  </div>
                </div>
                <div className="star-rate m-0 bg-light">
                  <span>
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial -1 */}
        {/* Testimonial -2 */}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="testimonial-slider-card">
            <div className="testimonial-item">
              <div className="testimonial-icon">
                <i className="ti ti-quote-filled" />
              </div>
              <h5 className="mb-2">Steady income &amp; flexible work!</h5>
              <p className="mb-3">
                Thanks to this platform, I earn a stable income while working on
                my terms. The gig marketplace is well-structured, making it easy
                to find quality clients!
              </p>
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="testimonial-user p-0">
                  <ImageWithBasePath src="assets/img/user/user-02.jpg" alt="img" />
                  <div className="testimonial-info">
                    <h6>Gloria Weber</h6>
                    <p>United States</p>
                  </div>
                </div>
                <div className="star-rate m-0 bg-light">
                  <span>
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Testimonial -2 */}
        {/* Testimonial -3 */}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="testimonial-slider-card">
            <div className="testimonial-item">
              <div className="testimonial-icon">
                <i className="ti ti-quote-filled" />
              </div>
              <h5 className="mb-2">Best platform for remote work!</h5>
              <p className="mb-3">
                I've tried multiple freelancing websites, but this one stands
                out. It’s reliable, easy to use, and connects me with
                high-paying clients!
              </p>
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="testimonial-user p-0">
                  <ImageWithBasePath src="assets/img/user/user-03.jpg" alt="img" />
                  <div className="testimonial-info">
                    <h6>Adriana Hrit</h6>
                    <p>Copywriter</p>
                  </div>
                </div>
                <div className="star-rate m-0 bg-light">
                  <span>
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Testimonial -3 */}
        {/* Testimonial -4 */}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="testimonial-slider-card">
            <div className="testimonial-item">
              <div className="testimonial-icon">
                <i className="ti ti-quote-filled" />
              </div>
              <h5 className="mb-2">Freelancing without the hassle!</h5>
              <p className="mb-3">
                The job search is effortless, and payments are always on time. I
                love the freedom this platform provides regular gigs
                consistantly!
              </p>
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="testimonial-user p-0">
                  <ImageWithBasePath src="assets/img/user/user-04.jpg" alt="img" />
                  <div className="testimonial-info">
                    <h6>Michael Andrews</h6>
                    <p>Software Engineering</p>
                  </div>
                </div>
                <div className="star-rate m-0 bg-light">
                  <span>
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Testimonial -4 */}
        {/* Testimonial -5 */}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="testimonial-slider-card">
            <div className="testimonial-item">
              <div className="testimonial-icon">
                <i className="ti ti-quote-filled" />
              </div>
              <h5 className="mb-2">Finding top talent is easy!</h5>
              <p className="mb-3">
                I needed a web designer, and within hours, I found an expert.
                The process was seamless, and the results were outstanding!
              </p>
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="testimonial-user p-0">
                  <ImageWithBasePath src="assets/img/user/user-05.jpg" alt="img" />
                  <div className="testimonial-info">
                    <h6>Sarah Wilson</h6>
                    <p> Startup Founder</p>
                  </div>
                </div>
                <div className="star-rate m-0 bg-light">
                  <span>
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Testimonial -5 */}
        {/* Testimonial -6 */}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="testimonial-slider-card">
            <div className="testimonial-item">
              <div className="testimonial-icon">
                <i className="ti ti-quote-filled" />
              </div>
              <h5 className="mb-2">Reliable professionals, great results!</h5>
              <p className="mb-3">
                The review system and secure payments make hiring stress-free. I
                always find talented freelancers who deliver quality work!
              </p>
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="testimonial-user p-0">
                  <ImageWithBasePath src="assets/img/user/user-06.jpg" alt="img" />
                  <div className="testimonial-info">
                    <h6>David Lee</h6>
                    <p>Business Owner</p>
                  </div>
                </div>
                <div className="star-rate m-0 bg-light">
                  <span>
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Testimonial -6 */}
        {/* Testimonial -7 */}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="testimonial-slider-card">
            <div className="testimonial-item">
              <div className="testimonial-icon">
                <i className="ti ti-quote-filled" />
              </div>
              <h5 className="mb-2">Affordable and high-quality services!</h5>
              <p className="mb-3">
                I’ve worked with multiple freelancers here, and the quality
                always exceeds my expectations. The pricing is transparent and
                fair!
              </p>
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="testimonial-user p-0">
                  <ImageWithBasePath src="assets/img/user/user-07.jpg" alt="img" />
                  <div className="testimonial-info">
                    <h6>Anna Roberts</h6>
                    <p>United States</p>
                  </div>
                </div>
                <div className="star-rate m-0 bg-light">
                  <span>
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Testimonial -7 */}
        {/* Testimonial -8 */}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="testimonial-slider-card">
            <div className="testimonial-item">
              <div className="testimonial-icon">
                <i className="ti ti-quote-filled" />
              </div>
              <h5 className="mb-2">Top-Notch Graphic Design!</h5>
              <p className="mb-3">
                I wanted a fresh logo for my brand, and the designer nailed it!
                The creative process was seamless. The final logo perfectly
                represents my business!
              </p>
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="testimonial-user p-0">
                  <ImageWithBasePath src="assets/img/user/user-08.jpg" alt="img" />
                  <div className="testimonial-info">
                    <h6>Chris Turner</h6>
                    <p>E-commerce Store Owner</p>
                  </div>
                </div>
                <div className="star-rate m-0 bg-light">
                  <span>
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Testimonial -8 */}
        {/* Testimonial -9 */}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="testimonial-slider-card">
            <div className="testimonial-item">
              <div className="testimonial-icon">
                <i className="ti ti-quote-filled" />
              </div>
              <h5 className="mb-2">Reliable Content Writing Services!</h5>
              <p className="mb-3">
                I needed engaging blog posts for my website, and the writer I
                hired delivered high-quality content that attracted more
                visitors. The articles were well-researched.
              </p>
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="testimonial-user p-0">
                  <ImageWithBasePath src="assets/img/user/user-09.jpg" alt="img" />
                  <div className="testimonial-info">
                    <h6>Jerome Marshall</h6>
                    <p>Marketing Consultant</p>
                  </div>
                </div>
                <div className="star-rate m-0 bg-light">
                  <span>
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Testimonial -9 */}
      </div>
    </div>
  </div>
  {/* /Content */}
</>

  )
}

export default Testimonials