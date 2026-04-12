/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

// Creamos el contexto global de usuario
export const UserContext = createContext();

// URL base del backend
const API_URL = "http://localhost:5000/api";

// Providerenvuelve toda la app y comparte datos
const UserProvider = ({ children }) => {

  //  Estado del token (se guarda en localStorage para persistencia)
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  //  Estado del usuario (ej: email)
  const [user, setUser] = useState(null);

  //  Estado de carga (sirve para saber si se está validando sesión)
  const [loading, setLoading] = useState(
    Boolean(localStorage.getItem("token"))
  );

  /*
  =====================================================
   SE EJECUTA CUANDO CAMBIA EL TOKEN
  =====================================================
  - Si hay token valida sesión con /auth/me
  - Si NO hay token  limpia usuario
  */
  useEffect(() => {

    // Si NO hay token =) limpiar todo
    if (!token) {
      setUser(null);
      setLoading(false);
      localStorage.removeItem("token");
      return;
    }

    //  Guardamos token en localStorage
    localStorage.setItem("token", token);

    //  Función para obtener perfil del usuario autenticado
    const fetchProfile = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${API_URL}/auth/me`, {
          headers: {
            // Enviamos token JWT en el header
            Authorization: `Bearer ${token}`,
          },
        });

        // Si falla = token inválido
        if (!response.ok) {
          throw new Error("No se pudo validar la sesión");
        }

        //  Guardamos datos del usuario 
        const data = await response.json();
        setUser(data);

      } catch (error) {
        console.error(error);

        // Si hay error = cerrar sesión automáticamente
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);

      } finally {
        setLoading(false);
      }
    };

    // Ejecutamos la función
    fetchProfile();

  }, [token]);



  /*
  =====================================================
  FUNCIÓN GENERAL DE AUTENTICACIÓN
  =====================================================
  - Sirve  para login como register
  - Recibe endpoint ("login" o "register")
  - Envía email y password al backend
  */
  const authenticate = async (endpoint, credentials) => {

    const response = await fetch(`${API_URL}/auth/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    // Si falla la petición= error
    if (!response.ok) {
      throw new Error(data.error || "Ocurrió un error en la autenticación");
    }

    //  Guardamos token recibido del backend
    setToken(data.token);

    // Guardamos email del usuario
    setUser({ email: data.email });

    return data;
  };



  /*
  =====================================================
   LOGIN
  =====================================================
  - Llama a authenticate con endpoint "login"
  */
  const login = (credentials) => authenticate("login", credentials);



  /*
  =====================================================
   REGISTER
  =====================================================
  - Llama a authenticate con endpoint "register"
  */
  const register = (credentials) => authenticate("register", credentials);



  /*
  =====================================================
 LOGOUT
  =====================================================
  - Elimina token
  - Limpia usuario
  */
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };



  /*
  =====================================================
   VALORES DISPONIBLES GLOBALMENTE
  =====================================================
  */
  return (
    <UserContext.Provider 
      value={{ 
        token,     // JWT
        user,      // info usuario (email)
        loading,   // estado de carga
        login,     // función login
        register,  // función register
        logout     // función logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};


export default UserProvider;