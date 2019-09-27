import React from "react";

export function Step({ match }) {
  return <span>{JSON.stringify(match.params)}</span>;
}
