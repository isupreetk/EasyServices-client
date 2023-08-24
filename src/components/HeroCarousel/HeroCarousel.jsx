import "./HeroCarousel.scss";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function HeroCarousel() {
    return (
        <>
    <Carousel>
      <div>
        <img src="https://placehold.co/100x100" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://placehold.co/200x200" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://placehold.co/300x300" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>

      </>
    );
  }

export default HeroCarousel;