import "./ServiceBookedPage.scss";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ServiceBookedPage() {
  const api_URL = process.env.REACT_APP_API_URL;

  //   const navigate = useNavigate();

  //   const [tab, setTab] = useState("InProgress");
  //   const [result, setResult] = useState([]);
  const [inProgressResult, setInProgressResult] = useState([]);
  const [completedResult, setCompletedResult] = useState([]);

  const onCompletedClick = () => {
    console.log("Clicked on completed");
    // setTab("Completed");
    // navigate("/bookings/Completed");
  };

  useEffect(() => {
    axios
      .get(`${api_URL}/bookings/InProgress`)
      .then((response) => {
        // console.log("Total result", response.data);
        setInProgressResult(response.data);
        // const result = response.data;

        // result.map((result) => {
        //   console.log("Hi");
        //   if (result.status === "In Progress") {
        //     let InProgressBookings = response.data;
        //     console.log("InProgressResult", InProgressBookings);
        //   } else if (result.status === "Completed") {
        //     let CompletedBookings = [response.data];
        //     console.log("CompletedResult", CompletedBookings);
        //   }
        // });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${api_URL}/bookings/Completed`)
      .then((response) => {
        // console.log("Total result", response.data);
        setCompletedResult(response.data);
        // const result = response.data;

        // result.map((result) => {
        //   console.log("Hi");
        //   if (result.status === "In Progress") {
        //     let InProgressBookings = response.data;
        //     console.log("InProgressResult", InProgressBookings);
        //   } else if (result.status === "Completed") {
        //     let CompletedBookings = [response.data];
        //     console.log("CompletedResult", CompletedBookings);
        //   }
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("inProgressResult", inProgressResult);
  console.log("completedResult", completedResult);

  return (
    <>
      <h1>My Bookings</h1>

      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="In Progress">
          <div className="bookings__content-container">
            <div className="bookings__content">
              <div className="bookings__task">In Progress Booking 1</div>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="bookings__accordion-heading">
                      <div>Provider Name</div>
                      <div>Quote</div>
                      <div>Duration</div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="bookings__accordion-body">
                      <div>Image</div>
                      <div>Description</div>
                      <div>
                        <Button variant="primary">Approve</Button>
                        <Button variant="primary">Reject</Button>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="bookings__content">
              <div className="bookings__task">In Progress Booking 2</div>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="bookings__accordion-heading">
                      <div>Provider Name</div>
                      <div>Quote</div>
                      <div>Duration</div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="bookings__accordion-body">
                      <div>Image</div>
                      <div>Description</div>
                      <div>
                        <Button variant="primary">Approve</Button>
                        <Button variant="primary">Reject</Button>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Tab>

        <Tab
          eventKey="second"
          href="/bookings/Completed"
          title="Completed"
          //   onSelect={() => {
          //     setTab("Completed");
          //   }}
          onClick={onCompletedClick}
        >
          <div className="bookings__content-container">
            <div className="bookings__content">
              <div className="bookings__task">Completed Booking 1</div>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="bookings__accordion-heading">
                      <div>Provider Name</div>
                      <div>Quote</div>
                      <div>Duration</div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="bookings__accordion-body">
                      <div>Image</div>
                      <div>Description</div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="bookings__content">
              <div className="bookings__task">Completed Booking 2</div>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="bookings__accordion-heading">
                      <div>Provider Name</div>
                      <div>Quote</div>
                      <div>Duration</div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="bookings__accordion-body">
                      <div>Image</div>
                      <div>Description</div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
}

export default ServiceBookedPage;
