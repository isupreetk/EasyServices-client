import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

function ServiceProviderFeed() {
  const api_URL = `${process.env.REACT_APP_API_URL}/feed`;
  const [feed, setFeed] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(api_URL)
      .then((response) => {
        setFeed(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api_URL]);

  const handleSeeMoreClick = (id) => {
    navigate(`/addQuote/${id}`);
  };

  return (
    <>
      <h1>Check your feed here</h1>
      <div>
        {feed?.map((feedItem) => {
          return (
            <Card className="col-6" key={feedItem.id}>
              <Card.Body>
                <Card.Title>{feedItem.service_category_id}</Card.Title>
                <Card.Text>
                  <div>
                    <p>{feedItem.appointment_date}</p>
                    <p>{feedItem.slot}</p>
                  </div>
                </Card.Text>
                <Button onClick={(id) => handleSeeMoreClick(feedItem.id)}>
                  See More
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default ServiceProviderFeed;
