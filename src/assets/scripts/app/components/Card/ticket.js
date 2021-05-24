import React from "react";
import PropTypes from "prop-types";
import { FaTicketAlt } from "react-icons/fa";
const Ticket = (props) => {
  let appoint = props.appoint;
  let date = `${appoint.date.month} ${appoint.date.day} ${appoint.date.dayWeek}`;
  let country = `${appoint.location[1].region}`;
  let time = `${appoint.hour}`;
  let place = `${appoint.location[0].place}`;
  let event = `${place} | ${time}`;
  return (
    <div className="mb-5">
      <div className="flex justify-between p-4 border border-gray rounded-md">
        <div>
          <p className="mb-4">{date}</p>
          <p className="mb-4">{event}</p>
          <p className="mb-4">{country}</p>
          <button className="bg-primary rounded-md px-3 py-2 text-white">
            Tickets
          </button>
        </div>
        <div className="text-primary">
          <FaTicketAlt size={20} />
        </div>
      </div>
    </div>
  );
};
Ticket.propTypes = {
  appoint: PropTypes.object.isRequired,
};

export default Ticket;
