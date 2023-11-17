const ResourceNotAvailable = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "12rem",
        width: "12rem",
        margin: "auto",
        boxShadow: "2px 3px 4px 0px rgba(0,0,0,0.4)",
        marginTop: "10rem",
        marginBottom: "3rem",
        textAlign: "center",
      }}
    >
      <p style={{ fontWeight: "bold" }}>Módulo en mantenimiento</p>
      <img src="/mantenimiento.gif" alt="" />

      <button
        style={{
          borderRadius: "0px 0px 5px 5px",
          border: "1px solid rgba(0,0,0,0.2)",
          background: "#2ea3f2",
          color: "white",
          boxShadow: "5px 3px 7px rgba(0,0,0,0.2)",
          fontSize: "0.85em",
          fontWeight: "bold",
          padding: "3px",
        }}
        onClick={() => window.location.reload()}
      >
        Recargar
      </button>
    </div>
  );
};

export default ResourceNotAvailable;
