import React from "react";

export default function Prevent() {
  return (
    <div>
      <>
        <section class="prevent" id="prevent">
          <h1 class="heading">
            {" "}
            <span>Waste Disposal</span>{" "}
          </h1>

          <div class="container">
            <div class="d-flex flex-wrap justify-content-center">
              <div class="box p-4 m-2">
                <img
                  src="https://yantratools.com/public/uploads/products/photos/IQsqcSLi9mf771q9OIpOly0keSC64lrYM8cEFtuD.png"
                  alt=""
                />
                <h3>Green Dustbins</h3>
                <p>
                  The Green-coloured dustbins are meant for wet and
                  biodegradable wastes. For example, kitchen wastes including
                  vegetables and fruits skins.{" "}
                </p>
              </div>

              <div class="box p-4 m-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6IStCzoylh1gORPPSKyNYIpokHlfKsdrTg&usqp=CAU"
                  alt=""
                />
                <h3>Blue Dustbins</h3>
                <p>
                  Blue dustbins are meant for disposal of plastic wrappers and
                  non-bioderadable wastes. For example, Chips Wrappers,E-waste
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="prevent" id="prevent">
          <h1 class="heading">
            {" "}
            What are the <span>Cautions</span>?{" "}
          </h1>

          <div class="container">
            <div class="d-flex flex-wrap justify-content-center">
              <div class="box p-4 m-2">
                <img src="images/fever.webp" alt="" />
                <h3>Parasitic infections</h3>
                <p>
                  Parasitic infections are one of the most common diseases
                  caused due to improper waste management.
                </p>
              </div>

              <div class="box p-4 m-2">
                <img src="images/cough.png" alt="" />
                <h3>Skin infections</h3>
                <p>
                  Skin can become easily infected if it comes in contact with
                  any number of pathogens in medical waste. It is the first
                  symptom of an infection caused due to waste contact.
                </p>
              </div>

              <div class="box p-4 m-2">
                <img src="images/tired.png" alt="" />
                <h3>Bacteremia</h3>
                <p>
                  Bacteremia is an extremely dangerous infection that transmits
                  to organs throughout the body when bacteria is present in the
                  bloodstream. Sharps and other instruments can contain
                  pathogens that cause bacteremia with improper disposal.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
