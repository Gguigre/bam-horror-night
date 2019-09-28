import React from "react";
import teams from "../../config.json";
import "../../App.css";
import { Distance } from "../../components/Distance";
import { SubmitButton } from "../../components/SubmitButton";

export function Step({
  match,
  isGeolocationAvailable,
  isGeolocationEnabled,
  coords
}) {
  const team = teams.find(team => team.id === match.params.teamId);
  const clue = team.steps.find(step => step.id === match.params.stepId);

  return (
    <>
      <div className="Container" style={{ overflow: "scroll" }}>
        <span role="img" style={{ fontSize: 54 }} aria-label="ghost">
          👻
        </span>
        <span>{clue.text}</span>
        <img
          style={{ marginTop: 16, marginBottom: 16 }}
          src={clue.pictureUrl}
          alt="indice"
          width={(5 * window.innerWidth) / 6}
        />
        <SubmitButton team={team} />
      </div>
      <div className="Footer">
        <Distance clue={clue} />
      </div>
    </>
  );
}
