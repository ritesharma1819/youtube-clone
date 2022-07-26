import { Box, Button, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Image from "next/image";
import youtubelogo from "../../src/static/logo.png";
import { useDispatch } from "react-redux";
import login from "../../src/redux/action/auth_action";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogIn = () => {
    dispatch(login());
  };
  return (
    <Box sx={style.login_container}>
      <Box sx={style.login_items}>
        <Typography variant="h4" component="h4" sx={style.login_title}>
          YouTube-Clone
        </Typography>
        <Image src={youtubelogo} alt="logo" width="100px" height="100px" />
        <Button onClick={handleLogIn} sx={style.login_button}>
          LogIn With Google
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
