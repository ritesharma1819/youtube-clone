import {
  History,
  Home,
  LibraryBooks,
  Logout,
  SentimentVeryDissatisfied,
  Subscriptions,
  ThumbUp
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/action/auth_action";
import style from "./style";

const SideBar = ({ toggleSideBar, handleToogleSideBar }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    router.push("/login");
  };
  return (
    <Box sx={toggleSideBar ? style.sideBar_open : style.sideBar}>
      <Box position="fixed">
        <nav
          aria-label="main mailbox folders"
          onClick={() => handleToogleSideBar()}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={style.sideBar_listItemButton}>
                <ListItemIcon sx={style.sideBar_icons}>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" sx={style.sideBar_listItemText} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={style.sideBar_listItemButton}>
                <ListItemIcon sx={style.sideBar_icons}>
                  <Subscriptions />
                </ListItemIcon>
                <ListItemText
                  primary="Subscriptions"
                  sx={style.sideBar_listItemText}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={style.sideBar_listItemButton}>
                <ListItemIcon sx={style.sideBar_icons}>
                  <ThumbUp />
                </ListItemIcon>
                <ListItemText
                  primary="Liked Video"
                  sx={style.sideBar_listItemText}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={style.sideBar_listItemButton}>
                <ListItemIcon sx={style.sideBar_icons}>
                  <History />
                </ListItemIcon>
                <ListItemText
                  primary="History"
                  sx={style.sideBar_listItemText}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={style.sideBar_listItemButton}>
                <ListItemIcon sx={style.sideBar_icons}>
                  <LibraryBooks />
                </ListItemIcon>
                <ListItemText
                  primary="Popular"
                  sx={style.sideBar_listItemText}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={style.sideBar_listItemButton}>
                <ListItemIcon sx={style.sideBar_icons}>
                  <SentimentVeryDissatisfied />
                </ListItemIcon>
                <ListItemText
                  primary="Sidebar"
                  sx={style.sideBar_listItemText}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              onClick={handleLogOut}
              disablePadding
              sx={style.sideBar_logout_icon}
            >
              <ListItemButton sx={style.sideBar_listItemButton}>
                <ListItemIcon sx={style.sideBar_icons}>
                  <Logout />
                </ListItemIcon>
                <ListItemText
                  primary="Logout"
                  sx={style.sideBar_listItemText}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Box>
  );
};

export default SideBar;
