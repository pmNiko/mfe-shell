import { ItemsMenuProps } from "../../interfaces/ItemsMenu";

export const ExternalItemListMenu = ({
  items,
}: {
  items: ItemsMenuProps[];
}) => {
  const externals = items.filter((item) => !item.internal);

  return <div>ExternalItemListMenu</div>;
};
