import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CardImage from "../../assets/images/dark_background.jpeg";
import "./ServiceDetailCard.scss";
import Accordion from "react-bootstrap/Accordion";
import { useState, useRef } from "react";
import axios from "axios";

function ServiceDetailCard({ service }) {
  const api_URL = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const [slotValue, setSlotValue] = useState("");
  const [file1, setFile1] = useState("");
  //   const [file2, setFile2] = useState("");
  //   const [file3, setFile3] = useState("");

  const formRef = useRef();

  const handleSlotChange = (e) => {
    setSlotValue(e.target.value);
    // console.log(`You selected ${e.target.value}`);
  };

  const handleSubmitServiceBooking = (event) => {
    event.preventDefault();

    // navigate(`/schedule/${service.id}`)

    /* to upload images */

    // const fileResult = axios.post('/api/images', formData, { headers: {'Content-Type': 'multipart/form-data'}});
    // console.log(fileResult.data);

    // console.log("file1", file1);
    // console.log("file2", file2);
    // console.log("file3", file3);

    // console.log("formdata",formData);

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
        // console.log("schedule data", response.data);

        // const formImagesData = [];

        // if (file1) {
        //     formImagesData.push(file1.name);
        // }
        // if (file2) {
        //     formImagesData.push(file2.name);
        // }
        // if (file3) {
        //     formImagesData.push(file3.name);
        // }

        // if (file1) {
        if (file1) {
          const formData = new FormData();

          //   console.log("file1.file", file1);
          //   console.log("response.data[0]", response.data[0]);

          formData.append("file", file1);
          formData.append("user_request_id", response.data[0]);

          // formData cannot be logged.. use this instead to view details of formData

          // for (let key of formData.entries()) {
          //   console.log(key);
          // }

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

        // }

        // if (formImagesData.length > 0) {
        //     const result =
        //         formImagesData.map((formImage) => {
        //             return ({
        //                 user_request_id: response.data[0],
        //                 file_URL: `${formImage}`,
        //             })
        //         })

        //     return (axios.post(`${api_URL}/scheduleImage`, result).then((response) => {
        //         console.log(response.data);
        //     })
        //         .catch((error) => {
        //             console.log(error)
        //         })
        //     )
        // }

        formRef.current.reset();

        // [{
        //     user_request_id: response.data[0],
        //     file_URL: `${file1}`,
        // },
        // {
        //     user_request_id: response.data[0],
        //     file_URL: `${file2}`,
        // },
        // {
        //     user_request_id: response.data[0],
        //     file_URL: `${file3}`,
        // }]

        // ))
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Card>
        <Card.Img variant="top" src={CardImage} />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>{service.description}</Card.Text>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Button variant="primary">Start Booking</Button>
              </Accordion.Header>

              <Accordion.Body>
                <form
                  ref={formRef}
                  onSubmit={(event) => handleSubmitServiceBooking(event)}
                >
                  <label htmlFor="service_category">Service Category: </label>
                  <input
                    name="service_category"
                    id="service_category"
                    placeholder="Service Category"
                    value={service.category_name}
                    disabled
                  ></input>
                  <input
                    type="hidden"
                    name="service_category_id"
                    id="service_category_id"
                    value={service.service_category_id}
                    disabled
                  ></input>

                  <label htmlFor="service">Service: </label>
                  <input
                    name="service"
                    id="service"
                    placeholder="Service"
                    value={service.name}
                    disabled
                  />
                  <input
                    type="hidden"
                    name="service_id"
                    id="service_id"
                    value={service.id}
                    disabled
                  />

                  <label htmlFor="appointment_date">Appointment Date: </label>
                  <input
                    name="appointment_date"
                    id="appointment_date"
                    placeholder="Appointment Date"
                  />

                  <label htmlFor="slot">Slot: </label>

                  <div>
                    <select
                      name="slot"
                      id="slot"
                      value={slotValue}
                      onChange={(e) => handleSlotChange(e)}
                    >
                      <option value="">Choose your preferrable slot</option>
                      <option value="08:00">08:00</option>
                      <option value="10:00">10:00</option>
                      <option value="12:00">12:00</option>
                    </select>
                  </div>

                  <label htmlFor="user_input">Extra comments: </label>
                  <textarea
                    name="user_input"
                    id="user_input"
                    placeholder="Extra comments..."
                  />

                  <label htmlFor="uploaded_file_1">Upload File 1: </label>
                  <input
                    onChange={(event) => setFile1(event.target.files[0])}
                    type="file"
                    name="file"
                    id="uploaded_file_1"
                    accept="image/*"
                  />

                  {/* <label htmlFor="uploaded_file_2">Upload File 2: </label>
                  <input
                    onChange={(event) => setFile2(event.target.files[0])}
                    type="file"
                    name="uploaded_file_2"
                    id="uploaded_file_2"
                  />

                  <label htmlFor="uploaded_file_3">Upload File 3: </label>
                  <input
                    onChange={(event) => setFile3(event.target.files[0])}
                    type="file"
                    name="uploaded_file_3"
                    id="uploaded_file_3"
                  /> */}

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
