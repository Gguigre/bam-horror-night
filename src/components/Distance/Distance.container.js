import { geolocated } from "react-geolocated";
import { Distance } from "./Distance.component";

export const DistanceContainer = geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 5000
})(Distance);
