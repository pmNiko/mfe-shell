import { useEffect, useState } from "react";
import { useLoaderData, NavLink } from "react-router-dom";
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
import { ItemsMenuProps, LoaderData } from "../../interfaces/ItemsMenu";
import { ExternalItemListMenu } from "./ExternalItemListMenu";
import { ItemListMenu } from "./ItemListMenu";
import { Paths } from "../../router/routes";
import "./menuStyles.css";

export const Menu = () => {
  const { internals, externals } = useLoaderData() as LoaderData;
  const [internalItems, setInternalIems] = useState<ItemsMenuProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  const toggleExpandAllSections = () => {
    setInternalIems([
      ...internalItems.map((item) => {
        if (!!item.children) {
          return {
            ...item,
            isExpanded: !isAllExpanded,
          };
        }

        return item;
      }),
    ]);
  };

  const updatedExpadedSections = (id: number) => {
    setInternalIems([
      ...internalItems.map((section) => {
        if (section.id === id) {
          section.isExpanded = !section.isExpanded;
        }
        return section;
      }),
    ]);
  };

  useEffect(() => {
    setInternalIems(internals);
    setIsAllExpanded(
      internals
        .filter((item) => !!item.children)
        .every((item) => item.isExpanded)
    );
  }, []);

  useEffect(() => {
    setIsAllExpanded(
      internalItems
        .filter((item) => !!item.children)
        .every((item) => item.isExpanded)
    );
  }, [internalItems]);

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
          <ListItemButton onClick={toggleExpandAllSections}>
            <NavLink
              className="custom-nav-link"
              style={{ display: "flex" }}
              to={Paths.INDEX}
            >
              <ListItemIcon sx={{ pt: 0.9, pl: 1 }}>
                <Icon>home</Icon>
              </ListItemIcon>
              <ListItemText primary="Inicio" sx={{ pt: 0.5, mr: 18.5 }} />
            </NavLink>

            {isAllExpanded ? (
              <Icon>expand_less</Icon>
            ) : (
              <Icon>expand_more</Icon>
            )}
          </ListItemButton>

          <Divider sx={{ my: 1, mx: 2 }} />

          <ItemListMenu
            items={internalItems}
            updatedExpadedSections={updatedExpadedSections}
          />

          <Divider sx={{ mt: 2.5, mx: 2 }} />
          <Box textAlign="center" mt={1}>
            <Typography variant="caption" color={"#2ea3f2"}>
              Links Externos
            </Typography>
          </Box>

          <ExternalItemListMenu items={externals} />
        </List>
      </Drawer>
    </menu>
  );
};
