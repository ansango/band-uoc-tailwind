import React from "react";
import quotes from "../data/quotes";
import biography from "../data/biography";
import members from "../data/members";
import Quote from "../components/Quote";
import Title from "../components/Title";
import Code from "../components/Code";
import Card from "../components/Card";

const notes = quotes.map((quote, index) => (
  <Quote
    key={index}
    url={quote.url}
    content={quote.content}
    author={quote.author}
    cite={quote.cite}
    position={quote.position}
  />
));

const Banner = () => (
  <div className="py-52">
    <Title text={"HELLO WE ARE..."} />
  </div>
);

const band = members.map((member, index) => (
  <Card
    key={index}
    name={member.name}
    position={member.position}
    thumb={member.thumb}
    love={member.love}
    twitter={member.twitter}
    icon={member.icon}
    emoji={member.emoji}
  />
));

const bio = biography.map((item, key) => (
  <h3 key={key} className="font-serif py-6 text-3xl">
    {item}
  </h3>
));

const Band = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div>
        <Banner />
      </div>
      <div className="flex flex-col items-end">{notes}</div>
      <div className="py-52 text-center">
        <Code />
      </div>
      <div className="pb-52 flex flex-wrap w-full mx-auto md:max-w-3xl lg:max-w-5xl">
        {band}
      </div>
      <div className="py-5">{bio}</div>
    </div>
  );
};

export default Band;
