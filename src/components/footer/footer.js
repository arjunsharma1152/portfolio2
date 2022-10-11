import React from "react";

import "./footer.scss";

import { Icon } from "@iconify/react";

const Footer = () => (
  <div className="footer-container">
    <a
      href="https://linkedin.com/in/arjunsharma11"
      target="_blank"
      rel="noreferrer"
    >
      <Icon
        className="icon"
        icon="akar-icons:linkedin-box-fill"
        color="#f7022b"
        width="35"
        height="35"
      />
    </a>
    <a
      href="https://github.com/arjunsharma1152"
      target="_blank"
      rel="noreferrer"
    >
      <Icon
        className="icon"
        icon="akar-icons:github-fill"
        color="#f7022b"
        width="35"
        height="35"
      />
    </a>
    <a
      href="https://instagram.com/arjunsharma__11"
      target="_blank"
      rel="noreferrer"
    >
      <Icon
        className="icon"
        icon="ant-design:instagram-filled"
        color="#f7022b"
        width="35"
        height="35"
      />
    </a>
    <a href="https://devpost.com/arjunsk923" target="_blank" rel="noreferrer">
      <Icon
        className="icon"
        icon="simple-icons:devpost"
        color="#f7022b"
        width="35"
        height="35"
      />
    </a>
    <a
      href="https://codeforces.com/profile/shar_ma_arjun"
      target="_blank"
      rel="noreferrer"
    >
      <Icon
        className="icon"
        icon="simple-icons:codeforces"
        color="#f7022b"
        width="35"
        height="35"
      />
    </a>
  </div>
);

export default Footer;
