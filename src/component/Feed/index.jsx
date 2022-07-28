import { Grid, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import style from "./style";
import Videos from '../Videos'
import { useDispatch } from "react-redux";
import { getPopularVideos } from "../../redux/action/videos_action";

const Feed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos())
  }, [dispatch]);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#323232" : "#383434",
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
              <Item sx={style.grid_item}><Videos/></Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Feed;
