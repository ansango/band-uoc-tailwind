import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const BlockEmpty = () => <div className="hidden md:block h-60"></div>;
export const BlockLink = (props) => (
  <NavLink
    className="hidden w-full h-60 lg:h-72 xl:h-80 md:flex flex-col items-center justify-center"
    to={props.path}
  >
    <h3>{props.text}</h3>
  </NavLink>
);

BlockLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export const BlockText = (props) => (
  <div className="h-60 lg:h-72 xl:h-80 w-full flex flex-col items-center justify-center">
    <h3>{props.text}</h3>
  </div>
);

BlockText.propTypes = {
  text: PropTypes.string.isRequired,
};
