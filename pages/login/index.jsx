import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import login from "../../src/redux/action/auth_action";
import youtubelogo from "../../src/static/logo.png";
import style from "../../styles/logInPagestyle";

const Login = () => {
  const { accessToken } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogIn = (isGuest) => {
    dispatch(login(isGuest));
  };
  useEffect(() => {
    if (accessToken) {
      router.push("/HomeScreen");
    }
  }, [accessToken, router]);
  return (
    <Box sx={style.login_container}>
      <Box sx={style.login_items}>
        <Typography variant="h4" component="h4" sx={style.login_title}>
          YouTube-Clone
        </Typography>
        <Image src={youtubelogo} alt="logo" width="100px" height="100px" />
        <Button onClick={() => handleLogIn(false)} sx={style.login_button}>
          LogIn With Google
        </Button>
        <Button onClick={() => handleLogIn(true)} sx={style.guest_button}>
          Continue as Guest
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
