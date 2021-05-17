import React from "react";
import clouds from "url:../../../../images/hero/big2.jpg";
import { BlockEmpty, BlockText, BlockLink } from "./BlocksHero";
import contact from "../../../../images/hero/contact.jpg";
import tour from "../../../../images/hero/tour.jpg";

const Hero = () => (
  <div
    className="font-serif text-white text-6xl grid md:grid-cols-3"
    style={{ backgroundImage: `url(${clouds})` }}
  >
    <BlockEmpty />
    <BlockEmpty />
    <BlockLink text={"tour"} path={"/tour"} img={tour} />
    <BlockText text={"a"} />
    <BlockText text={"beat"} />
    <BlockText text={"band"} />
    <BlockLink text={"info"} path={"/band"} img={contact} />
    <BlockEmpty />
    <BlockEmpty />
  </div>
);

export default Hero;
