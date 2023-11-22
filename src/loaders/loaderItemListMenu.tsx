import { ItemsMenuProps } from "../interfaces/ItemsMenu";
import fake from "./fakeData.json";

export const loaderItemListMenu = async (): Promise<ItemsMenuProps[]> => {
  return await new Promise((resolve, __) => {
    setTimeout(() => {
      resolve(fake as ItemsMenuProps[]);
    }, 1000);
  });
};
