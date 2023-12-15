import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import { AuthForm, CardContainer } from "../components";

import { useGlobalStore } from "../store/useGlobalStore";
import { Routes } from "../router";

export default () => {
  const isLogged = useGlobalStore((state) => state.isLogged);

  if (isLogged) return <Navigate to={Routes.index.routerPath} replace />;

  return (
    <Box height={"80vh"}>
      <CardContainer lg={3} minHeight="" height="60vh">
        <AuthForm />
      </CardContainer>
    </Box>
  );
};
