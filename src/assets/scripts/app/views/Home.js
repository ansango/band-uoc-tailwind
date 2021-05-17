import React from "react";
import Title from "../components/Title";
import Code from "../components/Code";
import Hero from "../components/Hero";
const Banner = () => (
  <div className="text-center py-52">
    <Title text={"a beat band"} />
    <Code />
  </div>
);

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <Banner />
      <Hero />
    </div>
  );
};

export default Home;
