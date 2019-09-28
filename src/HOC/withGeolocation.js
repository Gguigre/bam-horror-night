import { geolocated } from "react-geolocated";

export const withGeolocation = geolocated({
  positionOptions: {
    enableHighAccuracy: true,
    watchPosition: true
  },
  userDecisionTimeout: 5000,
  geolocationProvider: navigator.geolocation
});
