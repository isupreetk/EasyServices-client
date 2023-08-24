import "./LoginPage.scss";

function LoginPage() {
    return (
        <>
        <h1>Login Page</h1>
        <form>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" placeholder="Username" />

            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" placeholder="Email" />

            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" placeholder="Password" />
        </form>
        </>
    );
}

export default LoginPage;