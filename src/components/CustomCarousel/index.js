import Carousel from "react-bootstrap/Carousel";

const CustomCarousel = ({ images }) => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={images[0]} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={images[1]} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={images[2]} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
