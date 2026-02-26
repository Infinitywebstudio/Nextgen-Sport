import { useEffect, useState } from 'react';
import authService from '../services/auth.service';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const validate = async () => {
      const token = authService.getToken();
      if (token) {
        const valid = await authService.validateToken();
        if (!valid) {
          authService.logout();
          return;
        }
      }
      setChecked(true);
    };
    validate();
  }, []);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
