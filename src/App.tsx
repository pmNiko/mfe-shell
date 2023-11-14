import { Suspense } from "react";
import ParcelTest from "./parcels/ParcelTest";

function App() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos placeat at
        autem nobis beatae. Asperiores atque velit distinctio adipisci quod est
        sapiente, perferendis laboriosam totam reprehenderit ut voluptatum,
        ratione iste.
      </p>
      <Suspense fallback={<div>Cargando...</div>}>
        <ParcelTest />
      </Suspense>
    </>
  );
}

export default App;
