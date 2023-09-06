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
    console.log(event.target.username.value);
    console.log(event.target.password.value);

    axios
      .post(`${api_URL}/signUp`, {
        username: event.target.username.value,
        password: event.target.password.value,
      })
      .then((response) => {
        alert("Sign Up Successful! Please proceed to login! ");
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5 col-6">
          <h1 className="text-center">SIGN UP</h1>

          <form onSubmit={(event) => handleLogin(event)}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
