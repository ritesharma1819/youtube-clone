import { Apps, Menu, Notifications, Search } from "@mui/icons-material";
import { Avatar, Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import youtubeLogo from "../../static/logo.png";
import style from "./style";

const Header = () => {
  return (
    <Box sx={style.header}>
      <Box sx={style.header_container}>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <Image
            src={youtubeLogo}
            alt="logo"
            width="50px"
            height="50px"
            style={{ cursor: "pointer" }}
          />
        </Box>
        <Menu
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },

            height: "50px",
          }}
        />
        <Box
          sx={{
            ...style.header_textField_container,
            width: {
              xs: "70%",
              sm: "40%",
              md: "40%",
            },
          }}
        >
          <TextField
            variant="standard"
            sx={{
              ...style.header_textField,
              width: {
                xs: "600px",
                sm: "600px",
              },
            }}
            placeholder="  Search..."
          />
          <Button sx={style.header_button}>
            <Search />
          </Button>
        </Box>
        <Box
          sx={{
            ...style.header_icons,
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
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
