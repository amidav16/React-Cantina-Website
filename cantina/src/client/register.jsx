import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class Register extends Form {
  state = {
    //controlled value cannot be null or unidentified...
    //therefore initiliaze it to an empty string or some value you find from the server
    data: { username: "", password: "", email: "", newsLetter: false },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username")
      .max(20),
    email: Joi.string()
      .required()
      .label("Email")
      .min(5)
      .email(),
    password: Joi.string()
      .required()
      .label("Password")
      .min(5)
  };

  doSubmit = () => {
    //Register the user
  };

  handleCheckbox(e) {
    //const target = e.target;
    //const value = target.type === "checkbox" ? target.checked : target.value;
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("email", "Email")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
