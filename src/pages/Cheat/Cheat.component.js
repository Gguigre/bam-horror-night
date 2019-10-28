import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import teams from "../../config.json";

export function Cheat({ coords }) {
  return (
    <div className="Container">
      {coords ? (
        <div>
          Détective! Tu es géolocalisé aux coordonnées
          <br />
          <strong>Lat :</strong>
          {coords.latitude}
          <br />
          <strong>Lon :</strong>
          {coords.longitude}
        </div>
      ) : (
        <div>?</div>
      )}
      {teams.map(team => (
        <div style={{ margin: 16, textAlign: "center" }}>
          <div style={{ marginBottom: 8 }}>
            <strong style={{ color: team.color }}>{team.label}</strong>
          </div>
          {team.steps.map((step, index) => {
            console.log(team.steps[index].id);
            return (
              <div>
                <Link
                  style={{ textDecoration: "none", color: "#FFF" }}
                  to={`/step/${team.id}/${team.steps[index].id}`}
                >
                  <strong>Étape {index + 1}</strong>
                </Link>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
