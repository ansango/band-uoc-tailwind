import React from "react";
import Title from "../components/Title";
import Hero from "../components/Hero";
const Banner = () => (
  <div className="text-center py-52">
    <Title text={"a beat band"} />
    <code className="font-bold text-6xl md:text-8xl xl:text-9xl">!==</code>
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
