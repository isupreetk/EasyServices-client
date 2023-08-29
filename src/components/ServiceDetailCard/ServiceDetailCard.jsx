import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CardImage from '../../assets/images/dark_background.jpeg';
import "./ServiceDetailCard.scss";
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
// import { Navigate } from 'react-router-dom';
import axios from 'axios';

function ServiceDetailCard({ service }) {

    const api_URL = process.env.REACT_APP_API_URL;

    // const navigate = useNavigate();
    const [slotValue, setSlotValue] = useState("");

    const handleSlotChange = (e) => {
        setSlotValue(e.target.value);
        // console.log(`You selected ${e.target.value}`);
      };

    const handleSubmitServiceBooking = (event) => {
        event.preventDefault();
        // console.log("Booking started!");

        // console.log("category",event.target.service_category.value);
        // console.log("categoryID",event.target.service_category_id.value);
        // console.log("service",event.target.service.value);
        // console.log("serviceID",event.target.service_id.value);
        // console.log("appointment",event.target.appointment_date.value);
        // console.log("slot",event.target.slot.value);
        // console.log("user input",event.target.user_input.value);
        // console.log("uploaded file 1",event.target.uploaded_file_1.value);
        // console.log("uploaded file 2",event.target.uploaded_file_2.value);
        // console.log("uploaded file 3",event.target.uploaded_file_3.value);
     
        // navigate(`/schedule/${service.id}`)

        axios.post(`${api_URL}/schedule/${service.id}`, {
            user_id: 1,
            service_category_id: `${event.target.service_category_id.value}`,
            service_id: `${event.target.service_id.value}`,
            appointment_date: `${event.target.appointment_date.value}`,
            slot: `${event.target.slot.value}`,
            user_input: `${event.target.user_input.value}`,
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <Card>
                <Card.Img variant="top" src={CardImage} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                        {service.description}
                    </Card.Text>


                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <Button variant="primary">Start Booking</Button>
                            </Accordion.Header>

                            <Accordion.Body>
                                <form onSubmit={(event) => handleSubmitServiceBooking(event)}>
                                    <label htmlFor="service_category">Service Category: </label>
                                    <input name="service_category" id="service_category" placeholder="Service Category" value={service.category_name} disabled></input>
                                    <input type="hidden" name="service_category_id" id="service_category_id" value={service.service_category_id} disabled></input>

                                    <label htmlFor="service">Service: </label>
                                    <input name="service" id="service" placeholder="Service" value={service.name} disabled />
                                    <input type="hidden" name="service_id" id="service_id" value={service.id} disabled />

                                    <label htmlFor="appointment_date">Appointment Date: </label>
                                    <input name="appointment_date" id="appointment_date" placeholder="Appointment Date" />

                                    <label htmlFor="slot">Slot: </label>

                                    <div>
                                        <select name="slot" id="slot"
                                        value={slotValue} onChange={(e) => handleSlotChange(e)} >
                                            <option value="">Choose your preferrable slot</option>
                                            <option value="08:00">08:00</option>
                                            <option value="10:00">10:00</option>
                                            <option value="12:00">12:00</option>
                                        </select>
                                    </div>

                                    <label htmlFor="user_input">Extra comments: </label>
                                    <textarea name="user_input" id="user_input" placeholder="Extra comments..." />

                                    <label htmlFor="uploaded_file_1">Upload File 1: </label>
                                    <input type="file" name="uploaded_file_1" id="uploaded_file_1" />

                                    <label htmlFor="uploaded_file_2">Upload File 2: </label>
                                    <input type="file" name="uploaded_file_2" id="uploaded_file_2" />

                                    <label htmlFor="uploaded_file_3">Upload File 3: </label>
                                    <input type="file" name="uploaded_file_3" id="uploaded_file_3" />

                                    <Button type="submit" variant="primary">Book Now</Button>
                                </form>
                            </Accordion.Body>

                        </Accordion.Item>
                    </Accordion>

                </Card.Body>
            </Card>

            <Accordion />

        </>
    );
}
export default ServiceDetailCard;  