import { Navigate } from "react-router-dom";
import { useGlobalStore } from "../store/useGlobalStore";
import { Paths } from "./RouterShell";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLogged = useGlobalStore((state) => state.isLogged);

  if (!isLogged) return <Navigate to={`/${Paths.AUTH}`} replace />;

  return children;
};
