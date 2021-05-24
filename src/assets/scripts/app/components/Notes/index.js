import React from "react";
import quotes from "../../data/quotes";
import Quote from "../Quote";

const Notes = () => {
  return <div className="flex flex-col items-end">{notes}</div>;
};

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

export default Notes;
