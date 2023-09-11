import axios from "axios";
import { Button } from "react-bootstrap";
import "./SupportPage.scss";

function SupportPage() {
  const api_URL = `${process.env.REACT_APP_API_URL}/support`;
  console.log(api_URL);

  const handleSubmitQuery = (event) => {
    event.preventDefault();

    axios
      .post(api_URL, {
        query_category: event.target.radioButtons.value,
        query_description: event.target.query_description.value,
      })
      .then((response) => {
        console.log(
          "Query posted successfully! Someone from our team will get back to you!"
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div class="mt-4 p-5 bg-light text-dark rounded">
        <div className="container">
          <h3>Having Issues?</h3>
          <div>
            <p>Rest assured! We are here to assist you!</p>
          </div>
          <form onSubmit={handleSubmitQuery}>
            <div className="support-form__selection">
              <label htmlFor="radio-buttons" className="form-label">
                Query related to
              </label>

              <div className="support-form__selection-items">
                <input
                  type="radio"
                  name="radioButtons"
                  value="Service Quality"
                />
                <span className="support-form__selection-input">
                  Service Quality
                </span>
              </div>

              <div className="support-form__selection-items">
                <input
                  type="radio"
                  name="radioButtons"
                  value="Service Provider Behaviour"
                />
                <span className="support-form__selection-input">
                  Service Provider Behaviour
                </span>
              </div>

              <div className="support-form__selection-items">
                <input type="radio" name="radioButtons" value="Service Cost" />
                <span className="support-form__selection-input">
                  Service Cost
                </span>
              </div>

              <div className="support-form__selection-items">
                <input type="radio" name="radioButtons" value="Other" />
                <span className="support-form__selection-input">Other</span>
              </div>
            </div>

            <label htmlFor="query_description" className="form-label">
              Query
            </label>
            <input
              type="text"
              name="query_description"
              className="form-control"
            />

            <div>
              <Button type="submit">Submit Query</Button>
            </div>

            <div>
              <p>Please give us upto 2 days to work on your queries!</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SupportPage;
