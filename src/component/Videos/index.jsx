import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Image from "next/image";
import style from "./style";
import { Visibility } from "@mui/icons-material";
import moment from "moment";
import numeral from "numeral";
const Videos = ({ video }) => {
  console.log("video----------", video);
  const {
    id,
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

  const myLoader = ({ src }) => {
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
