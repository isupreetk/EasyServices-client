import Carousel from "react-bootstrap/Carousel";
import CarouselImage1 from "../../assets/images/carousel1.jpeg";
import CarouselImage2 from "../../assets/images/carousel2.jpeg";

function HeroCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src={CarouselImage1}
            alt="Carousel One"
          />
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src={CarouselImage2}
            alt="Carousel Two"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
export default HeroCarousel;
