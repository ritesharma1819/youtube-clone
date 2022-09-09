const style = {
  videosuggestion_container: {
    width: "100%",
    padding: "10px",
  },
  videosuggestion: {
    width: "100%",
    padding: "25px",
    display: "flex",
    alignItems: "center",
    gap: "40px",
    borderBottom: "1px solid #808080",
    cursor: "pointer",
  },
  videosuggestion_img: {
    position: "relative",
    marginLeft: "50px",
  },
  videosuggestion_duration: {
    position: "absolute",
    bottom: "0.3rem",
    right: "0.3rem",
    backgroundColor: "#080808ec",
    padding: "0.3rem",
  },
  videosuggestion_title: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    fontSize: "20px",
    marginBottom: "10px",
  },
  videosuggestion_views_details: {
    display: "flex",
    alignItems: "center",
    color: "#aaa",
    marginBottom: "10px",
  },
};

export default style;
