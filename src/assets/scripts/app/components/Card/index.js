import React from "react";
import PropTypes from "prop-types";
import { FaHeart, FaTwitter } from "react-icons/fa";
const Card = (props) => {
  return (
    <div className="card w-full md:w-1/2 lg:w-1/3 flex mb-5">
      <div className="w-full flex justify-center">
        <div
          className="thumbnail flex flex-column justify-center items-center w-80 h-80 bg-cover border-8 border-gray-900"
          style={{
            backgroundImage: `url(${props.thumb})`,
          }}
        >
          <div className="layer bg-white w-full h-full flex-col justify-center items-center">
            <div>
              <h5 className="flex items-center font-bold text-lg">
                <span className="mr-2">{props.emoji}</span>
                <span>{props.name}</span>
              </h5>
              <h6 className="flex items-center">
                <span className="mr-2">{props.icon}</span>
                <span>{props.position}</span>
              </h6>
              <p className="flex items-center">
                <span className="mr-2">
                  <FaHeart />
                </span>
                <span>{props.love}</span>
              </p>
            </div>

            <a
              className="twitter mt-4"
              href={props.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  thumb: PropTypes.string.isRequired,
  emoji: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  position: PropTypes.string.isRequired,
  love: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
};

export default Card;
