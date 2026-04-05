import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Simulación de usuario 
  const user = {
    email: "usuario@email.com",
  };

  const handleLogout = () => {
    //  limpiar token o estado global
    alert("Sesión cerrada");

    // Redirige al home
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-box text-center">

        <h2 className="mb-4">Perfil</h2>

        <p className="mb-3">
          <strong>Email:</strong>
        </p>

        <p className="mb-4 text-warning">{user.email}</p>

        <button
          className="btn btn-danger w-100"
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>

      </div>
    </div>
  );
};

export default Profile;