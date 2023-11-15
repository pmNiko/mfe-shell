import { Suspense, useEffect } from "react";
import ParcelTest from "./parcels/ParcelTest";

function App() {
  useEffect(() => {
    const handleAddToCart = (detail: any) => {
      console.log(detail.detail);
    };
    window.addEventListener("ADD_TO_CART_TEST", handleAddToCart);

    return () => {
      window.removeEventListener("ADD_TO_CART_TEST", handleAddToCart);
    };
  }, []);

  useEffect(() => {
    const handleTestEvent = (detail: any) => {
      console.log(detail.detail);
    };
    window.addEventListener("EVENT_TEST", handleTestEvent);

    return () => {
      window.removeEventListener("EVENT_TEST", handleTestEvent);
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: "90%",
          minWidth: "350px",
          borderRadius: "5px",
          border: "1px solid rgba(0,0,0, 0.2)",
          boxShadow: "3px 6px 5px rgba(0,0,0, 0.3)",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1em", fontWeight: "bold" }}>
          Primera inyección de un parcel
        </p>
      </div>
      <Suspense fallback={<div>Cargando...</div>}>
        <ParcelTest />
      </Suspense>
    </>
  );
}

export default App;
