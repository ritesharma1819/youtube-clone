import { Visibility } from "@mui/icons-material";
import { Avatar, Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import numeral from "numeral";
import style from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getVideoById } from "../../redux/action/videos_action";
import { useRouter } from "next/router";

const SearchedVideoSuggestions = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { video, loading } = useSelector((state) => state.videoBySearchReducer);
  console.log("video", video, loading);
  const handleRelatedVideo = (video_id) => {
    router.push(`/watch${video_id}`);
    dispatch(getVideoById(video_id));
  };
  return (
    <Box sx={style.videosuggestion_container}>
      {!loading ? (
        video?.filter((item) => item.snippet)
          .map((videos, index) => {
            return (
              <Box
                key={index}
                sx={style.videosuggestion}
                onClick={() => handleRelatedVideo(videos.id.videoId)}
              >
                <Box sx={style.videosuggestion_img}>
                  <Avatar
                    src={videos?.snippet.thumbnails.medium.url}
                    alt="V"
                    sx={{ width: "130px", height: "130px" }}
                  />
                  <Typography sx={style.videosuggestion_duration}>
                    5:30
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={style.videosuggestion_title}>
                    {videos?.snippet.title}
                  </Typography>
                  <Box sx={style.videosuggestion_views_details}>
                    <Visibility />
                    <Typography>
                      {numeral("2000").format("0.a")} views •{" "}
                    </Typography>
                    <Typography>
                      {moment(videos?.snippet.publishAt).fromNow()}
                    </Typography>
                  </Box>
                  <Typography style={{ color: "#aaa" }}>
                    {videos?.snippet.channelTitle}
                  </Typography>
                </Box>
              </Box>
            );
          })
      ) : (
        <Box>
          <Skeleton variant="rectangular" width={1215} height={125} />
          <Skeleton
            variant="rectangular"
            width={1215}
            height={125}
            sx={{ marginTop: "10px", marginBottom: "10px" }}
          />
          <Skeleton variant="rectangular" width={1215} height={125} />
          <Skeleton
            variant="rectangular"
            width={1215}
            height={125}
            sx={{ marginTop: "10px", marginBottom: "10px" }}
          />
          <Skeleton variant="rectangular" width={1215} height={125} />
        </Box>
      )}
    </Box>
  );
};

export default SearchedVideoSuggestions;
