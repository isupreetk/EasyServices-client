import Carousel from "react-bootstrap/Carousel";
import CarouselGif1 from "../../assets/images/giffy1.gif";
import CarouselGif2 from "../../assets/images/giffy.gif";

function HeroCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={5200}>
          <img
            className="d-block w-100"
            src={CarouselGif1}
            alt="Carousel One"
          />
        </Carousel.Item>
        <Carousel.Item interval={9200}>
          <img
            className="d-block w-100"
            src={CarouselGif2}
            alt="Carousel Two"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
export default HeroCarousel;
