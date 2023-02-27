import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";

export default function LoginPage()
{
    return (
    <div className="text-center m-5-auto">
        <div>
            <h1 className= "header"> Data Normalization Console </h1>
        </div>
        <div>
            <form action="/home">
                <p>
                    <label>UserName</label><br/>
                    <input className="textbox" type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <Link to="/forget-password"><label className="right-label">Forgot password ? </label></Link>
                <p>
                    <p>
                        <div className="check">
                            <input  type="checkbox"  id="checkbox" />  Remember me 
                        </div>
                    </p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
        </div>
    </div>
    )
}
