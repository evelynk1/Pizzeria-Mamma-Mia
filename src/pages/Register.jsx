import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [tipo, setTipo] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setTipo("");

    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios");
      setTipo("error");
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres");
      setTipo("error");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden");
      setTipo("error");
      return;
    }

    try {
      setSubmitting(true);
      await register({ email, password });
      setMessage("Registro exitoso");
      setTipo("success");
      navigate("/profile");
    } catch (error) {
      setMessage(error.message);
      setTipo("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box register">

        <h2 className="text-center mb-4">Registro</h2>

        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-light w-100" disabled={submitting}>
            {submitting ? "Registrando..." : "Registrarse"}
          </button>
        </form>

        {message && (
          <p className={`mt-3 text-center fw-bold ${tipo === "success" ? "text-success" : "text-danger"}`}>
            {message}
          </p>
        )}

      </div>
    </div>
  );
};

export default Register;
