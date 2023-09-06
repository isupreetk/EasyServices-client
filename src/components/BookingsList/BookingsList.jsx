import "./BookingsList.scss";
import Accordion from "react-bootstrap/Accordion";
import { Button, Container } from "react-bootstrap";

function BookingsList({ result, calledFrom }) {
  return (
    <Container>
      <div>
        {Object.keys(result).map((user_request_id, index) => (
          // <div className="list-group-numbered " key={index}>
          //   <div className="list-group-item list-group-item-action flex-column align-items-start">
          <>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                Service Name: {result[user_request_id].detail.name}
              </h5>
              <h5 className="mb-1">
                Category Name: {result[user_request_id].detail.category_name}
              </h5>
            </div>

            <div className="d-flex w-100 justify-content-between">
              <small>
                Appointment Date:{" "}
                {result[user_request_id].detail.appointment_date}
              </small>
              <small>Slot: {result[user_request_id].detail.slot}</small>
            </div>

            {result[user_request_id].quotes.map((quote) => {
              return (
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="bookings__accordion-heading">
                        <div>{quote.service_provider_name}</div>
                        <div>{quote.amount}</div>
                        <div>{quote.estimated_duration}</div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="bookings__accordion-body">
                        <div>Description: {quote.description}</div>
                        {calledFrom === "In Progress" ? (
                          <div>
                            <Button className="btn-success">Approve</Button>
                            <Button className="btn-danger">Reject</Button>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              );
            })}
          </>
          //   </div>
          // </div>
        ))}
      </div>
    </Container>
  );
}

export default BookingsList;
