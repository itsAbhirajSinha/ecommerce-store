import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg-2.jpg"
          className="card-img"
          alt="Background"
          height="650px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
            <p className="card-text lead fs-2">
              Check Out
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};
