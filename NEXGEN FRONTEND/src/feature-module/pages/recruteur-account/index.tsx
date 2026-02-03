import { useState, FormEvent } from "react";
import authService from "../../../services/auth.service";
import dashboardService from "../../../services/dashboard.service";

const RecruteurAccount = () => {
  const user = authService.getUser();

  const [formData, setFormData] = useState({
    last_name: user?.name?.split(" ").slice(-1)[0] || "",
    first_name: user?.name?.split(" ").slice(0, -1).join(" ") || "",
    email: user?.email || "",
    phone: "",
  });

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Password change
  const [passwordData, setPasswordData] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });
  const [changingPassword, setChangingPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (message) setMessage(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
    if (passwordMessage) setPasswordMessage(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    const result = await dashboardService.updateAccountProfile({
      first_name: formData.first_name,
      last_name: formData.last_name,
      phone: formData.phone,
    });

    if (result.success) {
      setMessage({ type: "success", text: "Informations mises à jour avec succès" });
    } else {
      setMessage({ type: "error", text: result.error || "Erreur lors de la mise à jour" });
    }
    setSaving(false);
  };

  const handlePasswordSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPasswordMessage(null);

    if (passwordData.newPassword.length < 6) {
      setPasswordMessage({
        type: "error",
        text: "Le nouveau mot de passe doit contenir au moins 6 caractères",
      });
      return;
    }

    if (passwordData.newPassword !== passwordData.confirm) {
      setPasswordMessage({
        type: "error",
        text: "Les mots de passe ne correspondent pas",
      });
      return;
    }

    setChangingPassword(true);

    const result = await dashboardService.changePassword(
      passwordData.current,
      passwordData.newPassword,
    );

    if (result.success) {
      setPasswordMessage({ type: "success", text: "Mot de passe modifié avec succès" });
      setPasswordData({ current: "", newPassword: "", confirm: "" });

      // Update token if a new one was returned
      if (result.data?.token) {
        localStorage.setItem("nextgen_token", result.data.token);
      }
    } else {
      setPasswordMessage({ type: "error", text: result.error || "Erreur lors du changement" });
    }
    setChangingPassword(false);
  };

  const handleDeactivate = async () => {
    if (
      window.confirm(
        "Êtes-vous sûr de vouloir désactiver votre compte ? Cette action est irréversible."
      )
    ) {
      const result = await dashboardService.deactivateAccount();
      if (result.success) {
        authService.logout();
      }
    }
  };

  return (
    <div className="nex-dash-page">
      <div className="nex-dash-page__header">
        <h1 className="nex-dash-page__title">Mon Compte</h1>
        <p className="nex-dash-page__subtitle">
          Gérez vos informations personnelles et votre sécurité
        </p>
      </div>

      {/* Personal Info */}
      <form onSubmit={handleSubmit}>
        <div className="nex-dash-card">
          <div className="nex-dash-card__header">
            <h3 className="nex-dash-card__title">
              Informations personnelles
            </h3>
          </div>
          <div className="nex-dash-card__body">
            <div className="nex-dash-form__row">
              <div className="nex-dash-form__group">
                <label className="nex-dash-form__label">Nom</label>
                <input
                  className="nex-dash-form__input"
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                />
              </div>
              <div className="nex-dash-form__group">
                <label className="nex-dash-form__label">Prénom</label>
                <input
                  className="nex-dash-form__input"
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                />
              </div>
            </div>
            <div className="nex-dash-form__row">
              <div className="nex-dash-form__group">
                <label className="nex-dash-form__label">Email</label>
                <input
                  className="nex-dash-form__input"
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled
                  placeholder="votre@email.com"
                />
              </div>
              <div className="nex-dash-form__group">
                <label className="nex-dash-form__label">Téléphone</label>
                <input
                  className="nex-dash-form__input"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+352 621 123 456"
                />
              </div>
            </div>

            {message && (
              <div
                className="nex-auth-error"
                style={
                  message.type === "success"
                    ? {
                        background: "rgba(39,174,96,0.06)",
                        borderColor: "rgba(39,174,96,0.2)",
                      }
                    : undefined
                }
              >
                <p
                  style={
                    message.type === "success"
                      ? { color: "#27AE60" }
                      : undefined
                  }
                >
                  {message.text}
                </p>
              </div>
            )}

            <div className="nex-dash-form__actions">
              <button
                type="submit"
                className="nex-dash-btn nex-dash-btn--primary"
                disabled={saving}
              >
                {saving ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Enregistrement...
                  </>
                ) : (
                  "Enregistrer"
                )}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Security */}
      <form onSubmit={handlePasswordSubmit}>
        <div className="nex-dash-card">
          <div className="nex-dash-card__header">
            <h3 className="nex-dash-card__title">Sécurité</h3>
          </div>
          <div className="nex-dash-card__body">
            <div className="nex-dash-form__group">
              <label className="nex-dash-form__label">
                Mot de passe actuel
              </label>
              <input
                className="nex-dash-form__input"
                type="password"
                name="current"
                value={passwordData.current}
                onChange={handlePasswordChange}
                placeholder="Votre mot de passe actuel"
              />
            </div>
            <div className="nex-dash-form__row">
              <div className="nex-dash-form__group">
                <label className="nex-dash-form__label">
                  Nouveau mot de passe
                </label>
                <input
                  className="nex-dash-form__input"
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="Minimum 6 caractères"
                />
              </div>
              <div className="nex-dash-form__group">
                <label className="nex-dash-form__label">Confirmation</label>
                <input
                  className="nex-dash-form__input"
                  type="password"
                  name="confirm"
                  value={passwordData.confirm}
                  onChange={handlePasswordChange}
                  placeholder="Confirmez le mot de passe"
                />
              </div>
            </div>

            {passwordMessage && (
              <div
                className="nex-auth-error"
                style={
                  passwordMessage.type === "success"
                    ? {
                        background: "rgba(39,174,96,0.06)",
                        borderColor: "rgba(39,174,96,0.2)",
                      }
                    : undefined
                }
              >
                <p
                  style={
                    passwordMessage.type === "success"
                      ? { color: "#27AE60" }
                      : undefined
                  }
                >
                  {passwordMessage.text}
                </p>
              </div>
            )}

            <div className="nex-dash-form__actions">
              <button
                type="submit"
                className="nex-dash-btn nex-dash-btn--outline"
                disabled={changingPassword}
              >
                {changingPassword ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Modification...
                  </>
                ) : (
                  "Changer le mot de passe"
                )}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Danger Zone */}
      <div className="nex-dash-card nex-dash-danger">
        <div className="nex-dash-card__header">
          <h3 className="nex-dash-card__title">Zone dangereuse</h3>
        </div>
        <div className="nex-dash-card__body">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: "#6b7280",
              marginBottom: 16,
            }}
          >
            La désactivation de votre compte est irréversible. Toutes vos
            données seront supprimées.
          </p>
          <button
            className="nex-dash-btn nex-dash-btn--danger"
            onClick={handleDeactivate}
          >
            Désactiver mon compte
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruteurAccount;
