import React from "react";
import PropTypes from "prop-types";
const Parallax = (props) => (
  <section
    className="flex items-center justify-center sm:justify-end min-h-custom m-auto mb-12 bg-fixed bg-center bg-cover"
    style={{
      backgroundImage: `url(${props.img})`,
    }}
  >
    <div className="px-2 sm:px-6 md:px-10 lg:px-40">
      <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl">
        {props.title}
      </h1>
    </div>
  </section>
);

Parallax.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Parallax;
