import { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMensaje("");
    setTipo("");

    // Validación campos vacíos
    if (!email || !password) {
      setMensaje("Todos los campos son obligatorios");
      setTipo("error");
      return;
    }

    // Validación contraseña
    if (password.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres");
      setTipo("error");
      return;
    }

    // Éxito
    setMensaje("Login exitoso");
    setTipo("success");
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      
      <div className="login-box text-white">
        
        <h3 className="mb-4">Login</h3>

        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <input
              type="email"
              className="form-control input-dark"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control input-dark"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between small mb-4">
            <div>
              <input type="checkbox" /> Recuerdame
            </div>
            <span>¿Olvidaste tu contraseña?</span>
          </div>

          <button type="submit" className="btn btn-light w-100">
            LOGIN
          </button>
        </form>

        {/*  MENSAJE */}
        {mensaje && (
          <div
            className={`mt-3 text-center ${
              tipo === "success" ? "text-success" : "text-danger"
            }`}
          >
            {mensaje}
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;