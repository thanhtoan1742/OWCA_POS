import React from 'react';
import './Login.css'

function Login() {
    return (
        <div className="login-form-container" id="login">
            <form action="">
                <h3>login form</h3>
                <input type="email" placeholder="Enter your email" className="box"/>
                <input type="password" placeholder="Enter your password" className="box" />
                <div className="remember">
                    <input type="checkbox" name="" id="remember-me"/>
                    <label htmlFor="remember-me">remember me</label>
                </div>
                <input type="submit" value="login now" className="btn" />
                <p>forget password? <a href="/#">Click here</a></p>
                <p>don't have an account? <a href="/#">Create one</a></p>
            </form>
        </div>
    );
}

export default Login;