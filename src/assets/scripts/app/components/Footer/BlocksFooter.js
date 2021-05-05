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
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 sm:flex flex-wrap">
    <div className="mb-10 md:px-5 w-full md:w-1/2 md:order-last">
      <h3 className="mb-2 sm:mb-3 md:mb-4">
        <code>{"!"}</code>
        {"undefined"}
      </h3>
      <p className="mb-4">
        {
          "We are not undefined an electronic collective from Berlin,Germany. We make noise and beautiful things. For bookings or any other information you can send us an email to:"
        }
      </p>
      <a href="mailto:info@notundefined.com">{"info@notundefined.com"}</a>
    </div>
    <div className="mb-10 md:px-5 w-full sm:w-1/2 md:w-1/4">
      <h3 className="mb-2 sm:mb-3 md:mb-4">{"Streaming"}</h3>
      <a className="flex items-center" href="/#">
        <FaSpotify />
        <span className="mx-2">{"Spotify"}</span>
      </a>
      <a className="flex items-center" href="/#">
        <FaApple />
        <span className="mx-2">{"Apple"}</span>
      </a>
      <a className="flex items-center" href="/#">
        <FaYoutube />
        <span className="mx-2">{"Youtube"}</span>
      </a>
    </div>
    <div className="mb-10 md:px-5 w-full sm:w-1/2 md:w-1/4">
      <h3 className="mb-2 sm:mb-3 md:mb-4">{"Next date"}</h3>
      <p className="mb-4">{"Saturday 02 September 2021"}</p>
      <p className="mb-4">{"Kindl-Bühne Wuhlheide, Berlin, Germany"}</p>
      <NavLink className="text-primary" to="/tour">
        {"Checkout all new dates!"}
      </NavLink>
    </div>
  </div>
);

export const BlockTwo = () => (
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 sm:flex items-center">
    <div className="mb-3 text-center w-full sm:mb-0 sm:w-1/6">
      <NavLink to="/">
        <code>{"!"}</code>
        {"undefined"}
      </NavLink>
    </div>
    <div className="w-full flex justify-center">
      <ul className="mb-5 text-center justify-center sm:mb-0 sm:flex sm:w-1/2">
        <li className="mx-3">
          <NavLink to="/band">{"band"}</NavLink>
        </li>
        <li className="mx-3">
          <NavLink to="/tour">{"tour"}</NavLink>
        </li>
      </ul>
    </div>
    <div className="flex justify-around w-full sm:w-1/6">
      <a className="mx-4" href="/#">
        <FaFacebook />
      </a>
      <a className="mx-4" href="/#">
        <FaTwitter />
      </a>
      <a className="mx-4" href="/#">
        <FaInstagram />
      </a>
    </div>
  </div>
);
