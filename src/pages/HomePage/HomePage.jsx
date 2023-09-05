import "./HomePage.scss";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ServicesList from "../../components/ServicesList/ServicesList";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import HeroText from "../../components/HeroText/HeroText";

function HomePage() {
  return (
    <>
      <Container>
        <div>
          <HeroCarousel />
        </div>

        {/* <div className="homePage__searchbar-container">
        <label className="homePage__searchbar-label" htmlFor="locationSearch">
          Search Based on Location
        </label>
        <input
          className="homePage__searchbar-input"
          type="text"
          name="locationSearch"
          placeholder="Search based on your location"
        ></input>
      </div> */}

        <Form className="d-flex search-form">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <div>
          <ServicesList />
        </div>
      </Container>

      <div className="container-fluid bg-light">
        {/* hero-text-section */}
        <Container>
          <HeroText />
        </Container>
      </div>
    </>
  );
}

export default HomePage;
