import React, { Component } from "react";
import "./BigButton.css";

export class BigButton extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: this.props.color }}
        className="button"
        onClick={this.props.onPress}
      >
        <span
          style={{
            fontWeight: 600
          }}
          className="label"
        >
          {this.props.label}
        </span>
      </div>
    );
  }
}
