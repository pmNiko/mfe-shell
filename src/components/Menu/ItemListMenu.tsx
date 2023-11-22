import { NavLink } from "react-router-dom";
import {
  Collapse,
  Icon,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ItemsMenuProps } from "../../interfaces/ItemsMenu";
import "./menuStyles.css";

export const ItemListMenu = ({ items }: { items: ItemsMenuProps[] }) => {
  const internals = items.filter((item) => item.internal);

  if (!internals) return null;

  return (
    <>
      {internals.map((item, i) => (
        <div key={item.title + i} hidden={item.protected}>
          <ListItemButton
            key={item.id + i}
            disabled={!item.enabled}
            onClick={() =>
              console.log("toggleExpandChildren(item.id) ", item.id)
            }
          >
            <ListItemText primary={item.title} sx={{ mr: 4 }} />
            {item.expanded ? (
              <Icon>expand_less</Icon>
            ) : (
              <Icon>expand_more</Icon>
            )}
          </ListItemButton>
          {!!item.children && (
            <Collapse in={item.expanded} timeout="auto" unmountOnExit>
              <>
                {item.children.map((child, i) => (
                  <List
                    key={child.id + i}
                    component="div"
                    disablePadding
                    hidden={item.protected}
                  >
                    <NavLink
                      to={`${item.route}${child.route}`}
                      className="custom-nav-link"
                    >
                      <ListItemButton
                        disabled={!item.enabled || !child.enabled}
                        sx={{ pl: 5 }}
                      >
                        <ListItemIcon>
                          <Icon>{child.iconname}</Icon>
                        </ListItemIcon>
                        <ListItemText primary={child.title} />
                      </ListItemButton>
                    </NavLink>
                  </List>
                ))}
              </>
            </Collapse>
          )}
        </div>
      ))}
    </>
  );
};
