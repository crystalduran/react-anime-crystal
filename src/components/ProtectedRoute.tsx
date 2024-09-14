import { Navigate } from 'react-router-dom';
import { useProfile } from '../hooks/useProfile';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { selectedProfileId } = useProfile();

  if (!selectedProfileId) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
