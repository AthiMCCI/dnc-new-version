import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";



function LoginPage () {
    return (
        <div className="text-center m-5-auto">
            <h1>Data Normalization Console </h1>
            <h2>Login</h2>
            <form action="/home">
                <p>
                    <label>UserName</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                   
                    <br/>
                    <input type="password" name="password" required />
                    
                </p>
                <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>
                <p>
                <p>
                    <input  type="checkbox"  name="checkbox"  id="checkbox" required   /> <span> Remember me </span>
                </p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
                
            </form>
            <footer>
                 <Link to="/register">Sign Up</Link>
                {/* <p><Link to="/login">Back to Homepage</Link>.</p> */}
            </footer>
        </div>
    )
}
export default LoginPage;