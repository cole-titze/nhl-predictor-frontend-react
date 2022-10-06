import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MatchupView from "./views/MatchupView";
import TeamListView from "./views/TeamListView"

function App() {
  return (
    <div className="app">
      <nav className="navbar navbar-expand navbar-dark bg-dark header">
        <a href="/odds" className="navbar-brand">
          Nhl Odds
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/odds"} className="nav-link">
              Matchups
            </Link>
          </li>
          <li>
            <Link to={"/teams"} className="nav-link">
              Teams
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3 main">
        <Routes>
          <Route path="/" element={<MatchupView/>} />
          <Route path="/odds" element={<MatchupView/>} />
          <Route path="/teams" element={<TeamListView/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
