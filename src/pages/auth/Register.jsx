import React from "react";
import {Link} from "react-router-dom";
export default function Register() {
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          {/* Register Card */}
          <div className="card">
            <div className="card-body">
              {/* Logo */}
              <div className="app-brand justify-content-center">
                <Link to="/" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                    <img src="/vite.svg" alt="logo" />
                  </span>
                  <span className="app-brand-text demo text-body fw-bolder">
                    Sneat
                  </span>
                </Link>
              </div>
              {/* /Logo */}
              <h4 className="mb-2">Adventure starts here 🚀</h4>
              <p className="mb-4">Make your app management easy and fun!</p>

              <form
                id="formAuthentication"
                className="mb-3"
                action="index.html"
                method="POST"
              >
                <div className="mb-3 text-start">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    autoFocus
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3 form-password-toggle text-start">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span className="input-group-text cursor-pointer">
                      <i className="bx bx-hide"></i>
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms-conditions"
                      name="terms"
                    />
                    <label className="form-check-label" htmlFor="terms-conditions">
                      I agree to
                      <Link to=""> privacy policy & terms</Link>
                    </label>
                  </div>
                </div>
                <button className="btn btn-primary d-grid w-100">Sign up</button>
              </form>

              <p className="text-center">
                <span>Already have an account? </span>

                <Link to="/login">
                  <span>Sign in instead</span>
                </Link>
              </p>
            </div>
          </div>
          {/* Register Card */}
        </div>
      </div>
    </div>
  );
}
