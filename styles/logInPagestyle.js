const style = {
  login_container: {
    backgroundColor: "#191919",
    width: "30%",
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
  login_items: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "200px",
    gap: "10px",
  },
  login_title: {
    marginTop: "50px",
  },
  login_button: {
    marginBottom: "10px",
    color: "black",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "gray",
      color: "white",
    },
  },
  guest_button: {
    marginBottom: "50px",
    color: "white",
    border: "1px solid white",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "gray",
      color: "white",
    },
  },
};

export default style;
