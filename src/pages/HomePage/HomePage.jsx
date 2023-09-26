import "./HomePage.scss";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ServicesList from "../../components/ServicesList/ServicesList";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import HeroText from "../../components/HeroText/HeroText";
import { useState } from "react";

function HomePage() {
  const [searchString, setSearchString] = useState("");

  return (
    <>
      <Container>
        <div>
          <HeroCarousel />
        </div>

        <Form className="d-flex search-form">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            name="search"
            id="search"
            onChange={(event) => {
              setSearchString(event.target.value);
            }}
          />
        </Form>

        <div>
          <ServicesList searchString={searchString} />
        </div>
      </Container>

      <div className="container-fluid bg-light">
        <Container>
          <HeroText />
        </Container>
      </div>
    </>
  );
}

export default HomePage;
