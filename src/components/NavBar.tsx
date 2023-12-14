import { Avatar, Box, Button, Icon } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthForm, CustomModal, Profile } from ".";
import { auth } from "../auth/fb-auth";
import { Paths } from "../router/routes";
import { useGlobalStore } from "../store/useGlobalStore";

export const NavBar = ({ children }: { children?: JSX.Element }) => {
  const isLogged = useGlobalStore((state) => state.isLogged);
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "#2ea3f2" }}>
        <Toolbar>
          <menu>{children}</menu>

          <NavLink to={Paths.INDEX}>
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

              <Button onClick={() => setOpen(true)}>
                {isLogged ? (
                  <Avatar
                    sx={{ height: 30, width: 30 }}
                    alt={auth.currentUser?.email + ""}
                    src={auth.currentUser?.photoURL + ""}
                  />
                ) : (
                  <Avatar
                    sx={{ height: 30, width: 30 }}
                    alt="Login"
                    src={"/avatar.svg"}
                  />
                )}
              </Button>
              <NavLink to={"/auth/account"}>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ color: "white" }}
                >
                  Login federado
                </Button>
              </NavLink>
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
      <CustomModal open={open} onClose={closeModal}>
        {isLogged ? <Profile closeModal={closeModal} /> : <AuthForm />}
      </CustomModal>
    </Box>
  );
};
