export interface ItemsMenuProps {
  id: number;
  position: number;
  title: string;
  route: string;
  isEnabled: boolean;
  isProtected: boolean;
  internal: boolean;
  children?: ItemsMenuProps[];
  isExpanded?: boolean;
  iconname?: string;
  description?: string;
}
