import { CircularProgress, Grid, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import style from "./style";
import Videos from "../Videos";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../redux/action/videos_action";
import InfiniteScroll from "react-infinite-scroll-component";

const Feed = () => {
  const { videos } = useSelector((state) => state.homeVideoReducer);
  const dispatch = useDispatch();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#323232" : "#383434",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
  }));
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  return (
    <Box sx={style.container}>
      <Box sx={style.grid_container}>
        {/* <InfiniteScroll
        dataLength={videos.length}
        next={() => dispatch(getPopularVideos())}
        hasMore={true}
        loader={<Box sx={{display: "flex"}}><CircularProgress /> </Box>}
        > */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ lg: 16, md: 12, sm: 8, xs: 1 }}
        >
          {videos.map((video, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item sx={style.grid_item}>
                <Videos video={video} id={video.id} />
              </Item>
            </Grid>
          ))}
        </Grid>
          {/* </InfiniteScroll> */}
      </Box>
    </Box>
  );
};

export default Feed;
