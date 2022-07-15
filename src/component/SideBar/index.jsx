import {
  History, Home, LibraryBooks, Logout, SentimentVeryDissatisfied, Subscriptions,
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
import React from "react";
import style from "./style";
const SideBar = () => {
  return (
    <Box sx={style.sideBar}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={style.sideBar_icons}>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={style.sideBar_icons}>
                <Subscriptions />
              </ListItemIcon>
              <ListItemText primary="Subscriptions" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={style.sideBar_icons}>
                <ThumbUp />
              </ListItemIcon>
              <ListItemText primary="Liked Video" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={style.sideBar_icons}>
                <History />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={style.sideBar_icons}>
                <LibraryBooks />
              </ListItemIcon>
              <ListItemText primary="Populate" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={style.sideBar_icons}>
                <SentimentVeryDissatisfied />
              </ListItemIcon>
              <ListItemText primary="Sidebar" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={style.sideBar_logout_icon}>
            <ListItemButton>
              <ListItemIcon sx={style.sideBar_icons}>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default SideBar;
