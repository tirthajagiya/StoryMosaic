import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
export default function Login() {
  const [data, setData] = useState({});
  const [fdata, setfData] = useState({});

  return (
    <>
      <div class="auth-container">
        <div class="auth-header">
          <div class="logo-text">StoryMosaic</div>
          <p>Welcome Back to StoryMosaic</p>
        </div>

        <form class="auth-form" action="/login">
          <div class="form-group">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-input"
              name="email"
              placeholder="Enter your email"
              required
              onChange={(e) => {
                setData({ ...data, username: e.target.value });
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
                placeholder="Enter your password"
                required
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            class="submit-btn"
            onClick={() => {
              
              const apiUrl = "http://localhost:3000/signup";
              fetch(apiUrl, { method: "GET" })
                .then((res) => res.json())
                .then((res) => setfData(res));
              if (fdata.username == data.username) {
                if (fdata.password == data.password) {
                } else {
                  Swal.fire("Please Enter Valid Password !");
                }
              } else {
                Swal.fire("Please Enter A Valid User Name !");
              }
              
              Navigate('/aa')
            }}
          >
            Login
          </button>

          <div class="auth-footer">
            <p>
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
            <p style={{ "margin-top": "0.5rem" }}>
              Forgot your password? <a href="#">Reset it here</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
