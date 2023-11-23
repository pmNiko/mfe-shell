import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ItemsMenuProps } from "../../interfaces/ItemsMenu";

export const ExternalItemListMenu = ({
  items,
}: {
  items: ItemsMenuProps[];
}) => {
  if (!items) return null;

  return (
    <>
      {items.map((item) => (
        <ListItemButton
          key={item.id}
          onClick={() => window.open(item.route)}
          style={{ marginLeft: 5 }}
        >
          <ListItemIcon>
            <Icon>{item.iconname}</Icon>
          </ListItemIcon>
          <ListItemText sx={{ ml: -3 }} primary={item.title} />
        </ListItemButton>
      ))}
    </>
  );
};
