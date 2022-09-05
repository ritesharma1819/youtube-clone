export const homeVideoReducer = (
  state = {
    videos: [],
    nextPageToken: null,
    loading: false,
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_VIDEOS":
      return {
        ...state,
        videos: payload.videos,
        nextPageToken: payload.nextPageToken,
      };
    default:
      return state;
  }
};

export const selectedVideoReducer = (
  state = { loading: true, video: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "SELECTED_VIDEO":
      return {
        ...state,
        video: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const channelDetailsReducer = (
  state = { loading: true, channel: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANNEL_DETAILS":
      return {
        ...state,
        channel: payload,
        loading: false,
      };
    default:
      return state;
  }
};
