import { Box, Grid, GridSize, Typography } from "@mui/material";

interface Props {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  minHeight?: string;
  height?: string;
  minWidth?: string;
  justifyTarget?: "space-around" | "space-between" | "space-evenly" | "center";
  showImage?: boolean;
  title?: string;
  children: JSX.Element | JSX.Element[];

  mt?: string | number;
  mb?: string | number;
}

/**
 * - Componente - Tarjeta de renderizado del body
 * - Propiedades por default
 *    - GridZise:
 *      - xs ➡️ 11
 *      - sm ➡️ 8
 *      - md ➡️ 6
 *      - lg ➡️ 4
 *    - showImage: false
 *    - title: ""
 *    - justifyTarget: "space-between"
 */
export const CardContainer = ({
  xs = 11,
  sm = 8,
  md = 6,
  lg = 4,
  minHeight = "78vh",
  minWidth = "340px",
  height = "auto",
  showImage = false,
  title = "",
  justifyTarget = "space-between",
  children,
  mt = "",
  mb = "",
}: Props) => {
  return (
    <Grid container display="flex" justifyContent="center" mt={mt} mb={mb}>
      <Grid item xs={xs} sm={sm} md={md} lg={lg} mt={13} mb={2}>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            boxShadow: "5px 10px 20px rgba(0, 0, 0, 0.4)",
            borderRadius: "15px 15px 15px 15px ",
            minHeight,
            height,
            minWidth,
            display: "flex",
            flexDirection: "column",
            justifyContent: justifyTarget,
          }}
        >
          <Box>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              textAlign="center"
              fontWeight="bold"
              pt={4}
              px={4}
              sx={{ display: !title ? "none" : "" }}
            >
              {title}
            </Typography>
            {showImage && (
              <Box textAlign="center" mt={6}>
                <img
                  src="/mantenimiento.gif"
                  style={{ opacity: "0.5", height: "10em" }}
                />
              </Box>
            )}
          </Box>

          {children}
        </Box>
      </Grid>
    </Grid>
  );
};
