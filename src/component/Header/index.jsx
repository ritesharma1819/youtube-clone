import { Apps, Notifications, Search } from "@mui/icons-material";
import { Avatar, Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import youtubeLogo from "../../static/logo.png";
import style from "./style";

const Header = () => {
  return (
    <Box sx={style.header}>
      <Box sx={style.header_container}>
        <Image
          src={youtubeLogo}
          alt="logo"
          width="50px"
          height="50px"
          style={{ cursor: "pointer" }}
        />
        <Box sx={style.header_textField_container}>
          <TextField
            variant="standard"
            sx={style.header_textField}
            placeholder="Search..."
          />
          <Button sx={style.header_button}>
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
      </Box>
    </Box>
  );
};

export default Header;
