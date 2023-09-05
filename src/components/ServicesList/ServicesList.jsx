import "./ServicesList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

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

  // function splitInX(servicesArray, x) {
  //   let newArray = [];
  //   let someArray = [];
  //   for (let i = 0; i < servicesArray.length; i++) {
  //     someArray.push(servicesArray[i]);

  //     if (i % x == x - 1) {
  //       newArray.push(someArray);
  //       someArray = [];
  //     } else if (i === servicesArray.length - 1) {
  //       newArray.push(someArray);
  //     }
  //   }
  //   console.log(newArray);
  //   return newArray;
  // }

  // const updatedArrayForDisplay = splitInX(servicesList, 200);

  //   console.log(updatedArrayForDisplay);

  return (
    <>
      <h3>Available Services</h3>

      <section className="services-list">
        <Container>
          {/* {updatedArrayForDisplay?.map((arrayService) => {
            return ( */}
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
          {/* );
          })} */}
        </Container>
      </section>
    </>
  );
}

export default ServicesList;
