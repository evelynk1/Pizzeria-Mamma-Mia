const NotFound = () => {
  return (
    <div className="text-center my-5">
      <h1>404 - Página no encontrada</h1>
      <p>La ruta que intentas visitar no existe.</p>
      <a href="/" className="btn btn-dark mt-3">Volver al inicio</a>
    </div>
  );
};

export default NotFound;
