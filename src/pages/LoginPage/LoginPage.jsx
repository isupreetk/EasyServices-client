import "./LoginPage.scss";
import axios from "axios";

function LoginPage() {
    
    const api_URL = `${process.env.REACT_APP_API_URL}/login`;
    // console.log(api_URL);

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.email.value);
        console.log(event.target.password.value);

        axios.post(api_URL, {
            "email": event.target.email.value,
            "password": event.target.password.value
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }
    
    return (
        <>
        <div className="login">
        <form className="login__form" onSubmit={handleLoginSubmit}>
        {/* <div className="login__form-container"> */}
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" placeholder="Email" />

            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" placeholder="Password" />

            <button type="submit">Log In</button>
        {/* </div> */}
        </form>
        </div>
        </>
    );
}

export default LoginPage;