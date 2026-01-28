import { useState, FormEvent } from "react";
import ImageWithBasePath from "../../../../core/img";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";
import Slider from "react-slick";
import authService from "../../../../services/auth.service";
import { useGoogleLogin } from "@react-oauth/google";

type PasswordField = "password";

const SignIn = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    username: "", // WordPress utilise 'username' (peut être email ou username)
    password: "",
  });

  // UI state
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
  });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Google Login
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setGoogleLoading(true);
      setError(null);

      try {
        // Appeler l'API WordPress pour connecter l'utilisateur via Google
        const response = await authService.loginWithGoogle(
          tokenResponse.access_token,
          'client' // Par défaut client pour la connexion
        );

        if (response.success) {
          // Redirect based on account type
          if (authService.isPrestataire()) {
            navigate(all_routes.SellerDashboard);
          } else {
            // Clients → Page des demandes
            navigate(all_routes.buyerRequests);
          }
        } else {
          setError(response.error || "Échec de la connexion Google");
        }
      } catch (err) {
        console.error('Google login error:', err);
        setError("Erreur lors de la connexion avec Google");
      } finally {
        setGoogleLoading(false);
      }
    },
    onError: (error) => {
      console.error('Google Login Error:', error);
      setError("Erreur de connexion Google. Veuillez réessayer.");
    },
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    if (!formData.username || !formData.password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    setLoading(true);

    try {
      // Call auth service
      const response = await authService.login({
        username: formData.username,
        password: formData.password,
      });

      if (response.success) {
        // Redirect based on account type
        if (authService.isPrestataire()) {
          // Prestataires → Seller Dashboard
          navigate(all_routes.SellerDashboard);
        } else if (authService.isAdmin()) {
          // Admins → Seller Dashboard
          navigate(all_routes.SellerDashboard);
        } else {
          // Clients → Page des demandes
          navigate(all_routes.buyerRequests);
        }
      } else {
        setError(response.error || "Échec de la connexion");
      }
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };


  const loginslideroption = {
    dots: true,
    nav: false,
    arrows: false,
    infinite: true,
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
  return (
    <div>
      <>
        {/* Sign In */}
        <div className="row gx-0">
          {/* Banner Content */}
          <div className="col-lg-6">
            <div className="authentication-wrapper">
              <div className="authentication-content">
                <div className="login-carousel">
                  <Slider {...loginslideroption}>
                    <div className="login-slider">
                      <ImageWithBasePath
                        src="assets/img/login-card-01.svg"
                        className="img-fluid"
                        alt="img"
                      />
                      <h2>Besoin d'un service ?</h2>
                      <p>Parcourez plus de 900 services disponibles</p>
                    </div>
                    <div className="login-slider">
                      <ImageWithBasePath
                        src="assets/img/login-card-02.svg"
                        className="img-fluid"
                        alt="img"
                      />
                      <h2>Vous êtes prestataire ?</h2>
                      <p>Proposez vos services à des milliers de clients</p>
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
     
            {/* login Content */}
            <div className="col-lg-6">
              <div className="login-wrapper">
                <div className="login-content">
                  <form onSubmit={handleSubmit}>
                    <div className="login-userset">
                      <div className="login-logo">
                        <ImageWithBasePath src="assets/img/logo.svg" alt="img" />
                      </div>
                      <div className="login-card">
                        <div className="login-heading">
                          <h3>Bienvenue sur NEXTGEN !</h3>
                          <p>Connectez-vous pour accéder à votre compte</p>
                        </div>

                        {/* Email Field */}
                        <div>
                          <label className="form-label">Email</label>
                          <div className="form-wrap form-focus">
                            <span className="form-icon">
                              <i className="feather icon-mail" />
                            </span>
                            <input
                              type="email"
                              name="username"
                              className="form-control floating"
                              value={formData.username}
                              onChange={handleChange}
                              disabled={loading}
                              placeholder="votre@email.com"
                            />
                          </div>
                        </div>

                        {/* Password Field */}
                        <div>
                          <label className="form-label">Mot de passe</label>
                          <div className="form-wrap form-focus pass-group">
                            <span className="form-icon">
                              <i
                                className={`ti toggle-passwords ${
                                  passwordVisibility.password
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
                              name="password"
                              className="pass-input form-control"
                              value={formData.password}
                              onChange={handleChange}
                              disabled={loading}
                              placeholder="Votre mot de passe"
                            />
                          </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                          <div className="form-wrap mantadory-info">
                            <p style={{ color: '#dc3545' }}>
                              <i className="feather icon-alert-triangle" />
                              {error}
                            </p>
                          </div>
                        )}

                        {/* Submit Button */}
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Connexion...
                            </>
                          ) : (
                            'Se connecter'
                          )}
                        </button>
                        <div className="login-or">
                          <span className="span-or">ou continuer avec</span>
                        </div>
                        <ul className="login-social-link">
                          <li>
                            <button
                              type="button"
                              onClick={() => googleLogin()}
                              disabled={googleLoading || loading}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                width: '100%',
                                padding: '12px 20px',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                backgroundColor: '#fff',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#374151',
                                transition: 'all 0.2s',
                              }}
                            >
                              {googleLoading ? (
                                <>
                                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                  Connexion Google...
                                </>
                              ) : (
                                <>
                                  <ImageWithBasePath
                                    src="assets/img/icons/google-icon.svg"
                                    alt="Google"
                                    style={{ width: '20px', height: '20px' }}
                                  />
                                  Continuer avec Google
                                </>
                              )}
                            </button>
                          </li>
                        </ul>

                        {/* Links */}
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                          <p style={{ marginBottom: '8px' }}>
                            <Link to={all_routes.forgotPassword} style={{ color: '#FF6961' }}>
                              Mot de passe oublié ?
                            </Link>
                          </p>
                          <p style={{ margin: 0 }}>
                            Pas de compte ?{" "}
                            <Link to={all_routes.signUp}>S'inscrire</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /Login Content */}
          
        </div>
        {/* /Sign In */}
      </>
    </div>
  );
};

export default SignIn;
