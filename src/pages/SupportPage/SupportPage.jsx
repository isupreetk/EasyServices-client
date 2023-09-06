import axios from "axios";

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
      <h3>Having Issues?</h3>
      <div>
        <p>Rest assured! We are here to assist you!</p>
      </div>
      <form onSubmit={handleSubmitQuery}>
        <div>
          <label htmlFor="radio-buttons">Query related to</label>
          <input type="radio" name="radioButtons" value="Service Quality" />
          Service Quality
          <input
            type="radio"
            name="radioButtons"
            value="Service Provider Behaviour"
          />
          Service Provider Behaviour
          <input type="radio" name="radioButtons" value="Service Cost" />
          Service Cost
          <input type="radio" name="radioButtons" value="Other" />
          Other
        </div>

        <label htmlFor="query_description">Query</label>
        <input type="text" name="query_description" />

        <div>
          <button type="submit">Submit Query</button>
        </div>

        <div>
          <p>Please give us upto 2 days to work on your queries!</p>
        </div>
      </form>
    </>
  );
}

export default SupportPage;
