import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <main className="zona-contacto">
    <div className="formulario-contacto">
      <h1>Iniciar sesión</h1>
      <p>Accede a tu cuenta para comprar, vender o gestionar tus cartas TCG.</p>

      <h4>Correo electrónico</h4>
      <input type="email" placeholder="Ej: usuario@correo.com" />

      <h4>Contraseña</h4>
      <input type="password" placeholder="••••••••" />

      <div id="mensaje-login" className="mensaje-formulario"></div>

      <button className="btn-enviar">INGRESAR</button>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <button className="btn-regresar">← REGRESAR</button>
      </Link>
    </div>
  </main>
);

export default Login;
