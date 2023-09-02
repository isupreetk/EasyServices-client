import axios from "axios";
import "./ServiceSchedulingPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceDetailCard from "../../components/ServiceDetailCard/ServiceDetailCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ServiceSchedulingPage() {
  const params = useParams();

  const serviceId = params.id;

  // console.log("serviceId", serviceId);

  // const api_URL = `${process.env.REACT_APP_API_URL}/services/${serviceId}`;

  const [selectedService, setSelectedService] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/services/${serviceId}`)
      .then((response) => {
        // console.log(response.data);
        setSelectedService(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [serviceId]);

  return (
    <>
      <h3>Scheduling Page</h3>

      <section className="service-scheduling__section">
        <ul className="service-scheduling__card-container">
          {selectedService.map((service) => {
            return (
              <Container fluid>
                <Row>
                  <Col>
                    <ServiceDetailCard key={service.id} service={service} />
                  </Col>
                </Row>
              </Container>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default ServiceSchedulingPage;
