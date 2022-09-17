import { Avatar, Box, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import moment from "moment";
import numeral from "numeral";
import style from "./style";
import { Visibility } from "@mui/icons-material";
import { useState } from "react";
import request from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getVideoById } from "../../redux/action/videos_action";

const VideoSuggestions = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const video = useSelector((state) => state.selectedVideoReducer.video);
  const [relatedVideo, setRelatedVideo] = useState();
  const [loading, setLoading] = useState(false);

  const getRelatedVideoData = async () => {
    setLoading(true);
    const data = await request("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: video?.id,
        maxResults: 15,
        type: "video",
      },
    });
    setRelatedVideo(data?.data.items);
    setLoading(false);
  };

  const handleRelatedVideo = (video_id) => {
    router.push(`/watch${video_id}`);
    dispatch(getVideoById(video_id));
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
      { !loading ? (
        relatedVideo
          ?.filter((item) => item.snippet)
          .map((videos, index) => {
            return (
              <Box
                key={index}
                sx={style.videosuggestion}
                onClick={() => handleRelatedVideo(videos.id.videoId)}
              >
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
          })
      ) : (
        <Box>
          <Skeleton variant="rectangular" width={375} height={125} />
          <Skeleton
            variant="rectangular"
            width={375}
            height={125}
            sx={{ marginTop: "10px", marginBottom: "10px" }}
          />
          <Skeleton variant="rectangular" width={375} height={125} />
          <Skeleton
            variant="rectangular"
            width={375}
            height={125}
            sx={{ marginTop: "10px", marginBottom: "10px" }}
          />
          <Skeleton variant="rectangular" width={375} height={125} />
        </Box>
      )}
    </Box>
  );
};

export default VideoSuggestions;
