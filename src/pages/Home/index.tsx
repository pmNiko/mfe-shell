import { Box, Card, Icon, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { CardContainer } from "../../components";
import { LoaderDataMenu } from "../../interfaces/LoaderDataMenu";
import useAuthStore, { AuthStore } from "../../externals/useAuthStore";
import "./home.css";

interface InternalItemCardProps {
  iconname: string;
  title: string;
  description: string;
  route: string;
  disabled: boolean;
  isProtected: boolean;
}

export default () => {
  const navigate = useNavigate();
  const isLogged = useAuthStore((state: AuthStore) => state.isLogged);
  const { internals, externals } = useLoaderData() as LoaderDataMenu;
  const [items, setItems] = useState<InternalItemCardProps[]>([]);

  useEffect(() => {
    const simpleItems = internals
      .filter((item) => !item.children)
      .map((item) => ({
        iconname: item.iconname!,
        title: item.title!,
        description: item.description!,
        route: item.route!,
        disabled: !item.isEnabled,
        isProtected: item.isProtected,
      }));
    const compositeItems = internals
      .filter((item) => !!item.children)
      .map((item) => {
        return item.children?.map((child) => {
          return {
            iconname: child.iconname!,
            title: child.title!,
            description: child.description!,
            route: item.route + child.route!,
            disabled: !child.isEnabled,
            isProtected: child.isProtected,
          };
        });
      })
      .flatMap((section) => section) as InternalItemCardProps[];

    setItems([...compositeItems, ...simpleItems]);
  }, []);

  return (
    <CardContainer sm={10} md={8} lg={5} minHeight="70vh">
      <div className="container">
        {items.map((item) => (
          <ItemCard
            key={item.title}
            title={item.title}
            description={item.description}
            iconname={item.iconname}
            click={() => navigate(item.route)}
            disabled={item.disabled}
            hidden={item.isProtected && !isLogged}
          />
        ))}

        {externals.map((item) => (
          <ItemCard
            key={item.id}
            click={() => window.open(item.route)}
            title={item.title}
            description={item.description!}
            iconname={item.iconname!}
            disabled={!item.isEnabled}
          />
        ))}
      </div>
    </CardContainer>
  );
};

interface ItemCardProps {
  iconname: string;
  title: string;
  description: string;
  click: () => void;
  disabled: boolean;
  hidden?: boolean;
}

const ItemCard = ({
  title,
  description,
  iconname,
  click,
  disabled,
  hidden = false,
}: ItemCardProps) => {
  return (
    <Card
      sx={{
        display: hidden ? "none" : "show",
        boxShadow: 3,
        textAlign: "center",
        borderRadius: "5%",
        cursor: disabled ? "default" : "pointer",
        color: disabled ? "#ccc" : "default",
        pointerEvents: disabled ? "none" : "auto",
        webkitTouchCallout: "none",
        webkitUserSelect: "none",
        mozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
      }}
      onClick={click}
    >
      <Box py={3} px={1}>
        <Icon>{iconname}</Icon>

        <Typography fontWeight="bold" variant="subtitle1">
          {title}
        </Typography>

        <Typography
          sx={{ fontSize: 14, my: 2 }}
          color="text.secondary"
          gutterBottom
        >
          {description}
        </Typography>
      </Box>
    </Card>
  );
};
