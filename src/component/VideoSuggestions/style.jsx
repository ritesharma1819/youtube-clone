const style = {
  videosuggestion_container: {
    width: '200px',
    height: "710px",
    overflowY: "scroll",
  },
  videosuggestion: {
    padding: "15px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderTop: "1px solid #808080",
    cursor: "pointer",
  },
  videosuggestion_img: {
    position: "relative",
  },
  videosuggestion_duration: {
    position: "absolute",
    bottom: "0.3rem",
    right: "0.3rem",
    backgroundColor: "#080808ec",
    padding: "0.1rem",
  },
  videosuggestion_title: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
  },
  videosuggestion_views_details: {
    display: "flex",
    alignItems: "center",
    color: "#aaa",
  },
};

export default style;
