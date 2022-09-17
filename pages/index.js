import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Login from "./login";

const App = () => {
  const router = useRouter();
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
  }, [accessToken, router]);
  return (
    <Box>
      <Login />
    </Box>
  );
};

export default App;
