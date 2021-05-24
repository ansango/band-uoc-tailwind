import React from "react";
import { NavLink } from "react-router-dom";
import { BlockOne, BlockTwo } from "./BlocksFooter";
const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
      <BlockOne />
      <BlockTwo />
    </footer>
  );
};

export default Footer;
