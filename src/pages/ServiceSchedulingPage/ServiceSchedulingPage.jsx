import axios from "axios";
import "./ServiceSchedulingPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceDetailCard from "../../components/ServiceDetailCard/ServiceDetailCard";
import Container from "react-bootstrap/Container";

function ServiceSchedulingPage() {
  const params = useParams();

  const serviceId = params.id;

  const [selectedService, setSelectedService] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/services/${serviceId}`)
      .then((response) => {
        setSelectedService(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [serviceId]);

  return (
    <>
      <section className="service-scheduling__section">
        <Container>
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">
                {selectedService[0]?.category_name}
              </h1>
              <p className="col-md-8 fs-4">
                {selectedService[0]?.category_description}
              </p>
              <button className="btn btn-primary btn-lg">
                <a href="#services-subcategory" className="servicesButton">
                  See services
                </a>
              </button>
            </div>
          </div>

          <Container id="services-subcategory">
            <div className="row">
              {selectedService?.map((individualService) => {
                return (
                  <div
                    className="col-sm-12 col-md-6"
                    key={individualService?.id}
                  >
                    <ServiceDetailCard individualService={individualService} />
                  </div>
                );
              })}
            </div>
          </Container>
        </Container>
      </section>
    </>
  );
}
export default ServiceSchedulingPage;
