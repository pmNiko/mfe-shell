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

      <main style={{ minHeight: "75vh" }}>
        <Outlet />
      </main>

      <footer style={{ marginTop: "2em" }}>
        <Footer />
      </footer>
    </div>
  );
};
