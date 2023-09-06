import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ServiceCard.scss";

function ServiceCard({ service }) {
  const navigate = useNavigate();

  const handleServiceClick = () => {
    navigate(`/services/${service.id}`);
  };

  const styles = {
    card: {
      marginBottom: "1rem",
      flexDirection: "row",
      height: "120px",
      fontSize: "14px",
    },

    cardImage: {
      maxWidth: "30%",
      borderRadius: "4px",
    },
  };

  return (
    <Card style={styles.card} onClick={handleServiceClick}>
      <Card.Img
        className="service-card__image"
        variant="top"
        src={service.image_URL}
        style={styles.cardImage}
      />
      <Card.Body>
        <Card.Title>{service.category_name}</Card.Title>
        <Card.Text>{service.category_description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ServiceCard;
