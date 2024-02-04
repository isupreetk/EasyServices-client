import "./SignUpPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  const api_URL = process.env.REACT_APP_API_URL;

  /*
   * Login with username and password, creates JWT token saved in localStorage to persist login
   */
  const handleLogin = (event) => {
    event.preventDefault();

    if (event.target.checkbox.checked) {
      event.target.checkbox.value = true;
    } else {
      event.target.checkbox.value = false;
    }

    axios
      .post(`${api_URL}/signUp`, {
        username: event.target.username.value,
        password: event.target.password.value,
        service_provider: event.target.checkbox.value,
      })
      .then((response) => {
        alert("Sign Up Successful! Please proceed to login! ");
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5 col-6">
          {/* <h1 className="text-center">SIGN UP</h1> */}

          <form onSubmit={(event) => handleLogin(event)}>
            <div className="form-group sign-up__username">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group sign-up__password">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group form-check sign-up__check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkbox"
                value="false"
              />
              <label className="form-check-label" htmlFor="checkbox">
                Are you a service provider?
              </label>
            </div>

            <button type="submit" className="sign-up__button">
              Create a new account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
