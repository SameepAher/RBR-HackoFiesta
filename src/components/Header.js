import React from "react";

export default function Header() {
  return (
    <div>
      <>
        <header className="fixed-top py-3">
          <div className="container d-flex align-items-center justify-content-between">
            <a href="#" className="logo">
              S<span className="fas fa-broom"></span>wacchh
            </a>

            <div
              id="menu-bar"
              className="fas fa-bars d-inline-block d-md-none"
            ></div>

            <nav className="nav">
              <a href="#home" className="active">
                home
              </a>
              <a href="#prevent">Waste Disposal</a>
              <a href="#login">Login</a>
              <a href="#">Sign Up</a>
            </nav>
          </div>
        </header>
      </>
    </div>
  );
}
