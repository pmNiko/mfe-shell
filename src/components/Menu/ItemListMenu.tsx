import {
  Box,
  Collapse,
  Icon,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalStore } from "../../store/useGlobalStore";
import { ItemsMenuProps } from "./interfaces";
import "./menuStyles.css";

interface Props {
  items: ItemsMenuProps[];
  updatedExpadedSections: (id: number) => void;
}

export const ItemListMenu = ({ items, updatedExpadedSections }: Props) => {
  const isLogged = useGlobalStore((state) => state.isLogged);
  if (!items) return null;

  return (
    <>
      {items.map((item, i) => (
        <div key={item.title + i} hidden={item.isProtected && !isLogged}>
          {!!item.children ? (
            <ItemWithChildren
              key={item.id + i}
              item={item}
              updatedExpadedSections={updatedExpadedSections}
            />
          ) : (
            <Box mt={1}>
              <SimpleItem
                key={item.id + i}
                title={item.title}
                disabled={!item.isEnabled}
                hidden={item.isProtected && !isLogged}
                iconname={item.iconname!}
                route={item.route}
              />
            </Box>
          )}
        </div>
      ))}
      <SimpleItem
        title="Pagina de error"
        disabled={false}
        iconname={"error"}
        route="/error-page"
      />
    </>
  );
};

interface ItemWithChildrenProps {
  item: ItemsMenuProps;
  updatedExpadedSections: (id: number) => void;
}

const ItemWithChildren = ({
  item,
  updatedExpadedSections,
}: ItemWithChildrenProps) => {
  const [expandSection, setExpandSection] = useState(item.isExpanded);

  const toggleExpanded = () => {
    updatedExpadedSections(item.id);
    setExpandSection(!expandSection);
  };

  useEffect(() => {
    setExpandSection(item.isExpanded);
  }, [item]);

  return (
    <>
      <ListItemButton disabled={!item.isEnabled} onClick={toggleExpanded}>
        <ListItemText primary={item.title} sx={{ mr: 4 }} />
        {expandSection ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
      </ListItemButton>
      <Collapse in={expandSection} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 4, mt: -1 }}>
          {item.children!.map((child, i) => (
            <SimpleItem
              key={child.id + i}
              iconname={child.iconname!}
              disabled={!item.isEnabled || !child.isEnabled}
              hidden={child.isProtected}
              route={`${item.route}${child.route}`}
              title={child.title}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};

const SimpleItem = ({
  hidden = false,
  route,
  disabled = false,
  iconname,
  title,
}: {
  hidden?: boolean;
  route: string;
  disabled?: boolean;
  iconname: string;
  title: string;
}) => {
  return (
    <NavLink
      to={route}
      className="custom-nav-link"
      style={{ pointerEvents: disabled ? "none" : "auto" }}
    >
      <ListItemButton disabled={disabled} hidden={hidden}>
        <ListItemIcon>
          <Icon>{iconname}</Icon>
        </ListItemIcon>
        <ListItemText sx={{ ml: -3 }} primary={title} />
      </ListItemButton>
    </NavLink>
  );
};
