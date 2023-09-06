import "./AddQuotePage.scss";
import { Button } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function AddQuotePage({ individualService }) {
  const api_URL = `${process.env.REACT_APP_API_URL}`;

  const formRef = useRef();
  const [file1, setFile1] = useState("");
  const [selectedTask, setSelectedTask] = useState([]);

  const { id } = useParams();
  // console.log("params", id);

  const handleSubmitQuote = (event) => {
    event.preventDefault();

    axios
      .post(`${api_URL}/addQuote/${id}`)
      .then((response) => {
        console.log(response.data);
        alert("Quote added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${api_URL}/addQuote/${id}`)
      .then((response) => {
        // console.log(response.data);
        setSelectedTask(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Add Quotes here</h1>
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

        <Button type="submit" variant="primary">
          Book Now
        </Button>
      </form>
    </>
  );
}

export default AddQuotePage;
