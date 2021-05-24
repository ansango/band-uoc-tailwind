import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaApple,
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
export const BlockOne = () => (
  <div className="block-one">
    <div className="description">
      <h4>
        <code>{"!"}</code>
        {"undefined"}
      </h4>
      <p>
        {
          "We are not undefined an electronic collective from Berlin, Germany. We make noise and beautiful things. For bookings or any other information you can send us an email to:"
        }
      </p>
      <a href="mailto:info@notundefined.com">{"info@notundefined.com"}</a>
    </div>
    <div className="streaming">
      <h4>{"Streaming"}</h4>
      <a href="/#">
        <FaSpotify />
        <span>{"Spotify"}</span>
      </a>
      <a href="/#">
        <FaApple />
        <span>{"Apple"}</span>
      </a>
      <a href="/#">
        <FaYoutube />
        <span>{"Youtube"}</span>
      </a>
    </div>
    <div className="dates">
      <h4>{"Next date"}</h4>
      <p>{"Kindl-Bühne Wuhlheide, Berlin, Germany"}</p>
      <p>{"Saturday 02 September 2021"}</p>
      <NavLink className="text-primary" to="/tour">
        {"Checkout all new dates!"}
      </NavLink>
    </div>
  </div>
);

export const BlockTwo = () => (
  <div className="block-two">
    <div className="band">
      <NavLink to="/">
        <code>{"!"}</code>
        {"undefined"}
      </NavLink>
    </div>
    <div className="entities">
      <ul>
        <li>
          <NavLink to="/band">{"band"}</NavLink>
        </li>
        <li>
          <NavLink to="/tour">{"tour"}</NavLink>
        </li>
      </ul>
    </div>
    <div className="social">
      <a href="/#">
        <FaFacebook />
      </a>
      <a href="/#">
        <FaTwitter />
      </a>
      <a href="/#">
        <FaInstagram />
      </a>
    </div>
  </div>
);
