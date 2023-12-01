import useUser from "hooks/useUser";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  const user = useUser();

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default AuthGuard;
