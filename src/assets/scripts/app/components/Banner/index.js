import React from "react";
import PropTypes from "prop-types";
import Title from "../Title";
import Code from "../Code";
const Banner = (props) => (
  <div className="text-center py-52">
    <Title text={props.title} />
    {props.isCode && <Code />}
  </div>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  isCode: PropTypes.bool,
};

export default Banner;
