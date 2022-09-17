import { Apps, Menu, Notifications, Search } from "@mui/icons-material";
import { Avatar, Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideoBySearch } from "../../redux/action/videos_action";
import youtubeLogo from "../../static/logo.png";
import style from "./style";

const Header = ({ handleToogleSideBar }) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSeachedVideo = (e) => {
    e.preventDefault();
    if (searchText) {
      dispatch(getVideoBySearch(searchText));
    }
    router.push(`/SearchVideos`);
  };

  return (
    <Box sx={style.header}>
      <Box sx={style.header_container}>
        <Box sx={style.header_image}>
          <Image
            src={youtubeLogo}
            alt="logo"
            width="50px"
            height="50px"
            style={{ cursor: "pointer" }}
          />
        </Box>
        <Menu
          sx={style.header_menuIcon}
          onClick={() => handleToogleSideBar()}
        />
        <Box sx={style.header_textField_container}>
          <TextField
            variant="standard"
            sx={style.header_textField}
            placeholder="  Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            sx={style.header_button}
            onClick={(e) => handleSeachedVideo(e)}
          >
            <Search />
          </Button>
        </Box>
        <Box sx={style.header_icons}>
          <Notifications />
          <Apps />
          <Avatar
            sx={style.header_avatar}
            alt="Remy Sharp"
            src="https://image.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819879.jpg"
          />
        </Box>

        <Avatar
          sx={{
            ...style.header_avatar,
            display: {
              xs: "block",
              sm: "none",
            },
          }}
          alt="Remy Sharp"
          src="https://image.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819879.jpg"
        />
      </Box>
    </Box>
  );
};

export default Header;
