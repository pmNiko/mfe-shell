import { Box, Divider, Typography } from "@mui/material";
import { CardContainer } from "../../components";
import { useState } from "react";

export default () => {
  const [tasks, setTasks] = useState([]);

  return (
    <CardContainer md={8} title="JSON - Placeholder API Tareas">
      <Box textAlign="center" width={"100%"} border={1}>
        <Typography>Tareas desde la API</Typography>
      </Box>

      <Divider sx={{ mx: 4 }} />

      <Box my={3}></Box>
    </CardContainer>
  );
};
