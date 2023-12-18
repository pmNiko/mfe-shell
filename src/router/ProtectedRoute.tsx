import { Navigate } from "react-router-dom";
import { Routes } from ".";
import useAuthStore, { AuthStore } from "../externals/useAuthStore";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLogged = useAuthStore((state: AuthStore) => state.isLogged);

  if (!isLogged)
    return <Navigate to={Routes.auth.children.account.absolutePath} replace />;

  return children;
};
