import React from "react";
import { LoginModal } from "../../Components/LoginForm/LoginForm";

export function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <LoginModal />
    </div>
  );
}
