import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import OddsCard from "./components/OddsCard";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/odds" className="navbar-brand">
          Nhl Odds
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/odds"} className="nav-link">
              Matchups
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<OddsCard/>} />
          <Route path="/odds" element={<OddsCard/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
