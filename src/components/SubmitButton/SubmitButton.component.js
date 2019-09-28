import React, { Component } from "react";
import distance from "gps-distance";

export class SubmitButton extends Component {
  checkPosition = () => {
    const { team, coords } = this.props;
    let found = false;
    team.steps.map((step, index) => {
      const distanceToClue = distance(
        coords.latitude,
        coords.longitude,
        step.coords.latitude,
        step.coords.longitude
      );
      if (distanceToClue <= 0.05) {
        found = true;
        this.props.history.push(`/step/${team.id}/${team.steps[index + 1].id}`);
      }
    });
    if (!found) alert(`🤔 Hum, je ne crois pas...`);
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
