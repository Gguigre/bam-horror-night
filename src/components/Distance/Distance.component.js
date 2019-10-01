import React from "react";
import distance from "gps-distance";

export function Distance({
  coords,
  clue,
  isGeolocationAvailable,
  isGeolocationEnabled
}) {
  const distanceToClue = coords
    ? Math.floor(
        distance(
          coords.latitude,
          coords.longitude,
          clue.coords.latitude,
          clue.coords.longitude
        ) * 1000
      )
    : 0;

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <span>Détective ! Vous êtes à {distanceToClue}m de votre indice !</span>
  ) : (
    <div>Getting the location data</div>
  );
}
