import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext.tsx";
import { useHistory } from "react-router-dom";

export const LoginModal: React.FC = () => {
  const [login, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUserRole } = useAuth(); // Dostęp do setUserRole z Context

  const Rediirect = (role: string) =>{
    console.log("Wykonalo sie");
    return redirect(`/${role}page`);
  }

  const handleLogin = async () => {
    try {
      const loginData = { login, password };

      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const responseData: { rola: string } = await response.json();
        setUserRole(responseData.rola); // Ustawienie roli za pomocą Context
        console.log("Stan użytkownika ustawiony poprawnie:", responseData.rola);
        Rediirect(responseData.rola);
      } else {
        setError("Niepoprawne dane logowania");
      }
    } catch (error) {
      console.error("Błąd logowania:", error);
      setError("Wystąpił błąd podczas logowania");
    }
  };


  return (
    <div>
      <div>
        <h2>Login</h2>
        <label>
          Username:
          <input
            type="text"
            value={login}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={handleLogin}>Log in</button>
      </div>
    </div>
  );
};
