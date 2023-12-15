import { Navigate } from "react-router-dom";
import { useGlobalStore } from "../store/useGlobalStore";
import { Routes } from ".";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLogged = useGlobalStore((state) => state.isLogged);

  if (!isLogged)
    return <Navigate to={Routes.auth.children.account.absolutePath} replace />;

  return children;
};
