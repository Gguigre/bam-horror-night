import React, { Component } from "react";
import distance from "gps-distance";

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
      this.props.history.push(
        `/step/${team.id}/${team.steps[nextStepIndex].id}`
      );
    } else {
      alert(
        `🤔 Hum, je ne crois pas... Il te reste ${distanceToClue} pour l'indice ${nextStepIndex}`
      );
    }
  };

  render() {
    const { coords } = this.props;
    if (coords) {
      return (
        <button
          style={{
            fontSize: 16,
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
