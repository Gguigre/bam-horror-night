import React, { Component } from "react";
import distance from "gps-distance";
import "./SubmitButton.css";

const TRESHOLD_DISTANCE = 50;

export class SubmitButton extends Component {
  checkPosition = () => {
    const { team, clue, coords } = this.props;

    const distanceToClue = Math.floor(
      distance(
        coords.latitude,
        coords.longitude,
        clue.coords.latitude,
        clue.coords.longitude
      ) * 1000
    );
    const nextStepIndex = team.steps.findIndex(step => step.id === clue.id) + 1;
    if (distanceToClue <= TRESHOLD_DISTANCE) {
      if (team.steps[nextStepIndex]) {
        this.props.history.push(
          `/step/${team.id}/${team.steps[nextStepIndex].id}`
        );
      } else {
        this.props.history.push(`/laststep-didyoutrytoforgeurl/${team.id}`);
      }
    } else {
      alert(
        `🤔 Hum, je ne crois pas... Je te vois à ${distanceToClue}m de l'indice ${nextStepIndex}`
      );
    }
  };

  render() {
    const { coords } = this.props;
    if (coords) {
      return (
        <button
          style={{
            backgroundColor: this.props.team.color
          }}
          onClick={this.checkPosition}
        >
          J'y suis !
        </button>
      );
    } else {
      return null;
    }
  }
}
