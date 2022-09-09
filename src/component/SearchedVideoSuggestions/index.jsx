import { Visibility } from "@mui/icons-material";
import { Avatar, Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import numeral from "numeral";
import style from "./style";

const SearchedVideoSuggestions = () => {
  return (
    <Box sx={style.videosuggestion_container}>
      {true ? (
        // relatedVideo
        //   ?.filter((item) => item.snippet)
        [...Array(20)].map((videos, index) => {
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
                  {/* {videos?.snippet.title} */}
                  search video title
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
                  {/* {videos?.snippet.channelTitle} */}
                  Channel title
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
