import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {

  // Estados para manejar formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Estados para mostrar mensajes al usuario
  const [mensaje, setMensaje] = useState("");
  const [tipo, setTipo] = useState(""); // success o error

  // Estado para deshabilitar botón mientras se envía
  const [submitting, setSubmitting] = useState(false);

  // Obtenemos función login desde el contexto
  const { login } = useContext(UserContext);

  // para redirigir
  const navigate = useNavigate();


  /*
  =====================================================
   ENVÍO DEL FORMULARIO
  =====================================================
  */
  const handleSubmit = async (e) => {
    e.preventDefault(); // evita recarga de página

    // Limpiamos mensajes anteriores
    setMensaje("");
    setTipo("");

    //  Validación campos vacíos
    if (!email || !password) {
      setMensaje("Todos los campos son obligatorios");
      setTipo("error");
      return;
    }

    //  Validación contraseña mínima
    if (password.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres");
      setTipo("error");
      return;
    }

    try {
      setSubmitting(true);

      // Llamamos al login del contexto
      // Esto hace el fetch al backend (/api/auth/login)
      await login({ email, password });

      // Si todo sale bien
      setMensaje("Login exitoso");
      setTipo("success");

      // Redirige al perfil
      navigate("/profile");

    } catch (error) {

      // Si falla 
      setMensaje(error.message);
      setTipo("error");

    } finally {
      //  Reactiva botón
      setSubmitting(false);
    }
  };


  return (
    <div className="auth-container">
      <div className="auth-box">

        <h3 className="mb-4 text-center">Login</h3>

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit}>

          {/* INPUT EMAIL */}
          <input
            type="email"
            className="form-control input-dark mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/*  INPUT PASSWORD */}
          <input
            type="password"
            className="form-control input-dark mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* BOTÓN */}
          <button 
            type="submit" 
            className="btn btn-light w-100" 
            disabled={submitting}
          >
            {/* Cambia texto mientras carga */}
            {submitting ? "Ingresando..." : "LOGIN"}
          </button>
        </form>

        {/* MENSAJES */}
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