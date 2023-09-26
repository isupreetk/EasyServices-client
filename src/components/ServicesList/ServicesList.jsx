import "./ServicesList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import Container from "react-bootstrap/Container";

function ServicesList({ searchString }) {
  const [servicesList, setServicesList] = useState([]);
  const [filteredServicesList, setFilteredServicesList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/services`)
      .then((response) => {
        setServicesList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // .then((response) => {
    //   if (searchString !== "") {
    //     // eslint-disable-next-line
    //     let filteredServicesList = servicesList.filter((service) => {
    //       if (service.category_name.includes(searchString)) {
    //         return service;
    //       }
    //     });
    //     if (filteredServicesList.length !== 0) {
    //       setServicesList(filteredServicesList);
    //     }
    //   } else {
    //     setServicesList(response.data);
    //   }
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }, []);

  useEffect(() => {
    if (searchString !== "") {
      // eslint-disable-next-line
      let newServicesList = servicesList.filter((service) => {
        if (service.category_name.includes(searchString)) {
          return service;
        }
      });
      setFilteredServicesList(newServicesList);
    } else {
      setFilteredServicesList(servicesList);
    }
  }, [searchString, servicesList]);

  return (
    <>
      <h3>Available Services</h3>

      <section className="services-list">
        <Container>
          <div className="row">
            {filteredServicesList?.map((individualService) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-4"
                  key={individualService.id}
                >
                  <ServiceCard service={individualService} />
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
