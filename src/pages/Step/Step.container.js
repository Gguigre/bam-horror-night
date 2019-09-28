import { geolocated } from "react-geolocated";
import { Step } from "./Step.component";

export const StepContainer = geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 5000
})(Step);
