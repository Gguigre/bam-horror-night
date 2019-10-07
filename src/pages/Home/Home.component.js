import React, { Component } from "react";
import "./Home.css";
import "../../App.css";
import { Link } from "react-router-dom";
import { BigButton } from "../../components/BigButton";
import teams from "../../config.json";

export class Home extends Component {
  constructor() {
    super();
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.handleButtonRelease = this.handleButtonRelease.bind(this);
  }

  navigateToCheat = () => {
    this.props.history.push("/cheat");
  };

  handleButtonPress() {
    this.buttonPressTimer = setTimeout(this.navigateToCheat, 1500);
  }
  handleButtonRelease() {
    clearTimeout(this.buttonPressTimer);
  }

  render() {
    return (
      <div className="Container">
        <div className="VerticallyCentered">
          <div
            onTouchStart={this.handleButtonPress}
            onTouchEnd={this.handleButtonRelease}
            onMouseDown={this.handleButtonPress}
            onMouseUp={this.handleButtonRelease}
            onMouseLeave={this.handleButtonRelease}
            style={{ textAlign: "center" }}
          >
            <span role="img" style={{ fontSize: 54 }} aria-label="ghost">
              👻
            </span>
          </div>
          <span className="Intro">
            Bonjour détective, de quelle agence fais-tu partie ?
          </span>
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
        </div>
      </div>
    );
  }
}
