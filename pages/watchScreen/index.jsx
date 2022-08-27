import { Box } from "@mui/material";
import React, { useState } from "react";
import SideBar from "../../src/component/SideBar";
import style from "./style";
import Header from "../../src/component/Header";
import VideoMeta from "../../src/component/VideoMeta";
import VideoSuggestions from "../../src/component/VideoSuggestions";

const WatchScreen = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const handleToogleSideBar = () => {
    setToggleSideBar((value) => !value);
  };
  return (
    <Box sx={style.container.primary}>
      <Header handleToogleSideBar={handleToogleSideBar} />
      <Box sx={style.sidebar_video_container}>
        <SideBar
          toggleSideBar={toggleSideBar}
          handleToogleSideBar={handleToogleSideBar}
        />
        <Box sx={style.watchscreen}>
          <VideoMeta />
          <VideoSuggestions />
        </Box>
      </Box>
    </Box>
  );
};

export default WatchScreen;
