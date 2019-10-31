import React from "react";
import teams from "../../config.json";
import "../../App.css";
import { Distance } from "../../components/Distance";
import { SubmitButton } from "../../components/SubmitButton";
import spider from "../../assets/spider.png";

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
      <div className="Container">
      <img src={spider} style={{ position: "absolute", right: 0, top: 0, height: 100 }} alt=""/>
        <div style={{ paddingTop: 32, paddingBottom: 128 }}>
          <div style={{ textAlign: "center" }}>
            <span role="img" style={{ fontSize: 54 }} aria-label="ghost">
              👻
            </span>
          </div>
          <br />
          <span>{clue.text}</span>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ marginTop: 16, marginBottom: 16 }}
              src={clue.pictureUrl}
              alt="indice"
              width={(5 * window.innerWidth) / 6}
            />
            <SubmitButton team={team} clue={clue} />
          </div>
        </div>
      </div>
      <div className="Footer">
        <Distance clue={clue} />
      </div>
    </>
  );
}
