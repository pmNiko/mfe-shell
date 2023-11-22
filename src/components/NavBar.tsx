import { Box, Button, Icon } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const NavBar = ({ children }: { children?: JSX.Element }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "#2ea3f2" }}>
        <Toolbar>
          <menu>{children}</menu>

          <Button sx={{ ml: -1, color: "white" }}>
            <Icon>home</Icon>
          </Button>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="right"
            padding={1}
            marginRight={3}
          >
            <Typography fontSize={16} fontWeight="bold">
              App Shell
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
