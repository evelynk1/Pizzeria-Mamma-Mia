import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-box text-center">

        <h2 className="mb-4">Perfil</h2>

        <p className="mb-3">
          <strong>Email:</strong>
        </p>

        <p className="mb-4 text-warning">{user?.email}</p>

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
