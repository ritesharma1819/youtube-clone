import { Box } from "@mui/system";
import React from "react";
import Header from "../../src/component/Header";
import SideBar from "../../src/component/SideBar";
import Videos from "../../src/component/Videos";
import style from "./style";

const HomeScreen = () => {
  return (
    <Box sx={style.container.primary}>
      <Header />
      <Box sx={style.sidebar_video_container}>
        <SideBar />
        <Videos />
      </Box>
    </Box>
  );
};

export default HomeScreen;
