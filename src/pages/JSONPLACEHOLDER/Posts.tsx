import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { CardContainer } from "../../components";
import { NavLink, useLoaderData } from "react-router-dom";
import { PostResponse } from "../../interfaces/JsonPlaceholderApi/Posts";
import { Paths } from "../../router/routes";

export default () => {
  const data = useLoaderData() as PostResponse[];

  return (
    <CardContainer
      md={10}
      lg={8}
      minHeight="65vh"
      title="JSONPlaceholder API Posts"
    >
      <Box textAlign="center">
        <Typography variant="subtitle1" fontWeight="bold">
          Listado de Post
        </Typography>
        <Typography variant="caption">Cantidad: {data.length}</Typography>
      </Box>

      <Grid container spacing={2} p={4}>
        {data.map((post, i) => (
          <Grid key={post.id + i} item xs={12} md={4} lg={3}>
            <Card sx={{ boxShadow: 3, height: 240, maxHeight: 240 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  ID {post.id}
                </Typography>

                <Typography
                  sx={{ mb: 1.5 }}
                  fontWeight="bold"
                  height={50}
                  overflow="hidden"
                  variant="subtitle1"
                >
                  {post.title}
                </Typography>
                <Typography variant="subtitle2" height={70} overflow="hidden">
                  {post.body}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <NavLink
                  to={`/${Paths.JSONPLACEHOLDER}/post/${post.id}/${post.userId}`}
                >
                  <Button size="small">Detalle</Button>
                </NavLink>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mx: 4, mb: 4 }} />

      <Box mb={4} textAlign="center">
        <NavLink to={Paths.INDEX}>
          <Button size="small" color="secondary">
            Regresar al Inicio
          </Button>
        </NavLink>
      </Box>
    </CardContainer>
  );
};
