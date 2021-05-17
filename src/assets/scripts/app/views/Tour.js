import React from "react";
import Parallax from "../components/Parallax";
import Ticket from "../components/Card/ticket";
import appoints from "../data/appoints";
import tour from "../../../images/parallax/tour.jpg";
import Table from "../components/Table";
const Tour = () => {
  return (
    <div>
      <Parallax img={tour} title={"TOUR 2021"} />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="md:hidden max-w-lg mx-auto px-2">
          {appoints.map((appoint, index) => {
            return <Ticket key={index} appoint={appoint} />;
          })}
        </div>
        <div className="hidden md:flex justify-center">
          <Table appoints={appoints} />
        </div>
      </div>
    </div>
  );
};

export default Tour;
