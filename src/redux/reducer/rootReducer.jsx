import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { homeVideoReducer } from "./videosReducer";
import { selectedVideoReducer } from "./videosReducer";
import { channelDetailsReducer } from "./videosReducer";
import { videoBySearchReducer } from "./videosReducer";

export const rootReducer = combineReducers({
  authReducer,
  homeVideoReducer,
  selectedVideoReducer,
  channelDetailsReducer,
  videoBySearchReducer,
});
