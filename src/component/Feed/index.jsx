import { Grid, Paper, Skeleton, styled } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideoById,
} from "../../redux/action/videos_action";
import Videos from "../Videos";
import style from "./style";

const Feed = () => {
  const { videos, loading } = useSelector((state) => state.homeVideoReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#323232" : "#383434",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
  }));
  const handleWatchScreen = (video_id) => {
    router.push(`/watchScreen${video_id}`);
    dispatch(getVideoById(video_id));
  };

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
          {!loading
            ? videos.map((video, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Item
                    sx={style.grid_item}
                    onClick={() => handleWatchScreen(video.id)}
                  >
                    <Videos video={video} id={video.id} />
                  </Item>
                </Grid>
              ))
            : [...Array(20)].map((_, i) => (
                <Grid item xs={2} sm={4} md={4} key={i}>
                  <Item sx={style.grid_item}>
                    <Box>
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={125}
                      />
                      <Box sx={style.skelton}>
                        <Skeleton variant="circular" width={50} height={50} />
                        <Box>
                          <Skeleton
                            variant="rectangular"
                            width="160px"
                            sx={{ marginBottom: "5px" }}
                          />
                          <Skeleton variant="rectangular" width="130px" />
                        </Box>
                      </Box>
                    </Box>
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
