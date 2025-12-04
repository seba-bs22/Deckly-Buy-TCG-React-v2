import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Campos login
  const [emailLogin, setEmailLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");

  // Campos register
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passReg, setPassReg] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // --------------------------
  // LOGIN
  // --------------------------
  const handleLogin = async () => {
    if (!emailLogin || !passLogin) {
      setErrorMsg("Por favor completa todos los campos.");
      return;
    }

    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:8080/api/users`);
      const data = await res.json();

      // Buscar usuario por correo
      const user = data.find(u => u.correo === emailLogin);

      if (!user || user.contraseña !== passLogin) {
        setErrorMsg("Correo o contraseña incorrectos.");
      } else {
        // Login exitoso
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Error al iniciar sesión.");
    } finally {
      setLoading(false);
    }
  };

  // --------------------------
  // REGISTRO
  // --------------------------
  const handleRegister = async () => {
    if (!nombre || !apellido || !emailReg || !passReg) {
      setErrorMsg("Por favor completa todos los campos.");
      return;
    }

    setErrorMsg("");
    setLoading(true);

    const newUser = {
      nombre,
      apellido,
      correo: emailReg,       // CORRECCIÓN: coincide con UserDTO
      contraseña: passReg     // CORRECCIÓN: coincide con UserDTO
    };

    try {
      const res = await fetch(`http://localhost:8080/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (res.ok) {
        navigate("/home");
      } else {
        const errData = await res.json();
        setErrorMsg(errData.message || "Error al registrarse.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Error al registrarse.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="zona-contacto">
      <div className="formulario-contacto">
        {isLogin ? (
          <>
            <h1>Iniciar sesión</h1>
            <p>Accede a tu cuenta para comprar, vender o gestionar tus cartas TCG.</p>

            <h4>Correo electrónico</h4>
            <input
              type="email"
              placeholder="Ej: usuario@correo.com"
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
            />

            <h4>Contraseña</h4>
            <input
              type="password"
              placeholder="••••••••"
              value={passLogin}
              onChange={(e) => setPassLogin(e.target.value)}
            />

            {errorMsg && <div className="mensaje-formulario">{errorMsg}</div>}

            <button className="btn-enviar" onClick={handleLogin} disabled={loading}>
              {loading ? "Ingresando..." : "INGRESAR"}
            </button>

            <button
              className="btn-enviar"
              style={{ marginTop: "30px", backgroundColor: "#444" }}
              onClick={() => {
                setIsLogin(false);
                setErrorMsg("");
              }}
            >
              CREAR CUENTA
            </button>
          </>
        ) : (
          <>
            <h1>Crear cuenta</h1>
            <p>Regístrate para gestionar tus cartas TCG.</p>

            <h4>Nombre</h4>
            <input
              type="text"
              placeholder="Ej: Juan"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            <h4>Apellido</h4>
            <input
              type="text"
              placeholder="Ej: Pérez"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />

            <h4>Correo electrónico</h4>
            <input
              type="email"
              placeholder="Ej: usuario@correo.com"
              value={emailReg}
              onChange={(e) => setEmailReg(e.target.value)}
            />

            <h4>Contraseña</h4>
            <input
              type="password"
              placeholder="••••••••"
              value={passReg}
              onChange={(e) => setPassReg(e.target.value)}
            />

            {errorMsg && <div className="mensaje-formulario">{errorMsg}</div>}

            <button className="btn-enviar" onClick={handleRegister} disabled={loading}>
              {loading ? "Registrando..." : "REGISTRARSE"}
            </button>

            <button
              className="btn-regresar"
              onClick={() => {
                setIsLogin(true);
                setErrorMsg("");
              }}
            >
              YA TENGO CUENTA
            </button>
          </>
        )}
      </div>
    </main>
  );
};

export default Login;
