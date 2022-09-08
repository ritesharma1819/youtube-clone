const style = {
  videoMeta: {
    maxWidth: "900px",
    // maxHeight: "50px",
  },
  videoMeta_video: {
    maxWidth: "900px",
    maxHeight: "450px",
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
  },
  videoMeta_top: {
    padding: "1rem",
  },
  videoMeta_top_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  videoMeta_top_container_viewDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  videoMeta_top_container_ThumbIcons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
  },
  videoMeta_top_container_ThumbIcons_likeCount: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },

  videoMeta_middle: {
    marginTop: "1rem",
    borderBottom: "1px solid #808080",
    borderTop: "1px solid #808080",
  },
  videoMeta_middle_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  videoMeta_middle_container_ChannelDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  },
  videoMeta_middle_container_Subscribe_Btn: {
    backgroundColor: "#ff0000",
    color: "white",
    padding: "0.5rem",
    cursor: "pointer",
    borderRadius: "5px",
  },
  videoMeta_bottom: {
    marginTop: "1rem",
    borderBottom: "1px solid #808080",
  },
  videoMeta_Comment_container: {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  videoMeta_Comment_Avatar: {
    marginRight: "0.5rem",
  },

  videoMeta_Comment_TextField: {
    backgroundColor: "#191919",
    color: "white",
    height: "40px",
    "& input": {
      color: "white",
    },
    width: {
      xs: "600px",
      sm: "700px",
    },
  },
  videoMeta_Comment_Btn: {
    padding: "0.5rem",
    backgroundColor: "hsla(0, 0%, 100%, 0.08)",
    color: "white",
    maxWidth: "100px",
  },
  videoMeta_Comment_list: {
    padding: "0.5rem 0rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    borderTop: "1px solid #808080",
  },
  textColor_Common: {
    color: "#aaa",
  },
};

export default style;
