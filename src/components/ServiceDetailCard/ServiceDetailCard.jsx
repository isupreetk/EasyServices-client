import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { useState, useRef } from "react";
import axios from "axios";

function ServiceDetailCard({ individualService }) {
  const api_URL = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const [slotValue, setSlotValue] = useState("");
  const [file1, setFile1] = useState("");

  const formRef = useRef();

  const handleSlotChange = (e) => {
    setSlotValue(e.target.value);
  };

  const handleSubmitServiceBooking = (event) => {
    event.preventDefault();

    axios
      .post(`${api_URL}/schedule`, {
        user_id: 1,
        service_category_id: `${event.target.service_category_id.value}`,
        service_id: `${event.target.service_id.value}`,
        appointment_date: `${event.target.appointment_date.value}`,
        slot: `${event.target.slot.value}`,
        user_input: `${event.target.user_input.value}`,
      })
      .then((response) => {
        if (file1) {
          const formData = new FormData();
          formData.append("file", file1);
          formData.append("user_request_id", response.data[0]);

          const config = {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          };

          axios
            .post(`${api_URL}/scheduleImage`, formData, config)
            .then((response) => {
              alert("Booking Successful");
              navigate("/bookings");
            })
            .catch((error) => {
              console.log(error);
            });
        }

        formRef.current.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Card>
        <Card.Img variant="top" src={individualService.image_URL} />
        <Card.Body>
          <Card.Title>{individualService.name}</Card.Title>
          <Card.Text>{individualService.description}</Card.Text>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <a className="btn" variant="primary">
                  Start Booking
                </a>
              </Accordion.Header>

              <Accordion.Body>
                <form
                  ref={formRef}
                  onSubmit={(event) => handleSubmitServiceBooking(event)}
                >
                  <label className="form-label" htmlFor="service_category">
                    Service Category:{" "}
                  </label>
                  <input
                    className="form-control"
                    name="service_category"
                    id="service_category"
                    placeholder="Service Category"
                    value={individualService.category_name}
                    disabled
                  ></input>
                  <input
                    className="form-control"
                    type="hidden"
                    name="service_category_id"
                    id="service_category_id"
                    value={individualService.service_category_id}
                    disabled
                  ></input>

                  <label className="form-label" htmlFor="service">
                    Service:{" "}
                  </label>
                  <input
                    className="form-control"
                    name="service"
                    id="service"
                    placeholder="Service"
                    value={individualService.name}
                    disabled
                  />
                  <input
                    type="hidden"
                    name="service_id"
                    id="service_id"
                    value={individualService.id}
                    disabled
                  />

                  <label className="form-label" htmlFor="appointment_date">
                    Appointment Date:{" "}
                  </label>
                  <input
                    className="form-control"
                    name="appointment_date"
                    id="appointment_date"
                    placeholder="Appointment Date"
                  />

                  <label className="form-label" htmlFor="slot">
                    Slot:{" "}
                  </label>

                  <div>
                    <select
                      name="slot"
                      id="slot"
                      value={slotValue}
                      onChange={(e) => handleSlotChange(e)}
                      className="form-control"
                    >
                      <option value="">Choose your preferrable slot</option>
                      <option value="08:00">08:00</option>
                      <option value="10:00">10:00</option>
                      <option value="12:00">12:00</option>
                    </select>
                  </div>

                  <label className="form-label" htmlFor="user_input">
                    Extra comments:{" "}
                  </label>
                  <textarea
                    name="user_input"
                    id="user_input"
                    placeholder="Extra comments..."
                    className="form-control"
                  />

                  <label className="form-label" htmlFor="uploaded_file_1">
                    Upload File 1:{" "}
                  </label>
                  <input
                    onChange={(event) => setFile1(event.target.files[0])}
                    type="file"
                    name="file"
                    id="uploaded_file_1"
                    accept="image/*"
                    className="form-control"
                  />
                  <Button type="submit" variant="primary">
                    Book Now
                  </Button>
                </form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>

      <Accordion />
    </>
  );
}
export default ServiceDetailCard;
