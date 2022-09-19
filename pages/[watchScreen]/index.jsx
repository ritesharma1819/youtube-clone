import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "../../src/component/Header";
import SideBar from "../../src/component/SideBar";
import VideoMeta from "../../src/component/VideoMeta";
import VideoSuggestions from "../../src/component/VideoSuggestions";
import style from "../../styles/WatchPagestyle";

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
