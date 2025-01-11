import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoleToggle from "../roletoggle/RoleToggle";
import "./AuthForm.css";

function AuthForm({ isLogin, onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, role });
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  const handleLoginRedirect = () => {
    navigate("/");
  };

  return (
    <div className="main-section">
      <form className="auth-form" onSubmit={handleSubmit}>
        {role === "user" ? (
          <h2>User {isLogin ? "Login" : "Registration"} </h2>
        ) : (
          <h2>Admin {isLogin ? "Login" : "Registration"}</h2>
        )}
        <RoleToggle role={role} setRole={setRole} />
        {!isLogin && (
          <>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>

        {isLogin ? (
          <p className="redirect-link">
            Don't have an account?
            <span onClick={handleRegisterRedirect} className="link">
              {" "}
              Register
            </span>
          </p>
        ) : (
          <p className="redirect-link">
            Already have an account?
            <span onClick={handleLoginRedirect} className="link">
              {" "}
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default AuthForm;
