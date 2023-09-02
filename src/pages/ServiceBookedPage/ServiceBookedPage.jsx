import "./ServiceBookedPage.scss";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import { useEffect, useState } from "react";
import BookedTasksAccordion from "../../components/BookedTasksAccordion/BookedTasksAccordion";

function ServiceBookedPage() {
  // const api_URL = process.env.REACT_APP_API_URL;

  const [inProgressResult, setInProgressResult] = useState([]);
  const [completedResult, setCompletedResult] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/bookings/InProgress`)
      .then((response) => {
        setInProgressResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${process.env.REACT_APP_API_URL}/bookings/Completed`)
      .then((response) => {
        setCompletedResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>My Bookings</h1>

      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="In Progress">
          <BookedTasksAccordion
            result={inProgressResult}
            calledFrom={"In Progress"}
          />
        </Tab>

        <Tab eventKey="second" href="/bookings/Completed" title="Completed">
          <BookedTasksAccordion
            result={completedResult}
            calledFrom={"Completed"}
          />
        </Tab>
      </Tabs>
    </>
  );
}

export default ServiceBookedPage;
