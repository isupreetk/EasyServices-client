import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";

function BookedTasksAccordion({ result, calledFrom }) {
  return (
    <div>
      {result.map((resultItem, index) => (
        <div className="bookings__content-container" key={index}>
          <div className="bookings__content">
            <div className="bookings__task">
              <div>{resultItem.category_name}</div>
              <div>{resultItem.category_description}</div>
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

export default BookedTasksAccordion;
