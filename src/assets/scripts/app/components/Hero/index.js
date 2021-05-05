import React from "react";
import clouds from "url:../../../../images/hero/big2.jpg";
import { BlockEmpty, BlockText, BlockLink } from "./BlocksHero";
const Hero = () => (
  <div
    className="font-serif text-white text-6xl grid md:grid-cols-3"
    style={{ backgroundImage: `url(${clouds})` }}
  >
    <BlockEmpty />
    <BlockEmpty />
    <BlockLink text={"tour"} path={"/tour"} />
    <BlockText text={"a"} />
    <BlockText text={"beat"} />
    <BlockText text={"band"} />
    <BlockLink text={"info"} path={"/band"} />
    <BlockEmpty />
    <BlockEmpty />
  </div>
);

export default Hero;
