import { Outlet } from "react-router-dom";
import { Footer, Menu, NavBar } from "../components";

export const PublicLayout = () => {
  return (
    <div>
      <header>
        <NavBar>
          <Menu />
        </NavBar>
      </header>

      <main style={{ marginTop: "5em", padding: "1em" }}>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
