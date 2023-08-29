import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CardImage from '../../assets/images/dark_background.jpeg';
import "./ServiceDetailCard.scss";
import Accordion from 'react-bootstrap/Accordion';


function ServiceDetailCard({ service }) {

    const navigate = useNavigate();

    const handleServiceClick = () => {
        console.log(`${service.category_name} is clicked`);
        console.log(`${service.id} is clicked`);
        navigate(`/services/${service.id}`);
    }

    return (
        <>
            <Card>
                {/* style={{ width: '18rem' }} */}
                <Card.Img variant="top" src={CardImage} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                        {service.description}
                    </Card.Text>


                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <Button variant="primary" onClick={handleServiceClick}>Book Now</Button>
                            </Accordion.Header>

                            <Accordion.Body>
                               <form>
                                <label htmlFor="service_category">Service Category: </label>
                                <input name="service_category" id="service_category" placeholder="Service Category" value={service.category_name} disabled/>

                                <label htmlFor="service">Service: </label>
                                <input name="service" id="service" placeholder="Service" value={service.name} disabled/>

                                <label htmlFor="appointment_date">Appointment Date: </label>
                                <input name="appointment_date" id="appointment_date" placeholder="Appointment Date" />

                                <label htmlFor="slot">Slot: </label>
                                <input name="slot" id="slot" placeholder="Slot" />

                                <label htmlFor="user_input">Extra comments: </label>
                                <textarea name="user_input" id="user_input" placeholder="Extra comments..." />
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