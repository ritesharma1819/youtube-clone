import { Visibility } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import moment from "moment";
import Image from "next/image";
import numeral from "numeral";
import React from "react";
import style from "./style";
const Videos = ({ video }) => {
  const {
    snippet: {
      title,
      channelTitle,
      publishedAt,
      thumbnails: { medium },
    },
    statistics: { viewCount },
    contentDetails: { duration },
  } = video;

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const myLoader = () => {
    return medium.url;
  };

  return (
    <Box sx={style.video_container}>
      <Box sx={style.video_poster}>
        <Image
          loader={myLoader}
          src={medium.url}
          alt="thumbnail"
          width={medium.width}
          height={medium.height}
        />
        <Typography sx={style.video_duration}>{_duration}</Typography>
      </Box>
      <Typography sx={style.video_title}>{title}</Typography>
      <Box sx={style.views_details}>
        <Visibility />
        <Typography>{numeral(viewCount).format("0.a")} views •</Typography>
        <Typography>{moment(publishedAt).fromNow()}</Typography>
      </Box>
      <Box sx={style.channel_details}>
        <Image
          loader={myLoader}
          src={medium.url}
          alt="channel"
          width="30px"
          height="30px"
          style={{ borderRadius: "50%" }}
        />
        <Typography>{channelTitle}</Typography>
      </Box>
    </Box>
  );
};

export default Videos;
