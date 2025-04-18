import React, { useEffect, useState } from "react";
import { getFeed } from "../utils/feed";

const Feed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const data = getFeed();
    setFeed(data);
  }, []);

  return (
    <section className="feed-section">
      {feed.map((item, i) => (
        <div className="feed-card" key={i}>
          <h4>{item.title}</h4>
          <p>{item.content}</p>
        </div>
      ))}
    </section>
  );
};

export default Feed;
