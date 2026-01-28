import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img";
import { all_routes } from "../../../router/all_routes";
import Slider from "react-slick";
import authService from "../../../../services/auth.service";
import { useGoogleLogin } from "@react-oauth/google";

type PasswordField = "password" | "confirm_password";

const SignUp = () => {
  const routes = all_routes;
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
    account_type: "client" as "client" | "prestataire",
  });


  // UI state
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirm_password: false,
  });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Google Login
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setGoogleLoading(true);
      setError(null);

      try {
        // Appeler l'API WordPress pour créer/connecter l'utilisateur
        // Le service auth récupère les infos Google automatiquement
        const response = await authService.loginWithGoogle(
          tokenResponse.access_token,
          formData.account_type
        );

        if (response.success) {
          // Redirect based on account type
          if (formData.account_type === 'prestataire') {
            navigate(all_routes.SellerDashboard);
          } else {
            // Clients → Page des demandes
            navigate(all_routes.buyerRequests);
          }
        } else {
          setError(response.error || "Échec de l'inscription Google");
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
    if (!formData.last_name || !formData.first_name || !formData.email || !formData.phone || !formData.password || !formData.confirm_password) {
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

    // Confirm password validation
    if (formData.password !== formData.confirm_password) {
      setError("Les mots de passe ne correspondent pas");
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
        // Redirect based on account type
        if (formData.account_type === 'prestataire') {
          // Prestataires → Seller Dashboard
          navigate(all_routes.SellerDashboard);
        } else {
          // Clients → Page des demandes
          navigate(all_routes.buyerRequests);
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
                  <form onSubmit={handleSubmit}>
                    <div className="login-userset">
                      <div className="login-card">
                        <div className="login-heading">
                          <h3>Bienvenue sur NEXTGEN !</h3>
                          <p>Créez votre compte pour commencer</p>
                        </div>

                        {/* Account Type Toggle */}
                        <div style={{ marginBottom: '20px' }}>
                          <label className="form-label">Je suis...</label>
                          <div style={{
                            position: 'relative',
                            display: 'flex',
                            backgroundColor: '#f1f5f9',
                            borderRadius: '8px',
                            padding: '4px',
                          }}>
                            {/* Sliding background */}
                            <div style={{
                              position: 'absolute',
                              top: '4px',
                              left: formData.account_type === 'client' ? '4px' : 'calc(50% + 2px)',
                              width: 'calc(50% - 6px)',
                              height: 'calc(100% - 8px)',
                              backgroundColor: '#FF6961',
                              borderRadius: '6px',
                              transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            }} />
                            <button
                              type="button"
                              onClick={() => setFormData({ ...formData, account_type: 'client' })}
                              disabled={loading}
                              style={{
                                flex: 1,
                                padding: '10px 16px',
                                border: 'none',
                                borderRadius: '6px',
                                backgroundColor: 'transparent',
                                color: formData.account_type === 'client' ? '#fff' : '#64748b',
                                fontWeight: 500,
                                fontSize: '14px',
                                cursor: 'pointer',
                                position: 'relative',
                                zIndex: 1,
                                transition: 'color 0.3s ease',
                              }}
                            >
                              Client
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData({ ...formData, account_type: 'prestataire' })}
                              disabled={loading}
                              style={{
                                flex: 1,
                                padding: '10px 16px',
                                border: 'none',
                                borderRadius: '6px',
                                backgroundColor: 'transparent',
                                color: formData.account_type === 'prestataire' ? '#fff' : '#64748b',
                                fontWeight: 500,
                                fontSize: '14px',
                                cursor: 'pointer',
                                position: 'relative',
                                zIndex: 1,
                                transition: 'color 0.3s ease',
                              }}
                            >
                              Prestataire
                            </button>
                          </div>
                        </div>

                        {/* Nom & Prénom Row */}
                        <div className="row">
                          <div className="col-md-6">
                            <div>
                              <label className="form-label">Nom *</label>
                              <div className="form-wrap form-focus">
                                <span className="form-icon">
                                  <i className="feather icon-user" />
                                </span>
                                <input
                                  type="text"
                                  name="last_name"
                                  className="form-control floating"
                                  value={formData.last_name}
                                  onChange={handleChange}
                                  disabled={loading}
                                  placeholder="Votre nom"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div>
                              <label className="form-label">Prénom *</label>
                              <div className="form-wrap form-focus">
                                <span className="form-icon">
                                  <i className="feather icon-user" />
                                </span>
                                <input
                                  type="text"
                                  name="first_name"
                                  className="form-control floating"
                                  value={formData.first_name}
                                  onChange={handleChange}
                                  disabled={loading}
                                  placeholder="Votre prénom"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Email Field */}
                        <div>
                          <label className="form-label">Email *</label>
                          <div className="form-wrap form-focus">
                            <span className="form-icon">
                              <i className="feather icon-mail" />
                            </span>
                            <input
                              type="email"
                              name="email"
                              className="form-control floating"
                              value={formData.email}
                              onChange={handleChange}
                              disabled={loading}
                              placeholder="votre@email.com"
                            />
                          </div>
                        </div>

                        {/* Phone Field */}
                        <div>
                          <label className="form-label">Téléphone *</label>
                          <div className="form-wrap form-focus">
                            <span className="form-icon">
                              <i className="feather icon-phone" />
                            </span>
                            <input
                              type="tel"
                              name="phone"
                              className="form-control floating"
                              value={formData.phone}
                              onChange={handleChange}
                              disabled={loading}
                              placeholder="+352 621 123 456"
                            />
                          </div>
                        </div>

                        {/* Password Field */}
                        <div>
                          <label className="form-label">Mot de passe *</label>
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
                              placeholder="Minimum 6 caractères"
                            />
                          </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                          <label className="form-label">Confirmer le mot de passe *</label>
                          <div className="form-wrap form-focus pass-group">
                            <span className="form-icon">
                              <i
                                className={`ti toggle-passwords ${
                                  passwordVisibility.confirm_password
                                    ? "ti-eye"
                                    : "ti-eye-off"
                                }`}
                                onClick={() =>
                                  togglePasswordVisibility("confirm_password")
                                }
                              ></i>
                            </span>
                            <input
                              type={
                                passwordVisibility.confirm_password
                                  ? "text"
                                  : "password"
                              }
                              name="confirm_password"
                              className="pass-input form-control"
                              value={formData.confirm_password}
                              onChange={handleChange}
                              disabled={loading}
                              placeholder="Confirmez votre mot de passe"
                            />
                          </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="form-wrap">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={acceptedTerms}
                              onChange={(e) => setAcceptedTerms(e.target.checked)}
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              J'accepte les{" "}
                              <Link
                                to={routes.termCondition}
                                className="terms-links"
                                target="_blank"
                              >
                                Conditions d'utilisation
                              </Link>{" "}
                              et la{" "}
                              <Link
                                to={routes.privacyPolicy}
                                className="terms-links"
                                target="_blank"
                              >
                                Politique de confidentialité
                              </Link>
                            </label>
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
                              Inscription en cours...
                            </>
                          ) : (
                            'Créer mon compte'
                          )}
                        </button>

                        <div className="login-or">
                          <span className="span-or">ou s'inscrire avec</span>
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
                      </div>
                      <div className="acc-in">
                        <p>
                          Vous avez déjà un compte ?{" "}
                          <Link to={routes.signIn}>Connectez-vous</Link>
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
