import { Avatar, Box, Button, Icon, ImageListItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Paths } from "../router/routes";
import { useAuthorize } from "../hooks/useAuthorize";
import { auth } from "../auth/fb-auth";

export const NavBar = ({ children }: { children?: JSX.Element }) => {
  const { isLogged } = useAuthorize();
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
            <Box display="flex" justifyContent="end" gap={2}>
              <Typography fontSize={15} pt={0.5} fontWeight="bold">
                App Shell
              </Typography>

              {isLogged && (
                <Avatar
                  sx={{ height: 30, width: 30 }}
                  alt={auth.currentUser?.email + ""}
                  src={auth.currentUser?.photoURL + ""}
                />
              )}
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
