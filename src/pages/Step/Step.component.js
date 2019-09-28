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
    <div className="Container">
      <Distance clue={clue} />
    </div>
  );
}
