import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Routes } from "../router";

export const ButtonBackHome = () => {
  return (
    <NavLink to={Routes.index.routerPath}>
      <Button size="small" color="secondary">
        Regresar al Inicio
      </Button>
    </NavLink>
  );
};
