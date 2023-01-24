import React from "react";

import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

const Loading: React.FC<{}> = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ paddingTop: "30px" }}
    >
      <CircularProgress />
    </Grid>
  );
};

export default Loading;
