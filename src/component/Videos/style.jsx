const style = {
  video_container: {
    width: "100%",
    height: "100%",
  },
  video_poster: {
    marginBottom: "0.5rem",
    position: "relative",
  },
  video_duration: {
    position: "absolute",
    bottom: "0.3rem",
    right: "0.3rem",
    backgroundColor: "#080808ec",
    padding: "0.2rem",
  },
  video_title: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
  },
  views_details: {
    display: "flex",
    gap: "10px",
    color: "#b3afaf",
    justifyContent: "center",
    sm: {
      display: "flex",
      gap: "10px",
      color: "#b3afaf",
      justifyContent: "center",
    },
    md: {
      display: "flex",
      gap: "10px",
      color: "#b3afaf",
      justifyContent: "center",
    },
  },
  channel_details: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    color: "#b3afaf",
    justifyContent: "center",
  },
};

export default style;
