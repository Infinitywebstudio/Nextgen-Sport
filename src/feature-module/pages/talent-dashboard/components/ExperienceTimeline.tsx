import { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import dashboardService, { type ExperienceItem } from '../../../../services/dashboard.service';

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
  loading: boolean;
  onUpdate: (updated: ExperienceItem[]) => void;
}

const EMPTY_FORM = { club: '', role: '', period: '', description: '', tags: '' };

const ExperienceTimeline = ({ experiences, loading, onUpdate }: ExperienceTimelineProps) => {
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const openAdd = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setShowModal(true);
  };

  const openEdit = (exp: ExperienceItem) => {
    setEditingId(exp.id);
    setForm({
      club: exp.club,
      role: exp.role,
      period: exp.period,
      description: exp.description,
      tags: exp.tags.join(', '),
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!form.club.trim() || !form.role.trim()) return;
    setSaving(true);

    const payload = {
      ...(editingId ? { id: editingId } : {}),
      club: form.club.trim(),
      role: form.role.trim(),
      period: form.period.trim(),
      description: form.description.trim(),
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
    };

    const result = await dashboardService.addExperience(payload);
    if (result.success && result.data) {
      const saved = result.data.experience;
      if (editingId) {
        onUpdate(experiences.map(e => (e.id === editingId ? saved : e)));
      } else {
        onUpdate([...experiences, saved]);
      }
      setShowModal(false);
    }
    setSaving(false);
  };

  const handleDelete = async (expId: string) => {
    setDeletingId(expId);
    const result = await dashboardService.deleteExperience(expId);
    if (result.success) {
      onUpdate(experiences.filter(e => e.id !== expId));
    }
    setDeletingId(null);
  };

  return (
    <div className="nex-dash-card td-experience-card">
      <div className="nex-dash-card__header">
        <h3 className="nex-dash-card__title"><i className="ti ti-timeline" /> Parcours sportif</h3>
        <button className="nex-dash-btn nex-dash-btn--outline nex-dash-btn--sm" onClick={openAdd}>
          <i className="ti ti-plus" /> Ajouter
        </button>
      </div>
      <div className="nex-dash-card__body">
        {loading ? (
          <div style={{ textAlign: 'center', padding: 20 }}>
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
          </div>
        ) : experiences.length === 0 ? (
          <p className="text-muted" style={{ textAlign: 'center', padding: 20 }}>
            Ajoutez votre première expérience sportive pour enrichir votre profil.
          </p>
        ) : (
          <div className="td-timeline">
            {experiences.map(exp => (
              <div className="td-timeline__item" key={exp.id}>
                <div className="td-timeline__dot" />
                <div className="td-timeline__content">
                  <h4>{exp.club}</h4>
                  <p className="td-timeline__period">{exp.role} &middot; {exp.period}</p>
                  <p>{exp.description}</p>
                  <div className="td-timeline__tags">
                    {exp.tags.map((tag, i) => (
                      <span className="td-timeline__tag" key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="td-timeline__actions">
                  <button
                    className="td-timeline__action-btn"
                    title="Modifier"
                    onClick={() => openEdit(exp)}
                  >
                    <i className="ti ti-pencil" />
                  </button>
                  <button
                    className="td-timeline__action-btn td-timeline__action-btn--danger"
                    title="Supprimer"
                    disabled={deletingId === exp.id}
                    onClick={() => handleDelete(exp.id)}
                  >
                    {deletingId === exp.id
                      ? <span className="spinner-border spinner-border-sm" />
                      : <i className="ti ti-trash" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Ajout / Édition */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editingId ? 'Modifier l\'expérience' : 'Ajouter une expérience'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Club / Organisation</Form.Label>
            <Form.Control
              value={form.club}
              onChange={e => setForm({ ...form, club: e.target.value })}
              placeholder="Ex: FC Lyon, US Dakar..."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rôle / Poste</Form.Label>
            <Form.Control
              value={form.role}
              onChange={e => setForm({ ...form, role: e.target.value })}
              placeholder="Ex: Attaquant, Gardien..."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Période</Form.Label>
            <Form.Control
              value={form.period}
              onChange={e => setForm({ ...form, period: e.target.value })}
              placeholder="Ex: 2022 - 2024"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              placeholder="Décrivez votre expérience..."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tags (séparés par des virgules)</Form.Label>
            <Form.Control
              value={form.tags}
              onChange={e => setForm({ ...form, tags: e.target.value })}
              placeholder="Ex: Compétition, U19, Champion régional"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button className="nex-dash-btn nex-dash-btn--outline" onClick={() => setShowModal(false)}>
            Annuler
          </button>
          <button
            className="nex-dash-btn nex-dash-btn--primary"
            onClick={handleSave}
            disabled={saving || !form.club.trim() || !form.role.trim()}
          >
            {saving ? (
              <><span className="spinner-border spinner-border-sm" /> Enregistrement...</>
            ) : (
              editingId ? 'Modifier' : 'Ajouter'
            )}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExperienceTimeline;
