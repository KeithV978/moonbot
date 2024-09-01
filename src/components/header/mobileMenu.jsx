import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BookRounded from "@mui/icons-material/MenuBookOutlined";
import StartRounded from "@mui/icons-material/StartRounded";
import Typography from "@mui/material/Typography";

export const MobileNav = ({ menuOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={menuOpen} onClose={() => toggleDrawer(false)}>
      <Box
        sx={{ width: 250, height: "100vh", backgroundColor: "primary.main" }}
        role="presentation"
        onClick={() => toggleDrawer(!menuOpen)}
        onKeyDown={() => toggleDrawer(!menuOpen)}
      >
        <Typography variant="h5" padding="1rem">
          MoonBot
        </Typography>
        <Divider />
        <List>
          {[
            { text: "Documentation", icon: <BookRounded /> },
            { text: "Get Started", icon: <StartRounded /> },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
