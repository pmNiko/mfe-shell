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
        marginTop: "3rem",
        marginBottom: "3rem",
      }}
    >
      <p>Módulo en mantenimiento</p>
      <img src="https://uegfm.org/assets/img/cons2.gif" alt="" />
    </div>
  );
};

export default ResourceNotAvailable;
