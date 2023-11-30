import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import { useGetCharacters } from "../../api/Rick&Morty";
import { CardContainer } from "../../components";
import { useGetApi } from "../../hooks";
import { Paths } from "../../router/routes";

export default () => {
  const [offset, setOffset] = useState(0);
  const { data: characters } = useGetApi(() => useGetCharacters(offset), {
    refetching: offset,
  });

  return (
    <CardContainer sm={10} md={10} lg={8} title="Rick & Morty API Personajes">
      <Box textAlign="center">
        <Grid container spacing={2} p={4}>
          {characters.map((character, i) => (
            <Grid sm={6} key={character.id + i} item xs={12} md={6} lg={3}>
              <Card
                sx={{
                  boxShadow: 3,
                  height: 150,
                  maxHeight: 150,
                  display: "flex",
                }}
              >
                <CardContent sx={{ width: "50%" }}>
                  <Typography
                    sx={{
                      fontSize: "0.7em",
                      textAlign: "start",
                      color: "GrayText",
                      mt: -1,
                      mb: 1,
                    }}
                  >
                    {character.id}
                  </Typography>

                  <Typography
                    sx={{ mb: 1.5, fontSize: "0.5" }}
                    fontWeight="bold"
                    height={20}
                    overflow="hidden"
                    variant="subtitle1"
                  >
                    {character.name}
                  </Typography>
                  <Typography variant="subtitle2" height={30} overflow="hidden">
                    {character.gender}
                  </Typography>

                  <>
                    {character.status === "Alive" ? (
                      <Box display="flex" pl={1.5} mt={1}>
                        <Icon fontSize="small" color="success">
                          check
                        </Icon>
                        <Typography ml={1} fontSize={"0.8em"}>
                          Activo
                        </Typography>
                      </Box>
                    ) : (
                      <Box display="flex" pl={1.5} mt={1}>
                        <Icon fontSize="small" color="error">
                          radio_button_checked
                        </Icon>
                        <Typography ml={1} fontSize={"0.8em"}>
                          Inactivo
                        </Typography>
                      </Box>
                    )}
                  </>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: "50%" }}
                  image={character.image}
                  alt={character.name}
                />
              </Card>
            </Grid>
          ))}

          <Grid item xs={12} mt={4} mb={-5}>
            <Box display="flex" justifyContent="space-evenly" mb={4}>
              <Button
                size="small"
                disabled={offset <= 0}
                onClick={() => setOffset(offset - 1)}
              >
                <Icon>arrow_back_ios</Icon>
              </Button>

              <Button
                disabled={offset >= 68}
                size="small"
                onClick={() => setOffset(offset + 1)}
              >
                <Icon>arrow_forward_ios</Icon>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box textAlign="center" mb={4}>
        <Divider sx={{ mx: 4, mb: 2 }} />
        <NavLink to={Paths.INDEX}>
          <Button size="small" color="secondary">
            Regresar al Inicio
          </Button>
        </NavLink>
      </Box>
    </CardContainer>
  );
};
