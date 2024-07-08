import './App.css';
import React, { Component } from 'react';

class Form extends Component {
  nicknameRef = React.createRef();
  emailRef = React.createRef();
  genderRef = React.createRef();
  ageRef = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      nickname: this.nicknameRef.current.value,
      email: this.emailRef.current.value,
      gender: this.genderRef.current.value,
      age: this.ageRef.current.value,
    };
    if (this.validateData(formData)) {
      console.log(formData);
    } else {
      console.log("Not valid data");
    }
  };

  showErrorLabel = (id, text) => {
    const errorLabel = document.getElementById(id);
    errorLabel.innerText = text;
    errorLabel.style.color = 'red';
    errorLabel.style.fontSize = '0.8em';
  };

  validateData = (data) => {
    const regexEmail = /^[\w.-]+@[\w-]+\.[a-z]{2,4}$/i;
    const regexName = /^[a-zA-Z]{3,15}$/;

    let isValid = true;

    if (!regexEmail.test(data.email)) {
      this.showErrorLabel("emailError", "Invalid email format");
      isValid = false;
    } else {
      this.showErrorLabel("emailError", "");
    }

    if (data.age < 6) {
      this.showErrorLabel("ageError", "Ви занадто маленькі для цього сайту");
      isValid = false;
    } else if (data.age > 121) {
      this.showErrorLabel("ageError", "Ви занадто старі для цього сайту");
      isValid = false;
    } else {
      this.showErrorLabel("ageError", "");
    }

    if (!regexName.test(data.nickname)) {
      this.showErrorLabel("nameError", "Ваш нік має містити мінімум три літери");
      isValid = false;
    } else {
      this.showErrorLabel("nameError", "");
    }

    return isValid;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='formElement'>
        <div>
          <input
            type="text"
            placeholder="Nickname"
            ref={this.nicknameRef}
            required
          />
          <span id="nameError"></span>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            ref={this.emailRef}
            required
          />
          <span id="emailError"></span>
        </div>
        <div>
          <select ref={this.genderRef} required>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            placeholder="Age"
            ref={this.ageRef}
            required
          />
          <span id="ageError"></span>
        </div>
        <div>
          <input type="submit" value="Send data" />
        </div>
      </form>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <>
        <Form />
      </>
    );
  }
}
