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

  const styles = {
    card: {
      "margin-bottom": "1rem",
      "flex-direction": "row",
      height: "100px",
    },

    cardImage: {
      // height: "120px", //mobile
      height: "100px", //desktop
      // width: "100%",
      "max-width": "150px",
      "border-radius": "4px",
    },
  };

  return (
    <Card style={styles.card} onClick={handleServiceClick}>
      {/* style={{ width: '18rem' }} */}
      <Card.Img
        className="service-card__image"
        variant="top"
        src={service.image_URL}
        style={styles.cardImage}
      />
      <Card.Body>
        <Card.Title>{service.category_name}</Card.Title>
        <Card.Text>{service.category_description}</Card.Text>
        {/* <Button variant="primary" onClick={handleServiceClick}>
          See More
        </Button> */}
      </Card.Body>
    </Card>
  );
}
export default ServiceCard;
