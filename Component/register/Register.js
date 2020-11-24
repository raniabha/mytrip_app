import React, { Component } from "react";
import "./Register.css"
export default class SignUp extends Component {
    render() {
        return (
            <div className="Register">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="First name" required/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>PhoneNo</label>
                    <input type="text" className="form-control" placeholder="Phone No" required />
                </div>
                 
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required/>
                </div>

                <div className="form-group">
                   <label>Please select your gender:</label>
                   <input type="radio" id="male" name="gender" value="male" required/>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" required/>
                    <label for="female">Female</label>
                </div>

                <div className="form-group">
                    <label>Address: </label>
                    <textarea name="myfield" className="form-control"  id="myfield"  rows="2" maxlength='200' placeholder="Enter adrees here..." required></textarea>
                </div>
                <div className="form-group">
                <label>Favourite: </label>
                <select id = "myList" >
                   <option value = "1">Goa</option>
                   <option value = "2">Mumbai</option>
                   <option value = "3">Mysore</option>
                   <option value = "4">Jaipur</option>
                   <option value = "4">Agra</option>
                   <option value = "4">Rameshwaram</option>
                </select>
                </div>
                <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
            </div>
        );
    }
}