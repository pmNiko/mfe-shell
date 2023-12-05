import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import { AuthForm, CardContainer } from "../components";
import { Paths } from "../router/routes";
import { useGlobalStore } from "../store/useGlobalStore";

export default () => {
  const isLogged = useGlobalStore((state) => state.isLogged);

  if (isLogged) return <Navigate to={Paths.INDEX} replace />;

  return (
    <Box height={"80vh"}>
      <CardContainer lg={3} minHeight="" height="60vh">
        <AuthForm />
      </CardContainer>
    </Box>
  );
};
