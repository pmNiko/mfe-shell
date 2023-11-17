import { Suspense, useEffect, useState } from "react";
import Parcel from "./parcels/ParcelTest";

function App() {
  const [data, setData] = useState({});

  const handleEvent = (detail: any) => {
    setData({ ...detail.detail });
  };

  useEffect(() => {
    window.addEventListener("EVENT_TEST", handleEvent);

    return () => {
      window.removeEventListener("EVENT_TEST", handleEvent);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("EVENT_SEND_PRODUCT", handleEvent);

    return () => {
      window.removeEventListener("EVENT_SEND_PRODUCT", handleEvent);
    };
  }, []);

  return (
    <>
      <div
        style={{
          margin: "auto",
          minWidth: "350px",
          maxWidth: "750px",
          borderRadius: "5px",
          border: "1px solid rgba(0,0,0, 0.2)",
          boxShadow: "3px 6px 5px rgba(0,0,0, 0.3)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            padding: "1em",
            margin: "0.1em",
            background: "rgba(44, 163, 242, 0.8)",
            boxShadow: "6px 3px 5px 4px rgba(44, 163, 242, 0.2)",
          }}
        >
          <p style={{ fontSize: "1.3em", fontWeight: "bold", color: "white" }}>
            Inyección del módulo federado
          </p>

          {Object.entries(data).length > 0 && (
            <div style={{ marginTop: "2em" }}>
              <ul></ul>
              <div
                style={{
                  minWidth: "250px",
                  textAlign: "start",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "-1.5em",
                }}
              >
                <ul>
                  <p style={{ marginLeft: "-1em" }}>
                    Datos recibidos desde el parcel
                  </p>

                  {Object.entries(data).map((ele) => (
                    <li key={ele[0]}>
                      {ele[0]}: {`${ele[1]}`}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                style={{
                  borderRadius: " 5px",
                  border: "1px solid rgba(0,0,0,0.2)",
                  background: "black",
                  color: "white",
                  boxShadow: "5px 3px 7px rgba(0,0,0,0.5)",
                  fontSize: "0.85em",
                  fontWeight: "bold",
                  padding: "10px",
                  marginTop: "2em",
                  marginBottom: "2em",
                  cursor: "pointer",
                }}
                onClick={() => setData({})}
              >
                Limpiar datos
              </button>
            </div>
          )}
        </div>
      </div>
      <Suspense fallback={<div>Cargando...</div>}>
        <div style={{ marginTop: "-4em" }}>
          <Parcel />
        </div>
      </Suspense>
    </>
  );
}

export default App;
