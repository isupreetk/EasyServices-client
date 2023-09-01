import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import CardImage from "../../assets/images/dark_background.jpeg";
import "./ServiceCard.scss";

function ServiceCard({ service }) {
  const navigate = useNavigate();

  const handleServiceClick = () => {
    // console.log(`${service.category_name} is clicked`);
    // console.log(`${service.id} is clicked`);

    navigate(`/services/${service.id}`);
  };

  return (
    <Card>
      {/* style={{ width: '18rem' }} */}
      <Card.Img variant="top" src={service.image_URL} />
      <Card.Body>
        <Card.Title>{service.category_name}</Card.Title>
        <Card.Text>{service.category_description}</Card.Text>
        <Button variant="primary" onClick={handleServiceClick}>
          See More
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ServiceCard;
