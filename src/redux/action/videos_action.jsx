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
