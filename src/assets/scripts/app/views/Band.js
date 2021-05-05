import React from "react";
import quotes from "../data/quotes";
import biography from "../data/biography";
import Quote from "../components/Quote";

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

const bio = biography.map((item, key) => (
  <h3 key={key} className="py-3">
    {item}
  </h3>
));

const Band = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div>
        <h1>{"HELLO WE ARE..."}</h1>
      </div>
      <div className="flex flex-col items-end">{notes}</div>
      <div className="">
        <h2>
          <code className="">!==</code>
        </h2>
      </div>
      <div className="py-5">{bio}</div>
    </div>
  );
};

export default Band;
