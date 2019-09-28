import React from "react";

export function Step({
  match,
  isGeolocationAvailable,
  isGeolocationEnabled,
  coords
}) {
  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <span>
      {coords.latitude} {coords.longitude}
    </span>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
}
