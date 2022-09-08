import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import numeral from "numeral";
import moment from "moment";
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSubscriptionStatus,
  getChannelById,
} from "../../redux/action/videos_action";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import request from "../../utils/api";

const VideoMeta = () => {
  const dispatch = useDispatch();
  // const router = useRouter();
  const video = useSelector((state) => state.selectedVideoReducer.video);
  const channel = useSelector((state) => state.channelDetailsReducer.channel);
  const [comments, setComments] = useState();

  const getCommentData = async () => {
    const data = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId: video?.id,
      },
    });
    setComments(data.data.items);
  };
  // const comments = useSelector(
  //   (state) => state.getCommentListReducer?.comments
  // );
  // const isSubscribed = useSelector((state) => state.subscriptionStatusReducer?.isSubscribed);
  // useEffect(() => {
  // if (video === null) {
  //   router.push("/");
  //   return;
  // }
  // }, [])

  // const {
  //   snippet: { channelId, description, channelTitle, publishedAt },
  //   statistics: { likeCount, viewCount, commentCount },
  //   title,
  // } = video;

  // const {
  //   statistics: { subscriberCount },
  //   snippet: {
  //     thumbnails: { medium },
  //   },
  // } = channel;

  useEffect(() => {
    dispatch(getChannelById(video?.snippet?.channelId));
    // dispatch(checkSubscriptionStatus(video?.snippet?.channelId));
    // dispatch(getCommentList(video?.id));
    getCommentData();
  }, [dispatch, video?.id, video?.snippet?.channelId]);

  return (
    <Box sx={style.videoMeta}>
      <Box sx={style.videoMeta_video}>
        <iframe
          width="750px"
          height="450px"
          src={`https://www.youtube.com/embed/${video?.id}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          title={video?.title}
        ></iframe>
      </Box>
      <Box>
        <Box sx={style.videoMeta_top}>
          <Typography variant="h4" sx={style.textColor_Common}>
            {video?.title}
          </Typography>
          <Box sx={style.videoMeta_top_container}>
            <Box sx={style.videoMeta_top_container_viewDetails}>
              <Typography sx={style.textColor_Common}>
                {numeral(video?.statistics?.viewCount).format("0.a")} views •
              </Typography>
              <Typography sx={style.textColor_Common}>
                {moment(video?.snippet?.publishedAt).fromNow()}
              </Typography>
            </Box>
            <Box sx={style.videoMeta_top_container_ThumbIcons}>
              <Box sx={style.videoMeta_top_container_ThumbIcons_likeCount}>
                {" "}
                <ThumbUp />
                <Box sx={style.textColor_Common}>
                  {numeral(video?.statistics?.likeCount).format("0.a")}
                </Box>
              </Box>
              <ThumbDown />
            </Box>
          </Box>
          <Box sx={style.videoMeta_middle}>
            <Box sx={style.videoMeta_middle_container}>
              <Box sx={style.videoMeta_middle_container_ChannelDetails}>
                <Avatar src={channel?.snippet?.thumbnails.medium.url} />
                <Box>
                  <Typography sx={style.textColor_Common}>
                    {video?.snippet?.channelTitle}
                  </Typography>
                  <Typography sx={style.textColor_Common}>
                    {numeral(channel?.statistics?.subscriberCount).format(
                      "0.a"
                    )}{" "}
                    Subscribers
                  </Typography>
                </Box>
              </Box>
              <Typography sx={style.videoMeta_middle_container_Subscribe_Btn}>
                {/* {isSubscribed ? "Subscribed" : "Subscribe"} */}
                Subscribe
              </Typography>
            </Box>
          </Box>
          <Box sx={style.videoMeta_bottom}>
            <Typography sx={{ marginBottom: "1rem", color: "#aaa" }}>
              {video?.snippet?.description}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={style.videoMeta_Comment_container}>
            <Avatar sx={style.videoMeta_Comment_Avatar} src="" alt="User" />
            <TextField
              variant="standard"
              sx={style.videoMeta_Comment_TextField}
              placeholder="Add a comment..."
            />
            <Button sx={style.videoMeta_Comment_Btn}>Comment</Button>
          </Box>
          {comments &&
            comments?.map((comment, index) => {
              return (
                <Box key={index} sx={style.videoMeta_Comment_list}>
                  <Avatar
                    src={
                      comment?.snippet.topLevelComment.snippet
                        .authorProfileImageUrl
                    }
                    alt="User"
                  />
                  <Box>
                    <Typography>
                      {
                        comment?.snippet.topLevelComment.snippet
                          .authorDisplayName
                      }{" "}
                      •{" "}
                      {moment(
                        comment?.snippet.topLevelComment.snippet.publishedAt
                      ).fromNow()}
                    </Typography>
                    <Typography sx={style.textColor_Common} variant="p">
                      {comment?.snippet.topLevelComment.snippet.textOriginal}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default VideoMeta;
