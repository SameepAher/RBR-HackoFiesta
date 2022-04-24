import React from "react";

export default function Login() {
  return (
    <div id="login">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <center>
              <h2 class="text-light bg-dark">
                {" "}
                <span>
                  {" "}
                  <b>Login </b>{" "}
                </span>
              </h2>
            </center>
            <div class="card my-5">
              <form class="card-body cardbody-color p-lg-5">
                <div class="text-center">
                  <img
                    src="data:image/png;base64,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"
                    class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="Username"
                    aria-describedby="emailHelp"
                    placeholder="User Name"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="password"
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-color px-5 mb-5 w-100">
                    Login
                  </button>
                </div>
                <div
                  id="emailHelp"
                  class="form-text text-center mb-5 text-dark"
                >
                  Not Registered?{" "}
                  <a href="SignUp.html" class="text-dark fw-bold">
                    {" "}
                    Create an Account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
