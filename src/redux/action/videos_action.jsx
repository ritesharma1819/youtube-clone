import request from "../../utils/api";

export const getPopularVideos = () => async dispatch => {
  try {
    const {data}= await request("/videos", {
      params: {
        part: "snippet, contentDetails, statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 100,
        pageToken: '',
      },

      
    });
    console.log(data);
    dispatch({
        type: "GET_VIDEOS",
        payload: {
            videos: data.items,
            nextPageToken: data.nextPageToken,
        },
      })
  } catch (error) {
    console.log(error);
  }
};
