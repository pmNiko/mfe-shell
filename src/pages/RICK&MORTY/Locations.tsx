import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import { useGetLocations } from "../../api/Rick&Morty";
import { CardContainer } from "../../components";
import { useGetApi } from "../../hooks";
import { Paths } from "../../router/routes";

export default () => {
  const [offset, setOffset] = useState(0);
  const { data: locations } = useGetApi(() => useGetLocations(offset), {
    refetching: offset,
  });

  return (
    <CardContainer sm={10} md={10} lg={6} title="Rick & Morty API Ubicaciones">
      <Grid container spacing={2} p={4}>
        {locations.map((location, i) => (
          <Grid sm={6} key={location.id + i} item xs={12} md={6} lg={3}>
            <Card
              sx={{
                boxShadow: 3,
                height: 160,
                maxHeight: 160,
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.7em",
                    textAlign: "start",
                    color: "GrayText",
                    minHeight: 10,
                    maxHeight: 10,
                  }}
                  overflow="hidden"
                >
                  {location.id}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.8em",
                    minHeight: 30,
                    maxHeight: 30,
                    my: 1,
                  }}
                  fontWeight="bold"
                >
                  {location.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    minHeight: 45,
                    maxHeight: 45,
                    mb: 1,
                  }}
                >
                  {location.dimension === "unknown"
                    ? "desconocida"
                    : location.dimension}
                </Typography>
                <Typography
                  variant="subtitle2"
                  overflow="hidden"
                  sx={{
                    fontSize: "0.8em",
                    minHeight: 15,
                    maxHeight: 15,
                    mt: 1,
                    pb: 1,
                  }}
                >
                  Tipo: {""}
                  {location.type}
                </Typography>
              </CardContent>
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
              disabled={offset >= 10}
              size="small"
              onClick={() => setOffset(offset + 1)}
            >
              <Icon>arrow_forward_ios</Icon>
            </Button>
          </Box>
        </Grid>
      </Grid>

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
