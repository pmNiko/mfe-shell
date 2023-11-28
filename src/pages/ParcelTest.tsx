import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CardContainer } from "../components";
import Parcel from "../parcels/ParcelTest";

export default () => {
  const [data, setData] = useState({});

  const handleEvent = (detail: any) => {
    setData({ ...detail.detail });
  };

  useEffect(() => {
    window.addEventListener("EVENT_TEST", handleEvent);

    return () => {
      window.removeEventListener("EVENT_TEST", handleEvent);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("EVENT_SEND_PRODUCT", handleEvent);

    return () => {
      window.removeEventListener("EVENT_SEND_PRODUCT", handleEvent);
    };
  }, []);

  // Acceso a las variables en vite
  // console.log(import.meta.env.VITE_EXAMPLE_URL);

  return (
    <Box>
      <Parcel />
      <CardContainer minHeight="10vh" mt={-13} md={8}>
        <Box mt={2} mb={2} textAlign="center">
          <Typography fontWeight="italic" variant="subtitle1">
            Datos emitidos desde el parcel
          </Typography>
        </Box>
        <Box>
          {Object.entries(data).length > 0 && (
            <Box mx={4}>
              {Object.entries(data).map((ele, i) => (
                <Box key={ele[0] + i} display="flex" gap={2}>
                  <Typography
                    minWidth={85}
                    variant="subtitle2"
                    textTransform="capitalize"
                  >
                    - {ele[0]}:
                  </Typography>

                  <Typography variant="subtitle2">{`${ele[1]}`}</Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
        <Box textAlign="center" my={2}>
          {Object.entries(data).length > 0 && (
            <Button color="secondary" onClick={() => setData({})}>
              Limpiar datos
            </Button>
          )}
        </Box>
      </CardContainer>
    </Box>
  );
};
