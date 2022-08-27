import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import numeral from "numeral";
import moment from "moment";
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import ShowMoreText from "react-show-more-text";

const VideoMeta = () => {
  return (
    <Box sx={style.videoMeta}>
      <Box sx={style.videoMeta_video}>
        <iframe
          width="900px"
          height="450px"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          title="video"
        ></iframe>
      </Box>
      <Box>
        <Box sx={style.videoMeta_top}>
          <Typography variant="h4" sx={style.textColor_Common}>
            Video Title
          </Typography>
          <Box sx={style.videoMeta_top_container}>
            <Box sx={style.videoMeta_top_container_viewDetails}>
              <Typography sx={style.textColor_Common}>
                {numeral("5000").format("0.a")} views •
              </Typography>
              <Typography sx={style.textColor_Common}>
                {moment("10/08/2005").fromNow()}
              </Typography>
            </Box>
            <Box sx={style.videoMeta_top_container_ThumbIcons}>
              <ThumbUp />
              <ThumbDown />
            </Box>
          </Box>
          <Box sx={style.videoMeta_middle}>
            <Box sx={style.videoMeta_middle_container}>
              <Box sx={style.videoMeta_middle_container_ChannelDetails}>
                <Avatar src="https://i.imgur.com/7nNtq4Z.jpg" />
                <Box>
                  <Typography sx={style.textColor_Common}>
                    Channel Name
                  </Typography>
                  <Typography sx={style.textColor_Common}>
                    {numeral("2000").format("0.a")} Subscribers
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
              {/* <ShowMoreText
            lines={3}
            more="Show more"
            less="Show less"

            > */}
              Description- Never knew that this video will hit more than 1M
              views. Thanks everyone for putting your valuable time watching and
              listening to this song and Have a better future. Description-
              Never knew that this video will hit more than 1M views. Thanks
              everyone for putting your valuable time watching and listening to
              this song and Have a better future.
              {/* </ShowMoreText> */}
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
