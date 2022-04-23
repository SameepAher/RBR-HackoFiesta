import React from "react";

export default function About() {
  return (
    <div>
      <>
        <section className="about" id="about">
          <div className="container-fluid pt-5 pb-5" id="about">
            <h1 className="heading text-center mb-5 mt-4">
              Our<span> Vision</span>
            </h1>
            <div className="row">
              <div className="col-lg-5 col-md-6 col-12 tim">
                <img
                  src="https://i.ytimg.com/vi/j4B9nP8Suyw/maxresdefault.jpg"
                  className="image fluid vision"
                  style="width:90%;"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12 content tim">
                <p>
                  We recognised the importance of cleanliness in India and we
                  realised that maximum time that people litter on streets is
                  when they don’t have any idea where the dustbin near them is.
                </p>
                <p>
                  {" "}
                  So, with this vision we tried to make an interactive website
                  through which users can find the nearest dustbins to them.{" "}
                </p>
                <p>
                  Our website takes people's live location and locates the
                  nearest dustbinto them using the Google Maps API.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
