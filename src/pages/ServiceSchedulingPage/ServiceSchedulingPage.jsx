import axios from "axios";
import "./ServiceSchedulingPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceDetailCard from "../../components/ServiceDetailCard/ServiceDetailCard";

function ServiceSchedulingPage() {
  const params = useParams();

  const serviceId = params.id;

  // console.log("serviceId", serviceId);

  const api_URL = `${process.env.REACT_APP_API_URL}/services/${serviceId}`;

  const [selectedService, setSelectedService] = useState([]);

  const serviceDetails = useEffect(() => {
    axios
      .get(api_URL)
      .then((response) => {
        // console.log(response.data);
        setSelectedService(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h3>Scheduling Page</h3>

      <section className="service-scheduling__section">
        <ul className="service-scheduling__card-container">
          {selectedService.map((service) => {
            return <ServiceDetailCard key={service.id} service={service} />;
          })}
        </ul>
      </section>
    </>
  );
}

export default ServiceSchedulingPage;
