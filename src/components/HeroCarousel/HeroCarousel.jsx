import Carousel from "react-bootstrap/Carousel";
import CarouselImg1 from "../../assets/images/carousel_1.png";
import CarouselImg2 from "../../assets/images/carousel_2.png";

function HeroCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src={CarouselImg1}
            alt="Carousel One"
          />
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src={CarouselImg2}
            alt="Carousel Two"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
export default HeroCarousel;
