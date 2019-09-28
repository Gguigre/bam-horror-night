import React from "react";
import teams from "../../config.json";
import "../../App.css";
import { Distance } from "../../components/Distance";

export function Step({
  match,
  isGeolocationAvailable,
  isGeolocationEnabled,
  coords
}) {
  const clue = teams
    .find(team => team.id === match.params.teamId)
    .steps.find(step => step.id === match.params.stepId);

  return (
    <>
      <div className="Container" style={{ overflow: "scroll" }}>
        <span role="img" style={{ fontSize: 54 }} aria-label="ghost">
          👻
        </span>
        <span style={{ marginBottom: 16 }}>{clue.text}</span>
        <img
          src={clue.pictureUrl}
          alt="indice"
          width={(5 * window.innerWidth) / 6}
        />
      </div>
      <div className="Footer">
        <Distance clue={clue} />
      </div>
    </>
  );
}
