import { Grid, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import style from "./style";

const Videos = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#323232" : "red",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
  }));
  return (
    <Box sx={style.container}>
      <Box sx={style.grid_container}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ lg: 16, md: 12, sm: 8, xs: 1 }}
        >
          {Array.from(Array(60)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>video</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Videos;
