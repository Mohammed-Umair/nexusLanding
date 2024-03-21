import RightShadow from "@/app/components/page-components/RightShadow";
import { Box, Grid } from "@mui/material";
import React from "react";

type Props = {};

const PinSection = (props: Props) => {
  return (
    <Grid container>
      <Box position={"absolute"} right="0px" top="1200px">
        <RightShadow />
      </Box>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        Imahe
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        COntent
      </Grid>
    </Grid>
  );
};

export default PinSection;
