import { Card, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import CardImage from '../../assets/images/dark_background.jpeg';
import "./ServiceDetailCard.scss";
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

function ServiceDetailCard({ service }) {

    // const navigate = useNavigate();
    const [slotValue, setSlotValue] = useState("");

    const handleSlotChange = (e) => {
        setSlotValue(e.target.value);
        // console.log(`You selected ${e.target.value}`);
      };

    const handleSubmitServiceBooking = (event) => {
        event.preventDefault();
        console.log("Booking started!");

        console.log("category",event.target.service_category.value);
        console.log("service",event.target.service.value);
        console.log("appointment",event.target.appointment_date.value);
        console.log("slot",event.target.slot.value);
        console.log("user input",event.target.user_input.value);
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
                                    <input name="service_category" id="service_category" placeholder="Service Category" value={service.category_name} disabled />

                                    <label htmlFor="service">Service: </label>
                                    <input name="service" id="service" placeholder="Service" value={service.name} disabled />

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