import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import yoga from "./yoga.png";
const stripePromise = loadStripe(
  "pk_test_51INeeACxxb5cqhhO9GsBmV6eI2S7ArhU09ZzIuZfDRI2wC2ywRpu0QHQJD76lxt6RxRNVBj4rDh7wtHDKYQ0Ot6k00SP2hYcGE"
);

const Landing = () => {
  //show checkout
  const goToCheckout = async (e) => {
    const stripe = await stripePromise;
    const res = await fetch("http://localhost:5000/checkout-page", {
      method: "POST",
    });
    const session = await res.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <div className="main">
      {/* Navigation bar */}
      <div className="bg-dark mini">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h4 className="text-white navtext">Ahmad Tarabein</h4>
            <h4 className="text-white navtext">Courses Sale</h4>
          </div>
        </div>
      </div>
      <div className="main-body">
        <div className="container text-white">
          <div>
            <div className="row align-items-center">
              <div className="col-md-7">
                <p className="display-4 text-center">Online Yoga Course</p>
                <div className="text-center">
                  <p>limited time offer</p>
                  <p>By Ahmad Tarabein</p>
                  <h4>$25 only!</h4>
                  <button
                    className="btn btn-outline-warning"
                    onClick={goToCheckout}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="col-md-5">
                <div className="text-center">
                  <img src={yoga} alt="yoga" className="img img-fluid mt-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
