import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";

function BookedTasksAccordion({ result, calledFrom }) {
  return (
    <div>
      {/* <div class="list-group">
        <a
          href="#"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small class="text-muted">And some muted small print.</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small class="text-muted">And some muted small print.</small>
        </a>
      </div> */}

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
