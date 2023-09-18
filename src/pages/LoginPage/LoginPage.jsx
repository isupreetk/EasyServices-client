import "./LoginPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ setUserLogin }) {
  const api_URL = `${process.env.REACT_APP_API_URL}`;
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
  }, []);

  /*
   * Login with username and password, creates JWT token saved in localStorage to persist login
   */
  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post(`${api_URL}/login`, {
        username: event.target.username.value,
        password: event.target.password.value,
      })
      .then((response) => {
        // save token, username and service_provider in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem(
          "service_provider",
          response.data.service_provider
        );
        return axios.get(`${api_URL}/protected`, {
          headers: {
            Authorization: response.data.token,
          },
        });
      })
      .then((response) => {
        console.log("user", response.data.user);
        setLoggedIn(true);
        setUser(response.data.user);
        setUserLogin(response.data.user);
        navigate("/services");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5 col-6">
          <h1 className="text-center">LOGIN</h1>
          {!loggedIn && user && (
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
                Sign In
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
