import "./HomePage.scss";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ServicesList from "../../components/ServicesList/ServicesList";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function HomePage() {
  return (
    <>
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

      <Form className="d-flex">
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
    </>
  );
}

export default HomePage;
