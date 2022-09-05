import { Box } from "@mui/material";
import React, { useEffect } from "react";
// import HomeScreen from "./HomeScreen";
import {useSelector} from 'react-redux'
import { useRouter } from 'next/router'
import Login from "./login";


const App = () => {
  const router=useRouter()
  const accessToken=useSelector(state=>state.authReducer.accessToken)
  useEffect(()=>{
     if(!accessToken){
      router.push("/login")
     }
  },[accessToken, router])
  return (
    <Box>
      <Login />
    </Box>
  );
};

export default App;
