import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

/*  rutas */
import { Routes, Route, Navigate } from 'react-router-dom'

/* Hook para usar el contexto */
import { useContext } from 'react'

/* Páginas */
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

/* Contexto de usuario */
import { UserContext } from './context/UserContext';


/* =========================
   RUTA PROTEGIDA
   =========================
   - Solo deja pasar si hay token
   - Si NO hay token → redirige a login
*/
function ProtectedRoute({ children }) {
  const { token } = useContext(UserContext);

  return token 
    ? children 
    : <Navigate to="/login" replace />;
}


/* =========================
   RUTA SOLO PÚBLICA
   =========================
   - Si el usuario YA está logueado
     NO puede entrar a login/register
   - Se redirige al HOME
*/
function PublicOnlyRoute({ children }) {
  const { token } = useContext(UserContext);

  return token 
    ? <Navigate to="/" replace /> 
    : children;
}


function App() {
  return (
    <>
      {/* Navbar siempre visible */}
      <Navbar />

      <Routes>

        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/*  Registro (solo si NO está logueado) */}
        <Route
          path="/register"
          element={
            <PublicOnlyRoute>
              <Register />
            </PublicOnlyRoute>
          }
        />

        {/* Login (solo si NO está logueado) */}
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        />

        {/* Carrito (acceso libre) */}
        <Route path="/cart" element={<Cart />} />

        {/*  Detalle de pizza con parámetro dinámico */}
        <Route path="/pizza/:id" element={<Pizza />} />

        {/* Perfil (protegido) */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Ruta no encontrada */}
        <Route path="*" element={<NotFound />} />

      </Routes>

      {/* Footer siempre visible */}
      <Footer />
    </>
  )
}

export default App;