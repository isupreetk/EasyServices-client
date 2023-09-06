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
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">
                {selectedService[0]?.category_name}
              </h1>
              <p class="col-md-8 fs-4">
                {selectedService[0]?.category_description}
              </p>
              <button class="btn btn-primary btn-lg" type="button">
                <a href="#services-subcategory" className="button">
                  See services
                </a>
              </button>
            </div>
          </div>

          <Container id="services-subcategory">
            <div className="row">
              {selectedService?.map((individualService) => {
                return (
                  <div className="col-sm-12 col-md-6">
                    <ServiceDetailCard
                      key={individualService?.id}
                      individualService={individualService}
                    />
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
