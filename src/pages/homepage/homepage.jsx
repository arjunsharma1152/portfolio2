import React from "react";

import "./homepage.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="home-content">
      <p className="small">Hi, there!</p>
      <p className="large">
        I'M <span className="highlight">ARJUN</span>
        <br />
        WEB DEVELOPER
      </p>
      <p className="small">
        Currently pursuing Bachelor of Technology from M.J.P. Rohilkhand
        University, Bareilly.
      </p>

      <button>Resume</button>
    </div>

    <div className="user-image">
      <img src="https://bit.ly/3ywpPPw" alt="user" />
    </div>
  </div>
);

export default HomePage;
