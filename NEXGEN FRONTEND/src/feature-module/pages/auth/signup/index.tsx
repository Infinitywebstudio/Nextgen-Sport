import { useState, FormEvent } from "react";
import ImageWithBasePath from "../../../../core/img";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";
import authService from "../../../../services/auth.service";
import { useGoogleLogin } from "@react-oauth/google";

type PasswordField = "password" | "confirm_password";

const GOOGLE_ENABLED = !!import.meta.env.VITE_GOOGLE_CLIENT_ID;

/* Google sign-up button – only mounted when GOOGLE_ENABLED */
const GoogleSignUpBtn = ({
  accountType,
  loading,
  onError,
}: {
  accountType: "client" | "prestataire";
  loading: boolean;
  onError: (msg: string) => void;
}) => {
  const navigate = useNavigate();
  const [googleLoading, setGoogleLoading] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setGoogleLoading(true);
      onError("");
      try {
        const response = await authService.loginWithGoogle(
          tokenResponse.access_token,
          accountType
        );
        if (response.success) {
          if (accountType === "prestataire") {
            navigate(all_routes.talentDashboard);
          } else {
            navigate(all_routes.recruteurTalents);
          }
        } else {
          onError(response.error || "Échec de l'inscription Google");
        }
      } catch (err) {
        console.error("Google login error:", err);
        onError("Erreur lors de la connexion avec Google");
      } finally {
        setGoogleLoading(false);
      }
    },
    onError: (error) => {
      console.error("Google Login Error:", error);
      onError("Erreur de connexion Google. Veuillez réessayer.");
    },
  });

  return (
    <>
      <div className="nex-auth-divider">
        <span>ou s'inscrire avec</span>
      </div>
      <button
        type="button"
        className="nex-auth-google"
        onClick={() => googleLogin()}
        disabled={googleLoading || loading}
      >
        {googleLoading ? (
          <>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
            Connexion Google...
          </>
        ) : (
          <>
            <ImageWithBasePath
              src="assets/img/icons/google-icon.svg"
              alt="Google"
            />
            Continuer avec Google
          </>
        )}
      </button>
    </>
  );
};

const SignUp = () => {
  const routes = all_routes;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
    account_type: "prestataire" as "client" | "prestataire",
  });

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirm_password: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      !formData.last_name ||
      !formData.first_name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirm_password
    ) {
      setError("Veuillez remplir tous les champs obligatoires");
      return;
    }

    if (!acceptedTerms) {
      setError("Vous devez accepter les conditions d'utilisation");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Veuillez entrer une adresse email valide");
      return;
    }

    if (formData.password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    setLoading(true);
    try {
      const response = await authService.register({
        email: formData.email,
        password: formData.password,
        account_type: formData.account_type,
        first_name: formData.first_name || undefined,
        last_name: formData.last_name || undefined,
        phone: formData.phone || undefined,
      });

      if (response.success) {
        if (formData.account_type === "prestataire") {
          navigate(all_routes.talentDashboard);
        } else {
          navigate(all_routes.recruteurTalents);
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
    <div className="nex-auth-page">
      <div className="nex-auth-container">
        <div className="nex-auth-card">
          <h1 className="nex-auth-title">Inscription</h1>
          <p className="nex-auth-subtitle">
            Créez votre compte pour commencer
          </p>

          <form onSubmit={handleSubmit}>
            {/* Account Type Toggle */}
            <div className="nex-auth-toggle">
              <label>Je suis...</label>
              <div className="nex-auth-toggle__wrap">
                <div
                  className={`nex-auth-toggle__slider ${
                    formData.account_type === "prestataire"
                      ? "nex-auth-toggle__slider--left"
                      : "nex-auth-toggle__slider--right"
                  }`}
                />
                <button
                  type="button"
                  className={`nex-auth-toggle__btn ${
                    formData.account_type === "prestataire"
                      ? "nex-auth-toggle__btn--active"
                      : ""
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, account_type: "prestataire" })
                  }
                  disabled={loading}
                >
                  Talent
                </button>
                <button
                  type="button"
                  className={`nex-auth-toggle__btn ${
                    formData.account_type === "client"
                      ? "nex-auth-toggle__btn--active"
                      : ""
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, account_type: "client" })
                  }
                  disabled={loading}
                >
                  Recruteur
                </button>
              </div>
            </div>

            {/* Nom & Prénom */}
            <div className="nex-auth-row">
              <div className="nex-auth-field">
                <label>Nom *</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="Votre nom"
                />
              </div>
              <div className="nex-auth-field">
                <label>Prénom *</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="Votre prénom"
                />
              </div>
            </div>

            {/* Email */}
            <div className="nex-auth-field">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                placeholder="votre@email.com"
              />
            </div>

            {/* Phone */}
            <div className="nex-auth-field">
              <label>Téléphone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
                placeholder="+352 621 123 456"
              />
            </div>

            {/* Password */}
            <div className="nex-auth-field">
              <label>Mot de passe *</label>
              <div className="nex-auth-field__input-wrap">
                <input
                  type={passwordVisibility.password ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="Minimum 6 caractères"
                />
                <span
                  className="nex-auth-field__icon"
                  onClick={() => togglePasswordVisibility("password")}
                >
                  <i
                    className={`ti ${
                      passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                    }`}
                  />
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="nex-auth-field">
              <label>Confirmer le mot de passe *</label>
              <div className="nex-auth-field__input-wrap">
                <input
                  type={
                    passwordVisibility.confirm_password ? "text" : "password"
                  }
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="Confirmez votre mot de passe"
                />
                <span
                  className="nex-auth-field__icon"
                  onClick={() => togglePasswordVisibility("confirm_password")}
                >
                  <i
                    className={`ti ${
                      passwordVisibility.confirm_password
                        ? "ti-eye"
                        : "ti-eye-off"
                    }`}
                  />
                </span>
              </div>
            </div>

            {/* Terms */}
            <div className="nex-auth-terms">
              <input
                type="checkbox"
                id="acceptTerms"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />
              <label htmlFor="acceptTerms">
                J'accepte les{" "}
                <Link to={routes.termCondition} target="_blank">
                  Conditions d'utilisation
                </Link>{" "}
                et la{" "}
                <Link to={routes.privacyPolicy} target="_blank">
                  Politique de confidentialité
                </Link>
              </label>
            </div>

            {error && (
              <div className="nex-auth-error">
                <p>{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="nex-auth-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Inscription en cours...
                </>
              ) : (
                "Créer mon compte"
              )}
            </button>
          </form>

          {GOOGLE_ENABLED && (
            <GoogleSignUpBtn
              accountType={formData.account_type}
              loading={loading}
              onError={(msg) => setError(msg || null)}
            />
          )}

          <div className="nex-auth-links">
            <p>
              Vous avez déjà un compte ?{" "}
              <Link to={routes.signIn}>Connectez-vous</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
