import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
  const routes = props.routes;
  return (
    <div>
      <ul>
        {routes.map(({ name, path }, key) => (
          <li key={key}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

Nav.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default Nav;
