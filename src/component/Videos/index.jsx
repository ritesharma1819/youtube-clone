import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import poster from "../../static/poster.jpg";
import style from "./style";
import { Visibility } from "@mui/icons-material";
const Videos = () => {
  return (
    <Box sx={style.video_container}>
      <Box sx={style.video_poster}>
        <Image src={poster} alt="thumnail" width="100%" height="100%" />
        <Typography sx={style.video_duration}>5:30</Typography>
      </Box>
      <Typography sx={style.video_title}>
        Learn React with in 1.3 light year days
      </Typography>
      <Box sx={style.views_details}>
        <Visibility />
        <Typography>5M views •</Typography>
        <Typography>5 days ago</Typography>
      </Box>
      <Box sx={style.channel_details}>
        <Image
          src={poster}
          alt="channel"
          width="30px"
          height="30px"
          style={{ borderRadius: "50%" }}
        />
        <Typography>channel name</Typography>
      </Box>
    </Box>
  );
};

export default Videos;
