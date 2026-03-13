import { useState, useEffect, FormEvent } from "react";
import dashboardService, { type TalentProfileData } from "../../../services/dashboard.service";
import { API_ENDPOINTS } from "../../../config/api.config";

interface SportCategory {
  id: number;
  name: string;
  slug: string;
}

const TalentMyProfile = () => {
  const [formData, setFormData] = useState<TalentProfileData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    sport: "",
    position: "",
    bio: "",
    location: "",
    height: "",
    weight: "",
    skills: [],
  });

  const [sports, setSports] = useState<SportCategory[]>([]);
  const [skillInput, setSkillInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Load profile and sports on mount
  useEffect(() => {
    const load = async () => {
      const [profileResult, sportsResponse] = await Promise.all([
        dashboardService.getTalentProfile(),
        fetch(API_ENDPOINTS.WP.SPORTS).then(r => r.ok ? r.json() : []).catch(() => []),
      ]);

      if (profileResult.success && profileResult.data) {
        setFormData(profileResult.data);
      }

      if (Array.isArray(sportsResponse)) {
        setSports(sportsResponse.map((s: SportCategory) => ({
          id: s.id,
          name: s.name,
          slug: s.slug,
        })));
      }

      setLoading(false);
    };
    load();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (message) setMessage(null);
  };

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !formData.skills.includes(trimmed)) {
      setFormData({ ...formData, skills: [...formData.skills, trimmed] });
    }
    setSkillInput("");
  };

  const removeSkill = (skill: string) => {
    setFormData({ ...formData, skills: formData.skills.filter((s) => s !== skill) });
  };

  const handleSkillKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    const result = await dashboardService.updateTalentProfile({
      first_name: formData.first_name,
      last_name: formData.last_name,
      phone: formData.phone,
      sport: formData.sport,
      position: formData.position,
      bio: formData.bio,
      location: formData.location,
      height: formData.height,
      weight: formData.weight,
      skills: formData.skills,
      portfolio_urls: formData.portfolio_urls,
    });

    if (result.success) {
      setMessage({ type: "success", text: "Profil enregistré avec succès" });
    } else {
      setMessage({ type: "error", text: result.error || "Erreur lors de la sauvegarde" });
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="nex-dash-page">
        <div className="nex-dash-page__header">
          <h1 className="nex-dash-page__title">Mon Profil</h1>
        </div>
        <div className="nex-dash-card">
          <div className="nex-dash-card__body" style={{ textAlign: "center", padding: 40 }}>
            <span className="spinner-border" role="status" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="nex-dash-page">
      <div className="nex-dash-page__header">
        <h1 className="nex-dash-page__title">Mon Profil</h1>
        <p className="nex-dash-page__subtitle">
          Gérez vos informations personnelles et sportives
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Personal Info */}
        <div className="nex-dash-card">
          <div className="nex-dash-card__header">
            <h3 className="nex-dash-card__title">Informations personnelles</h3>
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
            <div className="nex-dash-form__group">
              <label className="nex-dash-form__label">Localisation</label>
              <input
                className="nex-dash-form__input"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Ex: Luxembourg, Paris..."
              />
            </div>
          </div>
        </div>

        {/* Sport & Discipline */}
        <div className="nex-dash-card">
          <div className="nex-dash-card__header">
            <h3 className="nex-dash-card__title">Sport & Discipline</h3>
          </div>
          <div className="nex-dash-card__body">
            <div className="nex-dash-form__row">
              <div className="nex-dash-form__group">
                <label className="nex-dash-form__label">Sport</label>
                <select
                  className="nex-dash-form__input"
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                >
                  <option value="">Sélectionnez un sport</option>
                  {sports.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div className="nex-dash-form__group">
                <label className="nex-dash-form__label">Discipline / Poste</label>
                <input
                  className="nex-dash-form__input"
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Ex: Attaquant, 100m, Poids plume..."
                />
              </div>
            </div>
            <div className="nex-dash-form__row">
              <div className="nex-dash-form__group">
                <label className="nex-dash-form__label">Taille (cm)</label>
                <input
                  className="nex-dash-form__input"
                  type="text"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="Ex: 185"
                />
              </div>
              <div className="nex-dash-form__group">
                <label className="nex-dash-form__label">Poids (kg)</label>
                <input
                  className="nex-dash-form__input"
                  type="text"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="Ex: 78"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="nex-dash-card">
          <div className="nex-dash-card__header">
            <h3 className="nex-dash-card__title">Bio</h3>
          </div>
          <div className="nex-dash-card__body">
            <div className="nex-dash-form__group">
              <label className="nex-dash-form__label">Décrivez-vous en quelques lignes</label>
              <textarea
                className="nex-dash-form__textarea"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Parlez de votre parcours, vos objectifs, ce qui vous distingue..."
                rows={5}
              />
            </div>
          </div>
        </div>

        {/* Video URLs */}
        <div className="nex-dash-card">
          <div className="nex-dash-card__header">
            <h3 className="nex-dash-card__title">Vidéos Highlights</h3>
          </div>
          <div className="nex-dash-card__body">
            <div className="nex-dash-form__group">
              <label className="nex-dash-form__label">
                URLs YouTube (une par ligne)
              </label>
              <textarea
                className="nex-dash-form__textarea"
                name="portfolio_urls"
                value={formData.portfolio_urls ?? ''}
                onChange={handleChange}
                placeholder={"https://www.youtube.com/watch?v=...\nhttps://youtu.be/..."}
                rows={4}
              />
              <small className="text-muted" style={{ marginTop: 4, display: 'block' }}>
                Formats acceptés : youtube.com/watch, youtu.be, youtube.com/shorts
              </small>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="nex-dash-card">
          <div className="nex-dash-card__header">
            <h3 className="nex-dash-card__title">Compétences</h3>
          </div>
          <div className="nex-dash-card__body">
            <div className="nex-dash-form__group">
              <label className="nex-dash-form__label">
                Ajoutez vos compétences (appuyez sur Entrée)
              </label>
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  className="nex-dash-form__input"
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={handleSkillKeyDown}
                  placeholder="Ex: Vitesse, Leadership, Endurance..."
                />
                <button
                  type="button"
                  className="nex-dash-btn nex-dash-btn--outline"
                  onClick={addSkill}
                >
                  Ajouter
                </button>
              </div>
            </div>
            {formData.skills.length > 0 && (
              <div className="nex-dash-tags">
                {formData.skills.map((skill) => (
                  <span key={skill} className="nex-dash-tags__tag">
                    {skill}
                    <button type="button" onClick={() => removeSkill(skill)}>
                      <i className="ti ti-x" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Message */}
        {message && (
          <div
            className="nex-auth-error"
            style={
              message.type === "success"
                ? { background: "rgba(39,174,96,0.06)", borderColor: "rgba(39,174,96,0.2)" }
                : undefined
            }
          >
            <p style={message.type === "success" ? { color: "#27AE60" } : undefined}>
              {message.text}
            </p>
          </div>
        )}

        {/* Submit */}
        <div className="nex-dash-form__actions">
          <button
            type="submit"
            className="nex-dash-btn nex-dash-btn--primary"
            disabled={saving}
          >
            {saving ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                Enregistrement...
              </>
            ) : (
              "Enregistrer"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TalentMyProfile;
