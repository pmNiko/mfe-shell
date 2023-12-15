import { NavLink, useParams } from "react-router-dom";
import { CardContainer } from "../../components";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Icon,
  Typography,
} from "@mui/material";
import { useGetCharacterByID } from "../../api/Rick&Morty";
import { useGetApi } from "../../hooks";
import { Routes } from "../../router";

export default () => {
  const { characterID } = useParams();
  const {
    data: character,
    loading,
    error,
  } = useGetApi(() => useGetCharacterByID(characterID!), {});

  return (
    <CardContainer
      sm={10}
      md={8}
      lg={5}
      title={`Detalle del Personaje ${characterID}`}
      minHeight="78vh"
    >
      <Box textAlign="center">
        {error && <Typography>Se produjo un error en la petición.</Typography>}

        {loading ? (
          <>
            <CircularProgress sx={{ alignSelf: "center" }} />
            <Typography>Recuperando datos del usuario...</Typography>
          </>
        ) : (
          <Card sx={{ mx: 6, px: 3, mt: 3, mb: 2 }}>
            <CardMedia
              sx={{
                width: 300,
                height: 300,
                mx: "auto",
                mt: 2,
                borderRadius: 3,
                boxShadow: 3,
              }}
              component="img"
              image={character.image}
              alt={character.name}
            />

            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {character.id} {character.name}
              </Typography>

              <Typography
                sx={{ mb: 1.5 }}
                fontWeight="bold"
                overflow="hidden"
                variant="subtitle1"
              >
                {character.species}
              </Typography>
              <Typography my={1} variant="subtitle2">
                Creado:{" "}
                {new Date(character.created).toLocaleDateString("en-US")}
              </Typography>
              <Typography variant="subtitle2">
                Ubicación: {character.location?.name}
              </Typography>
              <Typography my={1} variant="subtitle2">
                Origen:{" "}
                {character.origin?.name === "unknown"
                  ? "desconocido"
                  : character.origin?.name}
              </Typography>

              <Box display="flex" justifyContent="center">
                {character.status === "Alive" ? (
                  <Box display="flex" ml={-2} my={1}>
                    <Icon fontSize="small" color="success">
                      check
                    </Icon>
                    <Typography ml={1} fontSize={"0.8em"}>
                      Activo
                    </Typography>
                  </Box>
                ) : (
                  <Box display="flex" ml={-2} my={1}>
                    <Icon fontSize="small" color="error">
                      radio_button_checked
                    </Icon>
                    <Typography ml={1} fontSize={"0.8em"}>
                      Inactivo
                    </Typography>
                  </Box>
                )}
              </Box>
              <Typography variant="body2">
                Sexo: {character.gender === "Male" ? "masculino" : "femenino"}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
      <Box display="flex" justifyContent="space-evenly" mb={4} mt={2}>
        <NavLink to={Routes.index.routerPath}>
          <Button size="small" color="secondary">
            Regresar al Inicio
          </Button>
        </NavLink>
        <NavLink to={Routes.rickAndMorty.children["characters"].absolutePath}>
          <Button size="small">Lista de personajes</Button>
        </NavLink>
      </Box>
    </CardContainer>
  );
};
