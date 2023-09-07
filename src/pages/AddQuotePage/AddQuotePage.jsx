import { Button, Container } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function AddQuotePage({ individualService }) {
  const api_URL = `${process.env.REACT_APP_API_URL}`;
  const react_URL = `${process.env.REACT_APP_URL}`;

  const formRef = useRef();
  const [selectedTask, setSelectedTask] = useState([]);

  const { id } = useParams();

  function componentDidMount() {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

  function showNotification() {
    var notification = new Notification(
      "Hurray!! Quote received for your booking!",
      {
        body: "Alert! New quote",
        icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?    auto=compress&cs=tinysrgb&dpr=1&w=500",
      }
    );
    notification.onclick = function () {
      window.focus();
      window.open(`${react_URL}/bookings`);
      notification.close();
    };
  }

  useEffect(() => {
    axios
      .get(`${api_URL}/addQuote/${id}`)
      .then((response) => {
        setSelectedTask(response.data);
        componentDidMount();
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api_URL, id]);

  const handleSubmitQuote = (event) => {
    event.preventDefault();

    axios
      .post(`${api_URL}/addQuote/${id}`, {
        amount: event.target.quote.value,
        description: event.target.description.value,
        estimated_duration: event.target.estimated_duration.value,
        service_provider_id: event.target.service_provider_id,
        user_request_id: id,
      })
      .then((response) => {
        console.log(response.data);
        alert("Quote added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h2 className="text-center">Continue to submit your Quote</h2>
            <form ref={formRef} onSubmit={(event) => handleSubmitQuote(event)}>
              <label className="form-label" htmlFor="service_category">
                Service Category:
              </label>
              <input
                className="form-control"
                name="service_category"
                id="service_category"
                value={selectedTask[0]?.category_name}
                disabled
              ></input>
              <input
                className="form-control"
                type="hidden"
                name="service_category_id"
                id="service_category_id"
                value={selectedTask[0]?.service_category_id}
                disabled
              ></input>

              <label className="form-label" htmlFor="service">
                Service:{" "}
              </label>
              <input
                className="form-control"
                name="service"
                id="service"
                value={selectedTask[0]?.name}
                disabled
              />
              <input
                type="hidden"
                name="service_id"
                id="service_id"
                value={selectedTask[0]?.service_id}
                disabled
              />

              <label className="form-label" htmlFor="appointment_date">
                Appointment Date:{" "}
              </label>
              <input
                className="form-control"
                name="appointment_date"
                id="appointment_date"
                value={selectedTask[0]?.appointment_date}
                disabled
              />

              <label className="form-label" htmlFor="slot">
                Slot:{" "}
              </label>

              <input
                className="form-control"
                name="appointment_date"
                id="appointment_date"
                value={selectedTask[0]?.slot}
                disabled
              />

              <label className="form-label" htmlFor="user_input">
                User comments:{" "}
              </label>
              <textarea
                name="user_input"
                id="user_input"
                value={selectedTask[0]?.user_input}
                className="form-control"
                disabled
              />

              <label className="form-label" htmlFor="quote">
                Quote:{" "}
              </label>
              <textarea
                name="quote"
                id="quote"
                placeholder="Add your quoted price"
                className="form-control"
              />

              <label className="form-label" htmlFor="estimated_duration">
                Estimated Duration:{" "}
              </label>
              <textarea
                name="estimated_duration"
                id="estimated_duration"
                placeholder="Add your estimated duration"
                className="form-control"
              />

              <label className="form-label" htmlFor="description">
                Your comments:{" "}
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="Add your description"
                className="form-control"
              />

              <Button
                type="submit"
                variant="primary"
                onClick={showNotification}
              >
                Add Quote
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AddQuotePage;
