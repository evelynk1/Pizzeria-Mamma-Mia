/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

// Creamos el contexto
export const UserContext = createContext();

const API_URL = "http://localhost:5000/api";

// Provider: envuelve la app y entrega los datos
const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(Boolean(localStorage.getItem("token")));

  useEffect(() => {
    if (!token) {
      setUser(null);
      setLoading(false);
      localStorage.removeItem("token");
      return;
    }

    localStorage.setItem("token", token);

    const fetchProfile = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${API_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("No se pudo validar la sesión");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  const authenticate = async (endpoint, credentials) => {
    const response = await fetch(`${API_URL}/auth/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Ocurrió un error en la autenticación");
    }

    setToken(data.token);
    setUser({ email: data.email });

    return data;
  };

  const login = (credentials) => authenticate("login", credentials);

  const register = (credentials) => authenticate("register", credentials);

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    // Aquí exponemos lo que otros componentes podrán usar
    <UserContext.Provider value={{ token, user, loading, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Exportamos el Provider para usarlo en App.jsx
export default UserProvider;
