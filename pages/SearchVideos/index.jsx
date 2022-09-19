import { Box } from "@mui/system";
import React, { useState } from "react";
import Header from "../../src/component/Header";
import SearchedVideoSuggestions from "../../src/component/SearchedVideoSuggestions";
import SideBar from "../../src/component/SideBar";
import style from "../../styles/HomePagestyle/style";

const SearchVideos = () => {
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
          <SearchedVideoSuggestions />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchVideos;
