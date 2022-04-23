import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <>
        <section className="home" id="home">
          <div className="container">
            <div className="row min-vh-100 align-items-center pt-5">
              <div className="col-md-6">
                <img
                  src="https://tfipost.com/wp-content/uploads/2016/11/Modi-clean-India-Mission-750x350.jpg"
                  className="w-100 cleanindia"
                  alt="Modi"
                />
              </div>
              <div className="col-md-6 content text-center text-md-start pl-md-5">
                <span>Swasth Bharat, Swachh Bharat</span>
                <h3>Cleaner India, Beautiful India</h3>
                <a href="#" className="link-btn" target="_blank">
                  {/* <Route exact path="/" component={Home} /> */}+ Dustbins
                  Near You
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
