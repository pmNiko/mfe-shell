import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink
                style={{ textDecoration: "none" }}
                to={`/${Paths.RICK_AND_MORTY}/character/${character.id}`}
              >
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
                    <Typography
                      variant="subtitle2"
                      height={30}
                      overflow="hidden"
                    >
                      {character.gender === "Male" ? "Masculino" : "Femenino"}
                    </Typography>

                    <>
                      {character.status === "Alive" ? (
                        <Box
                          display="flex"
                          justifyContent="center"
                          ml={-2}
                          gap={0.5}
                          mt={1}
                        >
                          <Icon fontSize="small" color="success">
                            check
                          </Icon>
                          <Typography fontSize={"0.8em"}>Activo</Typography>
                        </Box>
                      ) : (
                        <Box
                          display="flex"
                          justifyContent="center"
                          ml={-2}
                          gap={0.5}
                          mt={1}
                        >
                          <Icon fontSize="small" color="error">
                            radio_button_checked
                          </Icon>
                          <Typography fontSize={"0.8em"}>Inactivo</Typography>
                        </Box>
                      )}
                    </>
                  </CardContent>
                  <CardMedia
                    component="img"
                    image={character.image}
                    alt={character.name}
                  />
                </Card>
              </NavLink>
            </Grid>
          ))}

          <Grid item xs={12} mt={4}>
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

      <Box textAlign="center" mb={4} mt={-2}>
        <NavLink to={Paths.INDEX}>
          <Button size="small" color="secondary">
            Regresar al Inicio
          </Button>
        </NavLink>
      </Box>
    </CardContainer>
  );
};
