import { ReactNode, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  // Contenu
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';

  // Style
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  rounded?: boolean;

  // Comportement
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  disabled?: boolean;
  loading?: boolean;

  // Navigation (si c'est un lien)
  href?: string;
  to?: string;
  target?: '_blank' | '_self';

  // HTML
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button = ({
  children,
  icon,
  iconPosition = 'right',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  rounded = false,
  onClick,
  disabled = false,
  loading = false,
  href,
  to,
  target,
  type = 'button',
  className = '',
}: ButtonProps) => {

  // Taille du bouton
  const sizeClasses = {
    sm: 'btn-nextgen-sm',
    md: 'btn-nextgen-md',
    lg: 'btn-nextgen-lg',
    xl: 'btn-nextgen-xl',
  };

  // Variant du bouton
  const variantClasses = {
    primary: 'btn-nextgen-primary',
    secondary: 'btn-nextgen-secondary',
    outline: 'btn-nextgen-outline',
    ghost: 'btn-nextgen-ghost',
  };

  // Classes combinées
  const buttonClasses = [
    'btn-nextgen',
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? 'w-100' : '',
    rounded ? 'btn-nextgen-rounded' : '',
    disabled || loading ? 'disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  // Contenu du bouton
  const buttonContent = (
    <>
      {loading && (
        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
      )}
      {!loading && icon && iconPosition === 'left' && (
        <span className="btn-nextgen-icon me-2">
          <span className="btn-nextgen-icon-main">{icon}</span>
          <span className="btn-nextgen-icon-clone">{icon}</span>
        </span>
      )}
      <span className="btn-nextgen-text">{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <span className="btn-nextgen-icon ms-2">
          <span className="btn-nextgen-icon-main">{icon}</span>
          <span className="btn-nextgen-icon-clone">{icon}</span>
        </span>
      )}
    </>
  );

  // Si c'est un lien externe (href)
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {buttonContent}
      </a>
    );
  }

  // Si c'est un lien React Router (to)
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
        onClick={onClick}
      >
        {buttonContent}
      </Link>
    );
  }

  // Sinon c'est un bouton normal
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
