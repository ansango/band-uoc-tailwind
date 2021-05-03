import React from "react";
import PropTypes from "prop-types";
const Quote = (props) => {
  return (
    <div
      className={`max-w-2xl p-5 my-3 bg-white border-gray-300 shadow-md rounded-md text-${props.position}`}
    >
      <figure>
        <blockquote cite={props.url}>
          <p className="italic">{`"${props.content}"`}</p>
        </blockquote>
        <figcaption>
          <span className="font-bold">—{props.author}</span>,{" "}
          <cite>{props.cite}</cite>
        </figcaption>
      </figure>
    </div>
  );
};

Quote.propTypes = {
  position: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  cite: PropTypes.string.isRequired,
};

export default Quote;
