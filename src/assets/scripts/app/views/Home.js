import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

const center = "text-center";

const Home = () => {
  return (
    <div className="view">
      <Banner title={"a beat band"} position={center} isCode />
      <Hero />
    </div>
  );
};

export default Home;
