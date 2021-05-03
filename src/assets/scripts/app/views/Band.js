import React from "react";
import quotes from "../data/quotes";
import Quote from "../components/Quote";
const Band = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div>
        <h1>{"HELLO WE ARE..."}</h1>
      </div>
      <div className="flex flex-col items-end">
        {quotes.map((quote, index) => {
          return (
            <Quote
              key={index}
              url={quote.url}
              content={quote.content}
              author={quote.author}
              cite={quote.cite}
              position={quote.position}
            />
          );
        })}
      </div>
      <div className="">
        <h2>
          <code className="">!==</code>
        </h2>
      </div>
      <div className="py-5">
        {bio.map((item, key) => (
          <h3 key={key} className="py-3">
            {item}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Band;

const bio = [
  "We were born in Berlin, we make noise, we like noise, we can't stop making noise. Sometimes we do quieter things, but only when we have a hangover on Fridays.",
  "Covid has kept us from touring, but when it's over, you can find us in basements, garages, churches, abandoned churches, discotheques, country bars, posh places, punk places and wherever there's a plug and wifi.",
  "We like books, ipa punk beer, bikes, skateboarding and busting tympani.",
  "We hope to see you soon. xxx",
];
