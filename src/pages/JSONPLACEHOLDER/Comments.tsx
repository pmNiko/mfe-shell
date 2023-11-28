import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { CardContainer } from "../../components";
import { useGetApi } from "../../hooks";
import { useGetComments } from "../../api/JsonPlacecholder";
import { CommentResponse } from "../../interfaces/JsonPlaceholderApi/Comments";
import { NavLink } from "react-router-dom";
import { Paths } from "../../router/routes";

export default () => {
  const commentsData = useGetApi<CommentResponse[]>(useGetComments, {
    manual: true,
  });

  return (
    <CardContainer md={8} title="JSONPlaceholder API Comentarios">
      <Box textAlign="center">
        <Button onClick={commentsData.doRequest}>Solicitar comentarios</Button>
        <Divider sx={{ mx: 4 }} />
      </Box>

      <Box textAlign="center">
        {commentsData.error && (
          <Typography>Se produjo un error en la petición.</Typography>
        )}

        {commentsData.loading && (
          <>
            <CircularProgress sx={{ alignSelf: "center" }} />
            <Typography>Recuperando datos del usuario...</Typography>
          </>
        )}

        {commentsData.data.length > 0 && (
          <Grid container spacing={2} p={4}>
            {commentsData.data.map((comment, i) => (
              <Grid key={comment.id + i} item xs={12} md={4} lg={3}>
                <Card sx={{ boxShadow: 3, height: 240, maxHeight: 240 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      ID {comment.id}
                    </Typography>

                    <Typography
                      sx={{ mb: 1.5 }}
                      fontWeight="bold"
                      height={50}
                      overflow="hidden"
                      variant="subtitle1"
                    >
                      {comment.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      height={70}
                      overflow="hidden"
                    >
                      {comment.body}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <NavLink to={Paths.INDEX}>
                      <Button size="small" color="secondary">
                        Regresar al Inicio
                      </Button>
                    </NavLink>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      <Divider sx={{ mx: 4 }} />
    </CardContainer>
  );
};
