import { Avatar, Box, Button, Icon } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CustomModal } from ".";
import { Routes } from "../router";
import useAuthStore, { AuthStore } from "../externals/useAuthStore";
import Login from "mf-auth/Login";
import Profile from "mf-auth/Profile";

export const NavBar = ({ children }: { children?: JSX.Element }) => {
  const [isAuthPath, setIsAuthPath] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogged = useAuthStore((state: AuthStore) => state.isLogged);
  const userData = useAuthStore((state: AuthStore) => state.userData);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => setOpenModal(false);

  useEffect(() => {
    if (location.pathname.match(Routes.auth.routerPath)) {
      setIsAuthPath(true);
      closeModal();
    } else {
      setIsAuthPath(false);
    }
  }, [location.pathname]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "#2ea3f2" }}>
        <Toolbar>
          <menu>{children}</menu>

          <NavLink to={Routes.index.routerPath}>
            <Button sx={{ ml: -1, color: "white" }}>
              <Icon>home</Icon>
            </Button>
          </NavLink>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="right"
            marginRight={1}
          >
            <Box display="flex" justifyContent="end" gap={1}>
              <Typography fontSize={15} pt={1.3} fontWeight="bold">
                App Shell
              </Typography>

              <Button onClick={() => setOpenModal(true)} disabled={isAuthPath}>
                {isLogged ? (
                  <Avatar
                    sx={{ height: 30, width: 30 }}
                    alt={userData?.email + ""}
                    src={userData?.photo + ""}
                  />
                ) : (
                  <Avatar
                    sx={{ height: 30, width: 30 }}
                    alt="Login"
                    src={"/avatar.svg"}
                  />
                )}
              </Button>
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
      <CustomModal open={openModal} onClose={closeModal}>
        <Box textAlign="center">
          {isLogged ? <Profile /> : <Login />}
          {!isLogged && (
            <Button
              style={{ marginTop: "2em" }}
              color="secondary"
              size="small"
              onClick={() =>
                navigate(Routes.auth.children.account.absolutePath + "/signup")
              }
            >
              Registrarse
            </Button>
          )}
        </Box>
      </CustomModal>
    </Box>
  );
};
