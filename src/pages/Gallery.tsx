import Grid from "@mui/material/Grid";
import { CardContainer } from "../components";

export default () => {
  return (
    <CardContainer lg={8} title="Galería de imagenes">
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <img
            src="https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="1"
            width={"100%"}
            height={300}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src="https://images.unsplash.com/photo-1682695795931-a546abdb6733?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="2"
            width={"100%"}
            height={300}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="3"
            width={"100%"}
            height={300}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="4"
            width={"100%"}
            height={300}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src="https://images.unsplash.com/photo-1682687220015-186f63b8850a?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="5"
            width={"100%"}
            height={300}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src="https://plus.unsplash.com/premium_photo-1675804669850-a1c3b87589d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="6"
            width={"100%"}
            height={300}
          />
        </Grid>
      </Grid>
    </CardContainer>
  );
};
