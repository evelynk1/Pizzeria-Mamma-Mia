import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Profile = () => {

  // hook para redirigir
  const navigate = useNavigate();

  // obtenemos datos del usuario y logout
  const { user, logout } = useContext(UserContext);

  /*
  =====================================================
  FUNCION LOGOUT
  =====================================================
  */
  const handleLogout = () => {
    logout();        // limpia token y usuario
    navigate("/");   // redirige al home
  };

  return (
    <div className="auth-container">
      <div className="auth-box text-center">

        <h2 className="mb-4">Perfil</h2>

        {/* etiqueta */}
        <p className="mb-3">
          <strong>Email:</strong>
        </p>

        {/* mostramos email del usuario */}
        <p className="mb-4 text-warning">
          {user?.email} 
        </p>

        {/* botón logout */}
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