import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { BigButton } from "../../components/BigButton";
import teams from "../../config.json";

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <span role="img" style={{ fontSize: 54 }} aria-label="ghost">
          👻
        </span>
        Bonjour détective, de quelle agence fais-tu partie ?
        <div style={{ padding: 16 }}>
          {teams.map(team => (
            <div style={{ margin: 16 }} key={team.id}>
              <Link
                style={{ textDecoration: "none", color: "#FFF" }}
                to={`/step/${team.id}/${team.steps[0].id}`}
              >
                <BigButton color={team.color} label={team.label}></BigButton>
              </Link>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}
