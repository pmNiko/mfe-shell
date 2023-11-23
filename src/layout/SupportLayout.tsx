import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CardContainer, NavBar } from "../components";
import { Basiclayout } from "./Basiclayout";

export const SupportLayout = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(!loading);
    }, 1500);
  };

  return (
    <Basiclayout>
      <>
        <NavBar />
        <CardContainer showImage minHeight={"73vh"} title="Página de soporte">
          <Box textAlign="center">
            <Divider sx={{ mx: 4, mb: 3 }} />
            <Typography fontWeight="bold" variant="subtitle2">
              El recurso solicitado no existe o se encuentra en mantenimiento.
            </Typography>
          </Box>

          <Box height={"20vh"} textAlign="center">
            {loading ? (
              <CircularProgress />
            ) : (
              <NavLink to={"/"}>
                <Button size="large" onClick={handleClick}>
                  Regresar al Inicio
                </Button>
              </NavLink>
            )}
          </Box>
        </CardContainer>
      </>
    </Basiclayout>
  );
};
