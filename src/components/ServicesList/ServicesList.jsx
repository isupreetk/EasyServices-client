import "./ServicesList.scss";
import axios from "axios";
import { useEffect, useState } from "react";

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
            <ul>
                {
                    servicesList.map((service) => {
                        return (
                            <li key={service.service_id}>
                                <p>{service.service_id}</p>
                                <p>{service.service_name}</p>
                                <p>{service.service_provider}</p>
                                <p>{service.service_provider_location}</p>
                                <p>{service.cost}</p>
                            </li>

                        )
                    })
                }
            </ul>
        </>
    );
}

export default ServicesList;