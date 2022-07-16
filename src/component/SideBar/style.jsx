const style = {
  sideBar: {
    // backgroundColor: "green",
    flex: 0.6,
    height: "100vh",
    padding: "10px",
    display: {
      xs: "none",
      sm: "block",
    },
  },
  sideBar_open: {
    // backgroundColor: "green",
    flex: 0.6,
    height: "100vh",
    padding: "10px",
    display: {
      xs: "block",
    },
  },
  sideBar_listItemButton: {
    "&:hover": {
      backgroundColor: "gray",
    },
  },
  sideBar_icons: {
    color: "white",
  },
  sideBar_logout_icon: {
    marginTop: "20px",
    border: "1px solid #808080",
    width: "100%",
  },
};

export default style;
