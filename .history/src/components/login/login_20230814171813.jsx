import React, { useState } from 'react';
import '../login/login.css'
import { Link } from 'react-router-dom';
import G from "../../img/google.svg"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'usuario' && password === 'contraseña') {
      setIsLoggedIn(true);
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  const handleGoogleLogin = () => {
    // Agrega aquí la lógica para iniciar sesión con Google
    alert('Iniciar sesión con Google');
  };

  return (
    <div className="login-container d-center">
      {isLoggedIn ? (
        <p>Bienvenido, {username}!</p>
      ) : (
        <div className="login-form">
          <button><Link to="/">Volver</Link></button>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Iniciar Sesión</button>
          <button onClick={handleGoogleLogin} className="google-button">
            <img src={G}></img>
          </button>
          <div>
            <button><Link to="/register"> Registrarse </Link></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
