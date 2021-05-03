import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../views/routes";

export const HomeLink = () => (
  <NavLink to="/" className="absolute inset-y-0 left-0 flex items-center">
    <code>!</code>undefined
  </NavLink>
);

export const Links = () =>
  routes.map(({ name, path }, key) => {
    if (name !== "home") {
      return (
        <div className="mx-2" key={key}>
          <NavLink to={path}>{name}</NavLink>
        </div>
      );
    }
  });

export const IconOpen = () => (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
export const IconClose = () => (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export const MobileMenu = () => (
  <div className="sm:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
      {routes.map(({ name, path }, key) => (
        <div className="mx-2" key={key}>
          <NavLink to={path}>{name}</NavLink>
        </div>
      ))}
    </div>
  </div>
);
