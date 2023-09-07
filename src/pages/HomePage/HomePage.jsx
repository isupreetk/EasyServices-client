import "./HomePage.scss";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ServicesList from "../../components/ServicesList/ServicesList";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import HeroText from "../../components/HeroText/HeroText";
import axios from "axios";
import { useState, useEffect } from "react";

function HomePage() {
  const [servicesList, setServicesList] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/services`)
      .then((response) => {
        setServicesList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchString(event.target.search.value);
  };

  return (
    <>
      <Container>
        <div>
          <HeroCarousel />
        </div>

        <Form
          className="d-flex search-form"
          onSubmit={(event) => handleSearch(event)}
        >
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            name="search"
            id="search"
            // onChange={() => setSearchString(searchString)}
          />
          <Button type="submit" variant="outline-success">
            Search
          </Button>
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
