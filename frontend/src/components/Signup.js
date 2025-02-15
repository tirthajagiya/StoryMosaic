import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Signup() {
  const [data, setData] = useState({});
  return (
    <>
      <div class="auth-container">
        <div class="auth-header">
          <div class="logo-text">StoryMosaic</div>
          <p>Join Our Creative Community</p>
        </div>

        <form class="auth-form" action="/signup" method="POST">
          <div class="form-group">
            <label class="form-label">Username</label>
            <input
              type="text"
              class="form-input"
              name="username"
              placeholder="Choose a username"
              required
              onChange={(e) => {
                setData({ ...data, username: e.target.value });
              }}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-input"
              name="email"
              placeholder="Enter your email"
              required
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Phone Number</label>
            <input
              type="tel"
              class="form-input"
              name="phone"
              placeholder="Enter your phone number"
              required
              onChange={(e) => {
                setData({ ...data, number: e.target.value });
              }}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Password</label>
            <div class="password-input-container">
              <input
                type="password"
                class="form-input"
                name="password"
                placeholder="Create a password"
                required
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
            </div>
          </div>

          <div class="file-input-container">
            <label class="form-label">Profile Image</label>
            <label class="file-input-label">
              <input
                type="file"
                class="file-input"
                name="profile_image"
                accept="image/*"
                onChange={(e) => {
                  setData({ ...data, image: e.target.value });
                }}
              />
            </label>
          </div>

          <button
            type="submit"
            class="submit-btn"
            onClick={() => {
              const apiUrl = "http://localhost:3000/signup";
              fetch(apiUrl, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => res.json())
                .then((res) => console.log("Post Data")
                
            );
            }}
          >
            Create Account
          </button>

          <div class="auth-footer">
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
