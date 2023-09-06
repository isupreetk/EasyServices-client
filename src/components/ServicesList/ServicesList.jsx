import "./ServicesList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import Container from "react-bootstrap/Container";

function ServicesList() {
  const [servicesList, setServicesList] = useState([]);

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

  return (
    <>
      <h3>Available Services</h3>

      <section className="services-list">
        <Container>
          <div className="row">
            {servicesList?.map((individualService) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <ServiceCard
                    key={individualService.id}
                    service={individualService}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

export default ServicesList;
