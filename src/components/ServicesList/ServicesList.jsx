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

                {
                    servicesList.map((service) => {
                        return (
                        <ServiceCard key={service.id} service={service}/>
                        )
                    })
                }
</section>
        </>
    );
}

export default ServicesList;