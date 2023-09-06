import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import { useEffect, useState } from "react";
import BookingsList from "../../components/BookingsList/BookingsList";
import { Container } from "react-bootstrap";

function ServiceBookedPage() {
  const [inProgressResult, setInProgressResult] = useState({});
  const [completedResult, setCompletedResult] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/bookings/InProgress`)
      .then((response) => {
        const userRequestData = {};

        response.data.forEach((userRequest) => {
          if (!(userRequest.user_request_id in userRequestData)) {
            userRequestData[userRequest.user_request_id] = {
              detail: userRequest,
              quotes: [],
            };
          }
          userRequestData[userRequest.user_request_id].quotes.push({
            amount: userRequest.amount,
            service_provider_name: userRequest.firstname,
            estimated_duration: userRequest.estimated_duration,
            description: userRequest.description,
          });
        });
        setInProgressResult(userRequestData);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${process.env.REACT_APP_API_URL}/bookings/Completed`)
      .then((response) => {
        const userRequestData = {};

        response.data.forEach((userRequest) => {
          if (!(userRequest.user_request_id in userRequestData)) {
            userRequestData[userRequest.user_request_id] = {
              detail: userRequest,
              quotes: [],
            };
          }
          userRequestData[userRequest.user_request_id].quotes.push({
            amount: userRequest.amount,
            service_provider_name: userRequest.firstname,
            estimated_duration: userRequest.estimated_duration,
            description: userRequest.description,
          });
        });
        setCompletedResult(userRequestData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Container>
        <h1>My Bookings</h1>

        <Tabs defaultActiveKey="first">
          <Tab eventKey="first" title="In Progress">
            <BookingsList
              result={inProgressResult}
              calledFrom={"In Progress"}
            />
          </Tab>

          <Tab eventKey="second" href="/bookings/Completed" title="Completed">
            <BookingsList result={completedResult} calledFrom={"Completed"} />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default ServiceBookedPage;
