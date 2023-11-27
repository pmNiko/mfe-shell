import { Footer, NavBar } from "../components";
import ResourceNotAvailable from "../components/ResourceNotAvailable";

export const SupportLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main style={{ minHeight: "80vh", marginTop: "1em" }}>
        <ResourceNotAvailable />
      </main>

      <footer style={{ marginTop: "2em" }}>
        <Footer />
      </footer>
    </div>
  );
};
