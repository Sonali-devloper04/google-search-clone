import React from "react";

const topics = ["Weather", "Cricket", "Trending", "Movies"];

const Fidgets = () => {
  return (
    <section className="fidgets-section">
      {topics.map((topic, i) => (
        <div key={i} className="fidget-card">
          <p>{topic}</p>
        </div>
      ))}
    </section>
  );
};

export default Fidgets;
