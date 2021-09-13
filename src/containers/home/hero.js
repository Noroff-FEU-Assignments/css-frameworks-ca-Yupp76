import CustomCarousel from "components/CustomCarousel";
import Image1 from "assets/carousel-images/carousel-1.jpg";
import Image2 from "assets/carousel-images/carousel-2.jpg";
import Image3 from "assets/carousel-images/carousel-3.jpg";

const images = [Image1, Image2, Image3];

const Hero = () => <CustomCarousel images={images} />;

export default Hero;
