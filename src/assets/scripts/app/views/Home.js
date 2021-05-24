import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="view">
      <Banner title={"a beat band"} isCode />
      <Hero />
    </div>
  );
};

export default Home;
