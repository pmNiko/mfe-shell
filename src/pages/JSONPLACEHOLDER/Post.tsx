import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { useGetPostByID, useGetUserByID } from "../../api/JsonPlacecholder";
import { CardContainer } from "../../components";
import { useGetApi } from "../../hooks";
import { Paths } from "../../router/routes";
import { UserResponse } from "../../interfaces/JsonPlaceholderApi/Users";
import { PostResponse } from "../../interfaces/JsonPlaceholderApi/Posts";

export default () => {
  const { postID, userID } = useParams();
  const postData = useGetApi(() => useGetPostByID(postID!));
  const userData = useGetApi(() => useGetUserByID(userID!));

  const user = userData.data as UserResponse;
  const post = postData.data as PostResponse;

  return (
    <CardContainer
      sm={10}
      md={8}
      lg={5}
      title="Detalle del post"
      justifyTarget="space-between"
      minHeight="65vh"
    >
      <Box textAlign="center">
        <Typography>Post ID {postID}</Typography>

        {userData.error && (
          <Typography>Se produjo un error en la petición.</Typography>
        )}

        {userData.loading ? (
          <>
            <CircularProgress sx={{ alignSelf: "center" }} />
            <Typography>Recuperando datos del usuario...</Typography>
          </>
        ) : (
          <Card sx={{ mx: 6, px: 3 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {user.id} {user.name}
              </Typography>

              <Typography
                sx={{ mb: 1.5 }}
                fontWeight="bold"
                overflow="hidden"
                variant="subtitle1"
              >
                {user.username}
              </Typography>
              <Typography variant="subtitle2">{user.email}</Typography>
              <Typography variant="subtitle2">{user.phone}</Typography>
              <Typography variant="subtitle2">{user.website}</Typography>

              <Typography mt={5} variant="h6">
                {post.title}
              </Typography>
              <Typography variant="body2">{post.body}</Typography>
            </CardContent>
          </Card>
        )}
      </Box>
      <Box display="flex" justifyContent="space-evenly" mb={4}>
        <NavLink to={Paths.INDEX}>
          <Button size="small" color="secondary">
            Regresar al Inicio
          </Button>
        </NavLink>
        <NavLink to={"/" + Paths.JSONPLACEHOLDER + "/posts"}>
          <Button size="small">Lista de posts</Button>
        </NavLink>
      </Box>
    </CardContainer>
  );
};
