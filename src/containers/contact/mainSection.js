import CustomForm from "components/CustomForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mainSection = () => {
  return (
    <div className="container-h py-5">
      <div className="d-flex flex-column-reverse flex-md-row">
        <div>
          <h1 className="heading heading-xxl heading--pink mb-5">
            Submit your details
          </h1>
          <CustomForm />
        </div>
        <ul>
          <li>
            <FontAwesomeIcon icon={["fas", "envelope"]} size="2x" />
            <span className="paragraph d-inline-block mx-2">hello@yay.com</span>
          </li>
          <li>
            <FontAwesomeIcon icon={["fas", "phone-alt"]} size="2x" />
            <span className="paragraph d-inline-block mx-2">123 456 7890</span>
          </li>
          <li>
            <FontAwesomeIcon icon={["fas", "map-marker-alt"]} size="2x" />
            <span className="paragraph d-inline-block mx-2">
              123 Some Street,<br></br> Somewhere,<br></br> Some City 10000
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default mainSection;
