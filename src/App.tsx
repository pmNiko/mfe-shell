import { Suspense, useEffect, useState } from "react";
import Parcel from "./parcels/ParcelTest";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const handleAddToCart = (detail: any) => {
      console.log(detail.detail);
      // setData(detail.details);
    };
    window.addEventListener("ADD_TO_CART_TEST", handleAddToCart);

    return () => {
      window.removeEventListener("ADD_TO_CART_TEST", handleAddToCart);
    };
  }, []);

  useEffect(() => {
    const handleTestEvent = (detail: any) => {
      console.log(detail.detail);
      setData(detail.details);
    };
    window.addEventListener("EVENT_TEST", handleTestEvent);

    return () => {
      window.removeEventListener("EVENT_TEST", handleTestEvent);
    };
  }, []);

  console.log(data);

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

        {/* {Object.entries(data).length > 0 && ( */}
        {/* <div>Datos recibidos: {JSON.stringify(data)}</div> */}
        {/* )} */}
      </div>
      <Suspense fallback={<div>Cargando...</div>}>
        <Parcel />
      </Suspense>
    </>
  );
}

export default App;
