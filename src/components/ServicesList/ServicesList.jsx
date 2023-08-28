import "./ServicesList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ServicesList() {

    const api_URL = `${process.env.REACT_APP_API_URL}/services`;

    // console.log(api_URL);
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        axios.get(api_URL)
            .then((response) => {
                console.log(response.data);
                setServicesList(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
    }, [])

    // console.log(servicesResult);

    return (
        <>
            <h3>List of Services</h3>

            <section className="services-list">

            {/* <ul> */}
            {/* <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}> */}

                {
                    servicesList.map((service) => {
                        return (

                        <ServiceCard key={service.id} service={service}/>

                            // <li key={service.service_id}>
                            //     <p>{service.id}</p>
                            //     <p>{service.name}</p>
                            //     <p>{service.description}</p>
                            //     <p>{service.image_URL}</p>
                            //     <p>{service.estimated_cost}</p>
                            //     <p>{service.location}</p>
                            //     {/* <p>{service.service_category_id}</p> */}
                            // </li>

                        )
                    })
                }
            {/* </ul> */}

            {/* </Col>
      ))}
    </Row> */}

</section>
        </>
    );
}

export default ServicesList;