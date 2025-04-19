import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFeed } from "../utils/feed";

const FeedContainer = styled.section`
  padding: 0 16px 100px;
`;

const Card = styled.div`
  border-radius: 20px;
  margin-bottom: 16px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
`;

const CardContent = styled.p`
  color: #ffffff;
  font-size: 20px;
  line-height: 1.4;
  padding: 12px;
`;

const Feed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const data = getFeed();
    setFeed(data);
  }, []);

  return (
    <FeedContainer>
      {feed.map((item, index) => (
        <Card key={index}>
          <CardImage src={item.image} alt="feed" />
          <CardContent>{item.content}</CardContent>
        </Card>
      ))}
    </FeedContainer>
  );
};

export default Feed;
