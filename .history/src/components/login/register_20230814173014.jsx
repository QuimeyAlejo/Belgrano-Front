import React, { useState } from 'react'
import {Link} from 'react-router-dom'
export default function register() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail ]= useState('');
  const [adress, setAdress] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>

        <form>
        <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Direccion"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
          {/* <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /> */}
           <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button>Crear cuenta</button>
    </div>
  )
}
