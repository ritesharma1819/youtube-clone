import { Box } from "@mui/system";
import React, { useState } from "react";
import Feed from "../../src/component/Feed";
import Header from "../../src/component/Header";
import SideBar from "../../src/component/SideBar";
import style from "./style";

const HomeScreen = () => {
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
        <Feed />
      </Box>
    </Box>
  );
};

export default HomeScreen;
