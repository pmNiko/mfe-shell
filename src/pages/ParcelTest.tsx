import { Suspense, useEffect, useState } from "react";
import Parcel from "../parcels/ParcelTest";
import { CardContainer } from "../components";
import { Box, Button, Grid } from "@mui/material";

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
    <Box mt={-2} mb={2}>
      <Parcel />
      <CardContainer
        title="Datos recibidos desde el parcel"
        minHeight="10vh"
        mt={-13}
      >
        <Box>
          {Object.entries(data).length > 0 && (
            <div style={{ marginTop: "2em" }}>
              <div
                style={{
                  minWidth: "250px",
                  textAlign: "start",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "-1.5em",
                }}
              >
                <ul>
                  <p style={{ marginLeft: "-1em" }}>
                    Datos recibidos desde el parcel
                  </p>

                  {Object.entries(data).map((ele) => (
                    <li key={ele[0]}>
                      {ele[0]}: {`${ele[1]}`}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Box>
        <Box textAlign="center">
          {Object.entries(data).length > 0 && (
            <Button onClick={() => setData([])}>Limpiar datos</Button>
          )}
        </Box>
      </CardContainer>
    </Box>
  );
};
