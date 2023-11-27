import { Box, Container, Grid, Typography } from "@mui/material";
import { FC, ReactElement } from "react";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        background: "black",
        width: "100%",
        minHeight: "150px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Box
            mt={2}
            p={2}
            pt={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Grid item xs={12} textAlign="center">
              <Typography color="white" variant="subtitle2">
                React | Material UI | React Router
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Typography color="white" variant="subtitle2">
                Copyright &copy; {`${new Date().getFullYear()} `}
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
