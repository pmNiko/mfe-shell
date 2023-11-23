import { Outlet } from "react-router-dom";
import { Footer } from "../components";

export const Basiclayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <header>{children}</header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
