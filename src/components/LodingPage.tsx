import { Box, CircularProgress, Typography } from "@mui/material";
import { Suspense } from "react";

export const LoadingPage = ({ children }: { children: JSX.Element }) => {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <CircularProgress sx={{ alignSelf: "center" }} />
          <Typography>Esperando...</Typography>
        </Box>
      }
    >
      {children}
    </Suspense>
  );
};
