import { Box, Divider, Typography } from "@mui/material";
import { CardContainer } from "../../components";

export default () => {
  return (
    <CardContainer md={8} title="JSON - Placeholder API">
      <Box textAlign="center">
        <Typography>Posts desde la API</Typography>
      </Box>

      <Divider sx={{ mx: 4 }} />

      <Box my={3}></Box>
    </CardContainer>
  );
};
