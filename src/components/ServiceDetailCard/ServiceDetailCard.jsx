import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CardImage from '../../assets/images/dark_background.jpeg';
import "./ServiceDetailCard.scss";


function ServiceDetailCard({ service }) {

    const navigate = useNavigate();

    const handleServiceClick = () => {
        console.log(`${service.category_name} is clicked`);
        console.log(`${service.id} is clicked`);

        navigate(`/services/${service.id}`);
    }

    return (
        <Card>
            {/* style={{ width: '18rem' }} */}
        <Card.Img variant="top" src={CardImage} />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>
            {service.description}
          </Card.Text>
          <Button variant="primary" onClick={handleServiceClick}>Book Now</Button>
        </Card.Body>
      </Card>
    );
}
export default ServiceDetailCard;  