import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import numeral from "numeral";
import style from "./style";
import { Visibility } from "@mui/icons-material";

const VideoSuggestions = () => {
  return (
    <Box sx={style.videosuggestion_container}>
      {[...Array(10)].map((_, index) => {
        return (
          <Box key={index} sx={style.videosuggestion}>
            <Box sx={style.videosuggestion_img}>
              <Avatar src="" alt="V" sx={{ width: "80px", height: "80px" }} />
              <Typography sx={style.videosuggestion_duration}>5:30</Typography>
            </Box>
            <Box>
              <Typography sx={style.videosuggestion_title}>
                Video Title- Next Suggested Video
              </Typography>
              <Box sx={style.videosuggestion_views_details}>
                <Visibility />
                <Typography>
                  {numeral("2000").format("0.a")} views •{" "}
                </Typography>
                <Typography>{moment("08/25/2015").fromNow()}</Typography>
              </Box>
              <Typography style={{ color: "#aaa" }}>Channel Name</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default VideoSuggestions;
