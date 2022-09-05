import request from "../../utils/api";

export const getPopularVideos = () => async (dispatch,getState) => {
  try {
    const { data } = await request("/videos", {
      params: {
        part: "snippet, contentDetails, statistics",
        chart: "mostPopular",
        regionCode: "US",
        maxResults: 30,
        pageToken: getState().homeVideoReducer.nextPageToken,
      },
    });
    console.log(data);
    dispatch({
      type: "GET_VIDEOS",
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getVideoById = (id) => async (dispatch) => {
  try {
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
