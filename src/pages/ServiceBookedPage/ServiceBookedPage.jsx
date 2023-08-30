import "./ServiceBookedPage.scss";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";

function ServiceBookedPage() {
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

        <Tab eventKey="second" title="Completed">
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
