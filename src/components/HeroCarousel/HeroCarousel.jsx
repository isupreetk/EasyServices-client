import "./HeroCarousel.scss"
import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from "../../assets/images/dark_background.jpeg"

// const data = [
//   {
//    image: require('../../assets/images/Kadabra.png'), 
//    caption:"Caption",
//    description:"Description Here"
//   },
//   {
//     image:require('../../assets/images/Kadabra.png'), 
//     caption:"Caption",
//     description:"Description Here"
//    },
//    {
//     image:require('../../assets/images/Kadabra.png'), 
//     caption:"Caption",
//     description:"Description Here"
//    } 
// ]

function HeroCarousel() {
  // const [index, setIndex] = useState(0);
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <>
    {/* <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image} 
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel> */}

{/* <div style={{ display: 'block', width: '100%', padding: 30 }}> */}
    
      <Carousel>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
src={CarouselImage}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
src={CarouselImage}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    {/* </div> */}

</>
  );
}
export default HeroCarousel;