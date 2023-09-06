import "./LoginPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const api_URL = `${process.env.REACT_APP_API_URL}`;
  // console.log(api_URL);
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  /*
   * Component Mount, if JWT token is set the user is still considered logged in
   */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${api_URL}/protected`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setLoggedIn(true);
          setUser(response.data.user);
        })
        .catch((err) => console.error(err));
    }
  }, [api_URL]);

  /*
   * Login with username and password, creates JWT token saved in localStorage to persist login
   */
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.password.value);

    axios
      .post(`${api_URL}/login`, {
        username: event.target.username.value,
        password: event.target.password.value,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token); // save token in localStorage
        return axios.get(`${api_URL}/protected`, {
          headers: {
            Authorization: response.data.token,
          },
        });
      })
      .then((response) => {
        setLoggedIn(true);
        setUser(response.data.user);
        navigate("/services");
      })
      .catch((err) => console.error(err));
  };

  /*
   * Logout of application, clears localStorage JWT token and set state to logged out
   */
  //   const handleLogout = () => {
  //     localStorage.removeItem("token");
  //     setLoggedIn(false);
  //     setUser({});
  //   };

  return (
    <>
      {!loggedIn && (
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
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="checkbox" />
            <label className="form-check-label" htmlFor="checkbox">
              Keep me signed in
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      )}
    </>
  );
}

export default LoginPage;
