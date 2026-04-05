import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {
  const [view, setView] = useState("home");

  return (
    <>
      <Navbar setView={setView} />
      {view === "home" && <Home />}
      {view === "register" && <Register />}
      {view === "login" && <Login />}
      <Cart />
      <Footer />
    </>
  );
}

export default App;


