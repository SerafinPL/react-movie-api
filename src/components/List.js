import { useState, useRef } from "react";

import TextField from "@mui/material/TextField";

import {List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const ListMove = (props) => {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>

        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
          
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
          
        </ListItem>
      </List>
    </>
  );
};

export default ListMove;
