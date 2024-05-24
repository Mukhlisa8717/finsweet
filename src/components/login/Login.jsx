"use client";

import React, { useState } from "react";
import './Login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loginData", JSON.stringify(formData));
    alert("Data saved to localStorage");
  };

  return (
    <div className="login">
      <div className="container login__content">
        <h2 className="login__title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="First Name"
              className="login__input"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              className="login__input"
            />
          </div>
          <div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="User Name"
              className="login__input"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="login__input"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="login__input"
            />
          </div>
          <button type="submit" className="login__btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
