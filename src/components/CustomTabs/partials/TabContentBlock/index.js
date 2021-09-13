import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TabContentBlock = ({ image, text, alt }) => (
  <>
    <img className="tabContent__img" src={image} alt={alt} />
    <div className="tabContent__block">
      <p className="paragraph">{text}</p>
      <div className="tabContent__socials d-flex align-items-center">
        <p className="mb-0">Share:</p>
        <ul className="d-flex align-items-center px-0 mb-0">
          <li className="px-3">
            <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
          </li>
          <li className="px-0">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default TabContentBlock;
