import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

const main = () => {
  return (
    <div className="main">
      <h3>Would like to know:</h3>
      <h2>How is your week going?</h2>
      <Link to="/question">
        <div className="mood_container">
          <img
            src="https://assets.butterfly.ai/email-images/mood-1.v2.png"
            alt="mood1"
          />

          <img
            src="https://assets.butterfly.ai/email-images/mood-2.v2.png"
            alt="mood1"
          />

          <img
            src="https://assets.butterfly.ai/email-images/mood-3.v2.png"
            alt="mood1"
          />

          <img
            src="https://assets.butterfly.ai/email-images/mood-4.v2.png"
            alt="mood1"
          />

          <img
            src="https://assets.butterfly.ai/email-images/mood-5.v2.png"
            alt="mood1"
          />
        </div>
      </Link>
    </div>
  );
};

export default main;
