export interface ItemsMenuProps {
  id: number;
  position: number;
  title: string;
  route: string;
  enabled: boolean;
  protected: boolean;
  internal: boolean;
  children?: ItemsMenuProps[];
  expanded?: boolean;
  iconname?: string;
  description?: string;
}
