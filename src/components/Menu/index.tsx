import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { ItemsMenuProps } from "../../interfaces/ItemsMenu";
import { ExternalItemListMenu } from "./ExternalItemListMenu";
import { ItemListMenu } from "./ItemListMenu";

export const Menu = () => {
  const items = useLoaderData() as ItemsMenuProps[];
  const [isOpen, setIsOpen] = useState(false);
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  return (
    <menu>
      <Button sx={{ color: "white" }} onClick={() => setIsOpen(true)}>
        <Icon>menu</Icon>
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
          p={1}
          width="300px"
          textAlign="end"
          role="presentation"
          display="flex"
          justifyContent="space-between"
          sx={{ backgroundColor: "#2ea3f2", color: "white" }}
        >
          <Typography p={1} pl={2} fontWeight="bold">
            Menu
          </Typography>
          <Button sx={{ color: "white" }} onClick={() => setIsOpen(false)}>
            <Icon sx={{ fontSize: 30 }}>menu_open</Icon>
          </Button>
        </Box>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <ListItemButton key="home" style={{ marginLeft: 5, minWidth: 210 }}>
              <ListItemIcon>
                <Icon>home</Icon>
              </ListItemIcon>
              <ListItemText primary="Inicio" sx={{ pt: 0.5 }} />
            </ListItemButton>

            <Box
              sx={{ cursor: "pointer", maxWidth: 10, pr: 7 }}
              onClick={() => setIsAllExpanded(!isAllExpanded)}
            >
              {isAllExpanded ? (
                <Button sx={{ pr: 5, pt: 2 }} color="inherit">
                  <Icon>expand_less</Icon>
                </Button>
              ) : (
                <Button sx={{ pr: 5, pt: 2 }} color="inherit">
                  <Icon>expand_more</Icon>
                </Button>
              )}
            </Box>
          </Box>

          <Divider sx={{ my: 1, mx: 2 }} />

          <ItemListMenu items={items} />

          <Divider sx={{ mt: 2.5, mx: 2 }} />
          <Box textAlign="center" mt={1}>
            <Typography variant="caption" color={"#2ea3f2"}>
              Links Externos
            </Typography>
          </Box>

          <ExternalItemListMenu items={items} />
        </List>
      </Drawer>
    </menu>
  );
};
