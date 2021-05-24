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
  <div className="sm:flex flex-wrap">
    <div className="mb-10 md:px-5 w-full md:w-1/2 md:order-last">
      <h4 className="mb-2 sm:mb-3 md:mb-4 font-bold text-primary">
        <code>{"!"}</code>
        {"undefined"}
      </h4>
      <p className="mb-4">
        {
          "We are not undefined an electronic collective from Berlin, Germany. We make noise and beautiful things. For bookings or any other information you can send us an email to:"
        }
      </p>
      <a className="text-primary" href="mailto:info@notundefined.com">
        {"info@notundefined.com"}
      </a>
    </div>
    <div className="mb-10 md:px-5 w-full sm:w-1/2 md:w-1/4 text-primary">
      <h4 className="mb-2 sm:mb-3 md:mb-4 font-bold">{"Streaming"}</h4>
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
      <h4 className="mb-2 sm:mb-3 md:mb-4 font-bold text-primary">
        {"Next date"}
      </h4>
      <p className="mb-4">{"Saturday 02 September 2021"}</p>
      <p className="mb-4">{"Kindl-Bühne Wuhlheide, Berlin, Germany"}</p>
      <NavLink className="text-primary" to="/tour">
        {"Checkout all new dates!"}
      </NavLink>
    </div>
  </div>
);

export const BlockTwo = () => (
  <div className="sm:flex items-center text-primary">
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
