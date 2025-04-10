import { CircularProgress, Grid } from "@mui/material";
import React from "react";

function loading() {
  return (
    <Grid container size={12} alignItems={"center"} justifyContent={"center"} boxShadow={3} minHeight="75vh">
      <CircularProgress color="success"  size="4rem"/>
    </Grid>
  );
}

export default loading;
