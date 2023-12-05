import React, { useState } from "react";

export const LoginModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log("Poprawne Dane");
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
            value={username}
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
}
