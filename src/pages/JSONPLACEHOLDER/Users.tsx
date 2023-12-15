import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { CardContainer } from "../../components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useGetApi } from "../../hooks";
import { useGetUsers } from "../../api/JsonPlacecholder";

import { avatars } from "./avatarImages";
import { Routes } from "../../router";

export default () => {
  const { data: users, error, loading } = useGetApi(useGetUsers, {});

  return (
    <CardContainer lg={3} title="JSONPlaceholder API Usuarios">
      <>
        {error && <Typography>Se produjo un error en la petición.</Typography>}
      </>

      {loading ? (
        <>
          <CircularProgress sx={{ alignSelf: "center" }} />
          <Typography>Recuperando datos del usuario...</Typography>
        </>
      ) : (
        <>
          <Box mx="auto">
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
              }}
            >
              {users.map((user, i) => (
                <Box key={user.id + i}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={user.name} src={avatars[i + 1]} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.username}
                      secondary={
                        <>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {user.name}
                          </Typography>
                          <Typography
                            sx={{ display: "inline", ml: 1 }}
                            component="span"
                            variant="caption"
                            color="text.secondary"
                          >
                            {user.email}
                          </Typography>
                          <Typography
                            sx={{ ml: 1 }}
                            component="span"
                            variant="caption"
                            color="text.secondary"
                          >
                            {user.company.name} - {user.phone}
                          </Typography>
                          <Typography
                            sx={{ ml: 1 }}
                            variant="caption"
                            color="text.secondary"
                          >
                            {user.website}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </Box>
              ))}
            </List>
          </Box>
        </>
      )}

      <Box mb={4} textAlign="center">
        <NavLink to={Routes.index.routerPath}>
          <Button size="small" color="secondary">
            Regresar al Inicio
          </Button>
        </NavLink>
      </Box>
    </CardContainer>
  );
};
