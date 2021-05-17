import React from "react";
import PropTypes from "prop-types";
import { FaTicketAlt } from "react-icons/fa";
const Table = (props) => {
  return (
    <table className="table-auto">
      <tbody className="divide-y divide-gray-200">
        {props.appoints.map((appoint, index) => {
          let date = `${appoint.date.month} ${appoint.date.day} ${appoint.date.dayWeek}`;
          let country = `${appoint.location[1].region}`;
          let time = `${appoint.hour}`;
          let place = `${appoint.location[0].place}`;
          let event = `${place} | ${time}`;
          return (
            <tr key={index}>
              <td className="px-6 py-4">
                <FaTicketAlt size={20} />
              </td>
              <td className="px-6 py-4 xl:px-10">{date}</td>
              <td className="px-6 py-4 xl:px-20">{event}</td>
              <td className="px-6 py-4 xl:px-20">{country}</td>
              <td className="px-6 py-4">
                <button className="bg-black rounded-md px-3 py-2 text-white">
                  Tickets
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  appoints: PropTypes.array.isRequired,
};

export default Table;
