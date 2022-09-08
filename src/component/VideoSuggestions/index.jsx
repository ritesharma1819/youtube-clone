import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import moment from "moment";
import numeral from "numeral";
import style from "./style";
import { Visibility } from "@mui/icons-material";
import { useState } from "react";
import request from "../../utils/api";
import { useSelector } from "react-redux";

const VideoSuggestions = () => {
  const video = useSelector((state) => state.selectedVideoReducer.video);
  const [relatedVideo, setRelatedVideo] = useState();
  const getRelatedVideoData = async () => {
    const data = await request("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: video?.id,
        maxResults: 15,
        type: "video",
      },
    });
    setRelatedVideo(data?.data.items);
  };
  useEffect(() => {
    getRelatedVideoData();
  }, [video?.id]);

  // useEffect(() => {
  //   const get_video_details = async () => {
  //     const data = await request("/videos", {
  //       params: {
  //         part: "snippet,statistics",
  //         id: relatedVideo?.id?.videoId,
  //       },
  //     });
  //     console.log("data----duration--", data);
  //   };
  //   get_video_details();
  // },[relatedVideo?.id]);

  return (
    <Box sx={style.videosuggestion_container}>
      {relatedVideo
        ?.filter((item) => item.snippet)
        .map((videos, index) => {
          return (
            <Box key={index} sx={style.videosuggestion}>
              <Box sx={style.videosuggestion_img}>
                <Avatar
                  src={videos.snippet.thumbnails.medium.url}
                  alt="V"
                  sx={{ width: "80px", height: "80px" }}
                />
                <Typography sx={style.videosuggestion_duration}>
                  5:30
                </Typography>
              </Box>
              <Box>
                <Typography sx={style.videosuggestion_title}>
                  {videos.snippet.title}
                </Typography>
                <Box sx={style.videosuggestion_views_details}>
                  <Visibility />
                  <Typography>
                    {numeral("2000").format("0.a")} views •{" "}
                  </Typography>
                  <Typography>
                    {moment(videos.snippet.publishAt).fromNow()}
                  </Typography>
                </Box>
                <Typography style={{ color: "#aaa" }}>
                  {videos.snippet.channelTitle}
                </Typography>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};

export default VideoSuggestions;
