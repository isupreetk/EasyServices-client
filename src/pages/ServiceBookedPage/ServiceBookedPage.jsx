import "./ServiceBookedPage.scss";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Button } from "react-bootstrap";
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

    componentDidMount();
  }, []);

  function componentDidMount() {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

  function showNotification() {
    var notification = new Notification("You have received a new quote!", {
      body: "New notification",
    });
    notification.onclick = function () {
      window.focus();
      window.open("http://stackoverflow.com/");
      notification.close();
    };
  }

  return (
    <>
      <h1>My Bookings</h1>

      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="In Progress">
          <BookedTasksAccordion
            result={inProgressResult}
            calledFrom={"In Progress"}
          />

          <Button onClick={showNotification}>Add Quote</Button>
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
