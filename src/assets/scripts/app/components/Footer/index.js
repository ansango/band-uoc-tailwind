import React from "react";
import { NavLink } from "react-router-dom";
import { BlockOne, BlockTwo } from "./BlocksFooter";
const Footer = () => {
  return (
    <footer className="py-10">
      <BlockOne />
      <BlockTwo />
    </footer>
  );
};

export default Footer;
