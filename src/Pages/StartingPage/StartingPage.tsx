import React from "react";
import { LoginModal } from "../../Components/LoginForm/LoginForm";
import { Header } from "../../Components/Header/Header";

export function Home() {
  return (
    <div className="home-container">
    <Header></Header>
      <h1>Welcome to the Home Page</h1>
      <LoginModal />
    </div>
  );
}
