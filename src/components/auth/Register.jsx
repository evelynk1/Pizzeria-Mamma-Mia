import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios");
      return;
    }
    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden");
      return;
    }

    setMessage("Registro exitoso");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-box">

        <h2 className="text-center mb-4">Registro</h2>

        <input
          type="email"
          placeholder="Email"
          className="form-control input-dark mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="form-control input-dark mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmar contraseña"
          className="form-control input-dark mb-4"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-light w-100">
          Registrarse
        </button>

        {message && (
          <p className="mt-3 text-center fw-bold text-danger">
            {message}
          </p>
        )}

      </form>
    </div>
  );
};

export default Register;