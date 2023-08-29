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
    axios.get(api_URL)
    .then((response) => {
        console.log(response.data);
        setSelectedService(response.data);
    }).catch((error) => {
        console.log(error);
    })
},[])

    return (
        <>
            <h3>Scheduling Page</h3>
            <ul>
            {selectedService.map((service) => {
                return (
                // <li key={service.id}>
                //     <p>{service.id}</p>
                //     <p>{service.name}</p>
                //     <p>{service.description}</p>
                //     <p>{service.image_URL}</p>
                //     <p>{service.estimated_cost}</p>
                //     <p>{service.location}</p>
                //     <p>{service.service_category_id}</p>
                // </li> 

                <ServiceDetailCard key={service.id} service={service}/>

                )
            })
        }

            </ul>
            
           
           


            {/* <div>
                <label htmlFor="selectedService">Select the service: </label>
                <select name="selectedService" id="selectedService">
                    <option>Please select required service</option>
                    <option value="Beauty Treatments" >Beauty Treatments</option>
                    <option value="Plumber" >Plumber</option>
                    <option value="Carpenter" >Carpenter</option>
                    <option value="Electrician" >Electrician</option>
                </select>
            </div>

            <div>
                <label htmlFor="selectedServiceProvider">Select the service provider: </label>
                <select name="selectedServiceProvider" id="selectedServiceProvider">
                    <option>Please select preffered service provider</option>
                    <option value="Bob" >Bob</option>
                    <option value="Clob" >Clob</option>
                    <option value="Dobb" >Dobb</option>
                    <option value="Phoebe" >Phoebe</option>
                </select>
            </div> */}
        </>
    )
}

export default ServiceSchedulingPage;