import React from "react";
import { NavLink } from "react-router-dom";
import { BlockOne, BlockTwo } from "./BlocksFooter";
const Footer = () => {
  return (
    <footer className="footer">
      <BlockOne />
      <BlockTwo />
    </footer>
  );
};

export default Footer;
