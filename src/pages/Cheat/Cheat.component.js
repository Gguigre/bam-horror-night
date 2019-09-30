import React from "react";
import "../../App.css";

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
    </div>
  );
}
