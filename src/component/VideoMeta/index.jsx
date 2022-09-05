import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import numeral from "numeral";
import moment from "moment";
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getChannelById } from "../../redux/action/videos_action";
import { useEffect } from "react";
import { useRouter } from "next/router";

const VideoMeta = () => {
  const dispatch = useDispatch();
  // const router = useRouter();
  const video = useSelector((state) => state.selectedVideoReducer.video);
  const channel = useSelector((state) => state.channelDetailsReducer.channel);
  console.log("videochannel=-=-=-=-=-=-=-", channel);
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
  }, [dispatch, video?.snippet?.channelId]);

  return (
    <Box sx={style.videoMeta}>
      <Box sx={style.videoMeta_video}>
        <iframe
          width="900px"
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
                Subscribers
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
          {[...Array(10)].map((_, index) => {
            return (
              <Box key={index} sx={style.videoMeta_Comment_list}>
                <Avatar src="" alt="User" />
                <Box>
                  <Typography>
                    UserName • {moment("12/08/2009").fromNow()}
                  </Typography>
                  <Typography sx={style.textColor_Common} variant="p">
                    Comments
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
