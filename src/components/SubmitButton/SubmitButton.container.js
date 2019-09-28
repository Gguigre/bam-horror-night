import { withGeolocation } from "../../HOC/withGeolocation";
import { SubmitButton } from "./SubmitButton.component";
import { withRouter } from "react-router-dom";

export const SubmitButtonContainer = withRouter(withGeolocation(SubmitButton));
