import { useRef } from 'react';
import type { PortfolioImage } from '../../../../services/dashboard.service';
import dashboardService from '../../../../services/dashboard.service';

interface PortfolioGridProps {
  gallery: PortfolioImage[];
  onGalleryUpdate: (gallery: PortfolioImage[]) => void;
}

const PortfolioGrid = ({ gallery, onGalleryUpdate }: PortfolioGridProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const result = await dashboardService.uploadPortfolioImage(file);
    if (result.success && result.data?.image) {
      onGalleryUpdate([result.data.image, ...gallery]);
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDelete = async (imageId: number) => {
    const result = await dashboardService.deletePortfolioImage(imageId);
    if (result.success) {
      onGalleryUpdate(gallery.filter(img => img.id !== imageId));
    }
  };

  return (
    <div className="nex-dash-card td-portfolio-card">
      <div className="nex-dash-card__header">
        <h3 className="nex-dash-card__title"><i className="ti ti-photo" /> Portfolio</h3>
      </div>
      <div className="nex-dash-card__body">
        <div className="td-portfolio-grid">
          {/* Add new item */}
          <div
            className="td-portfolio-add"
            onClick={() => fileInputRef.current?.click()}
          >
            <i className="ti ti-plus" />
            <p>Ajouter</p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleUpload}
            />
          </div>

          {/* Gallery items */}
          {gallery.map(image => (
            <div className="td-portfolio-item" key={image.id}>
              <div className="td-portfolio-item__thumb">
                <img src={image.thumbnail || image.url} alt={image.title || 'Portfolio'} />
                <div className="td-portfolio-item__overlay" onClick={() => handleDelete(image.id)}>
                  <i className="ti ti-trash" />
                </div>
              </div>
              {image.title && <p>{image.title}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;
