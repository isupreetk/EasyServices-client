import "./BookingsList.scss";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";

function BookingsList({ result, calledFrom }) {
  return (
    <div>
      {result.map((resultItem, index) => (
        <div className="list-group" key={index}>
          <div className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Service Name: {resultItem.name}</h5>
              <h5 className="mb-1">
                Category Name: {resultItem.category_name}
              </h5>
            </div>

            <div className="d-flex w-100 justify-content-between">
              <small>Appointment Date: {resultItem.appointment_date}</small>
              <small>Slot: {resultItem.slot}</small>
            </div>

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="bookings__accordion-heading">
                    <div>{resultItem.service_provider_name}</div>
                    <div>{resultItem.amount}</div>
                    <div>{resultItem.estimated_duration}</div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="bookings__accordion-body">
                    <div>Image: </div>
                    <div>Description: {resultItem.description}</div>
                    {calledFrom === "In Progress" ? (
                      <div>
                        <Button variant="primary">Approve</Button>
                        <Button variant="primary">Reject</Button>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookingsList;
