import React from "react";
import Parallax from "../components/Parallax";
import Ticket from "../components/Card/ticket";
import appoints from "../data/appoints";
import tour from "../../../images/parallax/tour.jpg";
import Table from "../components/Table";
import Gallery from "../components/Gallery";
const Tour = () => {
  return (
    <>
      <Parallax img={tour} title={"TOUR 2021"} />
      <div className="view">
        <div className="md:hidden max-w-lg mx-auto px-2">
          {appoints.map((appoint, index) => {
            return <Ticket key={index} appoint={appoint} />;
          })}
        </div>
        <div className="hidden md:flex justify-center">
          <Table appoints={appoints} />
        </div>
        <div className="max-w-lg md:max-w-none mx-auto px-2 py-10">
          <Gallery />
        </div>
      </div>
    </>
  );
};

export default Tour;
