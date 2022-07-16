const style = {
  header: {
    height: "55px",
    marginLeft: "30px",
    marginRight: "30px",
  },
  header_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header_image: {
    display: {
      xs: "none",
      sm: "block",
    },
  },
  header_menuIcon: {
    display: {
      xs: "block",
      sm: "none",
    },
    height: "50px",
    cursor: "pointer",
  },
  header_textField_container: {
    display: "flex",
    alignItems: "center",
    color: "white",
    width: {
      xs: "70%",
      sm: "40%",
      md: "40%",
    },
  },
  header_textField: {
    backgroundColor: "#191919",
    color: "white",
    height: "35px",
    "& input": {
      color: "white",
    },
    width: {
      xs: "600px",
      sm: "600px",
    },
  },
  header_button: {
    backgroundColor: "hsla(0, 0%, 100%, 0.08)",
    flex: 0.2,
    color: "white",
  },
  header_icons: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    cursor: "pointer",
    display: {
      xs: "none",
      sm: "flex",
    },
  },
  header_avatar: {
    width: "28px",
    height: "28px",
    cursor: "pointer",
  },
};

export default style;
