import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img";
import { all_routes } from "../../../router/all_routes";
import Slider from "react-slick";
import authService from "../../../../services/auth.service";

type PasswordField = "password";

const SignUp = () => {
  const routes = all_routes;
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    account_type: "client" as "client" | "prestataire",
    first_name: "",
    last_name: "",
    phone: "",
  });

  // UI state
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const loginslideroption = {
    dots: true,
    nav: false,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    draggable: true,
    tochMove: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  // Handle form submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.email || !formData.password || !formData.account_type) {
      setError("Veuillez remplir tous les champs obligatoires");
      return;
    }

    if (!acceptedTerms) {
      setError("Vous devez accepter les conditions d'utilisation");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Veuillez entrer une adresse email valide");
      return;
    }

    // Password validation
    if (formData.password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }

    setLoading(true);

    try {
      // Call auth service
      const response = await authService.register({
        email: formData.email,
        password: formData.password,
        account_type: formData.account_type,
        first_name: formData.first_name || undefined,
        last_name: formData.last_name || undefined,
        phone: formData.phone || undefined,
      });

      if (response.success) {
        // User is auto-logged in by authService.register()
        // Redirect to appropriate dashboard
        if (authService.isClient()) {
          navigate(all_routes.buyerDashboard);
        } else if (authService.isPrestataire()) {
          navigate(all_routes.SellerDashboard);
        } else {
          navigate(all_routes.home);
        }
      } else {
        setError(response.error || "Échec de l'inscription");
      }
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
      console.error("Register error:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <>
        {/* Sign Up */}
        <div className="row gx-0">
          {/* Banner Content */}
          <div className="col-lg-6">
            <div className="authentication-wrapper">
              <div className="authentication-content">
                <div className="login-carousel ">
                  <Slider {...loginslideroption}>
                    <div className="login-slider">
                      <ImageWithBasePath
                        src="assets/img/login-card-01.svg"
                        className="img-fluid"
                        alt="img"
                      />
                      <h2>Besoin d'un service ?</h2>
                      <p>Inscrivez-vous en tant que Client</p>
                    </div>
                    <div className="login-slider">
                      <ImageWithBasePath
                        src="assets/img/login-card-02.svg"
                        className="img-fluid"
                        alt="img"
                      />
                      <h2>Vous êtes prestataire ?</h2>
                      <p>Inscrivez-vous pour proposer vos services</p>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="login-bg">
                <ImageWithBasePath
                  src="assets/img/bg/shape-01.png"
                  alt="img"
                  className="shape-01"
                />
                <ImageWithBasePath
                  src="assets/img/bg/shape-02.png"
                  alt="img"
                  className="shape-02"
                />
                <ImageWithBasePath
                  src="assets/img/bg/shape-03.png"
                  alt="img"
                  className="shape-03"
                />
                <ImageWithBasePath
                  src="assets/img/bg/shape-04.png"
                  alt="img"
                  className="shape-04"
                />
                <ImageWithBasePath
                  src="assets/img/bg/shape-05.png"
                  alt="img"
                  className="shape-05"
                />
                <ImageWithBasePath
                  src="assets/img/bg/shape-06.png"
                  alt="img"
                  className="shape-06"
                />
                <ImageWithBasePath
                  src="assets/img/bg/shape-07.png"
                  alt="img"
                  className="shape-07"
                />
              </div>
            </div>
          </div>
          {/* /Banner Content */}
          <>
            {/* Register Content */}
            <div className="col-lg-6">
              <div className="login-wrapper">
                <div className="login-content">
                  <form>
                    <div className="login-userset">
                      <div className="login-logo">
                        <ImageWithBasePath src="assets/img/logo.svg" alt="img" />
                      </div>
                      <div className="login-card">
                        <div className="login-heading">
                          <h3>Hi, Welcome!</h3>
                          <p>Register to get access to DreamGigs</p>
                        </div>
                        <div>
                          <label className="form-label">Name</label>
                          <div className="form-wrap form-focus">
                            <span className="form-icon">
                              <i className="feather icon-user" />
                            </span>
                            <input
                              type="text"
                              className="form-control floating"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="form-label">Email</label>
                          <div className="form-wrap form-focus">
                            <span className="form-icon">
                              <i className="feather icon-mail" />
                            </span>
                            <input
                              type="email"
                              className="form-control floating"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="form-label">Password</label>
                          <div className="form-wrap form-focus pass-group">
                            <span className="form-icon">
                            <i
                            className={`ti toggle-passwords ${passwordVisibility.password
                              ? "ti-eye"
                              : "ti-eye-off"
                              }`}
                            onClick={() =>
                              togglePasswordVisibility("password")
                            }
                          ></i>
                            </span>
                         
                        <input
                            type={
                              passwordVisibility.password
                                ? "text"
                                : "password"
                            }
                            className="pass-input form-control"
                          />
                         
                        </div>
                        </div>
                        <div className="form-wrap">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              By login you agree to our{" "}
                              <Link
                                to={routes.termCondition}
                                className="terms-links"
                              >
                                Terms of Use
                              </Link>{" "}
                              and{" "}
                              <Link
                                to={routes.privacyPolicy}
                                className="terms-links"
                              >
                                Privacy Policy
                              </Link>
                            </label>
                          </div>
                        </div>
                        <Link to={routes.signIn} type="submit" className="btn btn-primary">
                          Sign Up
                        </Link>
                        <div className="login-or">
                          <span className="span-or">or sign up with</span>
                        </div>
                        <ul className="login-social-link">
                          <li>
                            <Link to="#">
                              <ImageWithBasePath
                                src="assets/img/icons/google-icon.svg"
                                alt="Facebook"
                              />{" "}
                              Google
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <ImageWithBasePath src="assets/img/icons/fb.svg" alt="Google" />{" "}
                              Facebook
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="acc-in">
                        <p>
                          Already have an account?{" "}
                          <Link to={routes.signIn}>Sign In</Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /Register Content */}
          </>
        </div>
        {/* /Sign Up */}
      </>
    </div>
  );
};

export default SignUp;
