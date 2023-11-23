import { Menu, NavBar } from "../components";
import { Basiclayout } from "./Basiclayout";

export const PublicLayout = () => {
  return (
    <Basiclayout>
      <NavBar>
        <Menu />
      </NavBar>
    </Basiclayout>
  );
};
