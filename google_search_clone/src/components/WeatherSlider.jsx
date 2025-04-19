import React from "react";
import styled from "styled-components";
import { Moon, Waves, Droplet } from "lucide-react";

const ScrollWrapper = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 12px 16px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
    flex: 0 0 auto;
    min-width: 160px;
    background-color: transparent;
    border-radius: 14px;
    padding: 12px 16px;
    color: #fff;
    border: 1px solid #5f5f5f;
`;

const CardTitle = styled.div`
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 6px;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardValue = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const cards = [
  { title: "Gurugram", value: "30°", icon: <Moon size={18} />, bg: "#1f1f1f" },
  { title: "Air quality · 170", value: "Moderate", icon: <Waves size={18} />, bg: "#1f1f1f" },
  { title: "Humidity", value: "45%", icon: <Droplet size={18} />, bg: "#1f1f1f" },
];

const WeatherSlider = () => {
  return (
    <ScrollWrapper>
      {cards.map((card, i) => (
        <Card key={i} bg={card.bg}>
          <CardTitle>{card.title}</CardTitle>
          <CardBottom>
            <CardValue>{card.value}</CardValue>
            <IconWrapper>{card.icon}</IconWrapper>
          </CardBottom>
        </Card>
      ))}
    </ScrollWrapper>
  );
};

export default WeatherSlider;
