import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CustomCard = ({ imgSrc, title, text, btnText = "More" }) => (
  <Card>
    <Card.Img variant="top" src={imgSrc} />
    <Card.Body>
      <Card.Title className="heading heading--sec heading--sm heading--black">
        {title}
      </Card.Title>
      <Card.Text className="paragraph">{text}</Card.Text>
      <Button className="w-100 btn__hasoverlay">{btnText}</Button>
    </Card.Body>
  </Card>
);

export default CustomCard;
