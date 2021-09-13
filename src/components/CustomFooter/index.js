import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomFooter = () => {
  return (
    <footer className="pt-2">
      <div className="container-h">
        <ul>
          <li>
            <FontAwesomeIcon icon={["fab", "vimeo-v"]} size="3x" />
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "youtube"]} size="3x" />
          </li>
        </ul>
        <p className="paragraph">hello@yay.com</p>
        <p className="paragraph">Copyright 2020</p>
      </div>
    </footer>
  );
};

export default CustomFooter;
