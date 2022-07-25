import { Box } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import HomeScreen from "./HomeScreen";

const App = () => {
  return (
    <Box>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </Box>
  );
};

export default App;
