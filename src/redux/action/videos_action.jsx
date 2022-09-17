import request from "../../utils/api";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "HOME_VIDEOS_LOADING", payload: true });
    const { data } = await request("/videos", {
      params: {
        part: "snippet, contentDetails, statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 30,
        pageToken: getState().homeVideoReducer.nextPageToken,
      },
    });
    dispatch({
      type: "GET_VIDEOS",
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
    dispatch({ type: "HOME_VIDEOS_LOADING", payload: false });
  } catch (error) {
    console.log(error);
  }
};

export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "SELECTED_VIDEO_LOADING", payload: true });
    const { data } = await request("/videos", {
      params: {
        part: "snippet, contentDetails, statistics",
        id: id,
      },
    });
    dispatch({
      type: "SELECTED_VIDEO",
      payload: data.items[0],
    });
    dispatch({ type: "SELECTED_VIDEO_LOADING", payload: false });
  } catch (error) {
    console.log(error);
  }
};
export const getChannelById = (id) => async (dispatch) => {
  try {
    const { data } = await request("/channels", {
      params: {
        part: "snippet, contentDetails, statistics",
        id: id,
      },
    });
    dispatch({
      type: "CHANNEL_DETAILS",
      payload: data.items[0],
    });
  } catch (error) {
    console.log(error);
  }
};
export const getVideoBySearch = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: "SEARCHED_VIDEOS_LOADING", payload: true });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        q: keyword,
        maxResults: 30,
        type: "video",
      },
    });
    dispatch({
      type: "SEARCHED_VIDEOS",
      payload: data?.items,
    });
    dispatch({ type: "SEARCHED_VIDEOS_LOADING", payload: false });
  } catch (error) {
    console.log(error);
  }
};
