import axios from "axios";
import "./ServiceSchedulingPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceDetailCard from "../../components/ServiceDetailCard/ServiceDetailCard";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function ServiceSchedulingPage() {
  const params = useParams();

  const serviceId = params.id;

  // console.log("serviceId", serviceId);

  // const api_URL = `${process.env.REACT_APP_API_URL}/services/${serviceId}`;

  const [selectedService, setSelectedService] = useState([]);
  // let counter = -1;
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/services/${serviceId}`)
      .then((response) => {
        // counter = -1;
        console.log(response.data);
        // const trial = [];
        // trial.push(response.data[0]);
        // trial.push(response.data[1]);
        // setSelectedService(response.data);
        setSelectedService(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [serviceId]);

  // function splitIn2(servicesArray) {
  //   let newArray = [];
  //   let someArray = [];
  //   for (let i = 0; i < servicesArray.length; i++) {
  //     // console.log(i);
  //     // console.log("someArray", someArray);

  //     someArray.push(servicesArray[i]);

  //     if (i % 2 !== 0) {
  //       newArray.push(someArray);
  //       someArray = [];
  //     } else if (i === servicesArray.length - 1) {
  //       newArray.push(someArray);
  //     }
  //   }
  //   return newArray;
  // }

  // console.log(selectedService);
  // const updatedArrayForDisplay = splitIn2(selectedService);
  // console.log("updatedArrayForDisplay", updatedArrayForDisplay);

  return (
    <>
      {/* <h3>Scheduling Page</h3> */}

      <section className="service-scheduling__section">
        {/* <div>Hello</div> */}

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
          {/* {updatedArrayForDisplay?.map((arrayService) => {
            return ( */}

          <Container id="services-subcategory">
            <div className="row">
              {selectedService?.map((individualService) => {
                return (
                  // <Row>
                  <div className="col-sm-12 col-md-6">
                    {/* col-sm-12 col-md-6 col-lg-4 */}
                    <ServiceDetailCard
                      key={individualService?.id}
                      individualService={individualService}
                    />
                  </div>
                  // </Row>
                );
              })}
            </div>
          </Container>
          {/* );
          })} */}
        </Container>
      </section>
    </>
  );
}
export default ServiceSchedulingPage;
