import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomFooter = () => {
  return (
    <footer className="pt-2">
      <div className="container-h d-flex flex-column flex-sm-row align-items-center justify-content-between">
        <ul className="d-flex flex-sm-row align-items-center justify-content-between">
          <li>
            <FontAwesomeIcon icon={["fab", "vimeo-v"]} size="3x" />
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "youtube"]} size="3x" />
          </li>
        </ul>
        <ul className="d-flex justify-content-between">
          <li className="paragraph">hello@yay.com</li>
          <li className="paragraph">Copyright 2020</li>
        </ul>
      </div>
    </footer>
  );
};

export default CustomFooter;
