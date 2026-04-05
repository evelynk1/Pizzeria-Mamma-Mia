import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMensaje("");
    setTipo("");

    if (!email || !password) {
      setMensaje("Todos los campos son obligatorios");
      setTipo("error");
      return;
    }

    if (password.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres");
      setTipo("error");
      return;
    }

    setMensaje("Login exitoso");
    setTipo("success");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h3 className="mb-4 text-center">Login</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control input-dark mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control input-dark mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-light w-100">
            LOGIN
          </button>
        </form>

        {mensaje && (
          <div className={`mt-3 text-center ${tipo === "success" ? "text-success" : "text-danger"}`}>
            {mensaje}
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;