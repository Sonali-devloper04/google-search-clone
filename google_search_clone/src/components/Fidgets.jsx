import React from "react";
import styled from "styled-components";
import { Image, Languages, GraduationCap, Music } from "lucide-react";

const iconsData = [
  {
    id: 1,
    icon: Image,
    iconColor: "#4c4530",
    bg: "#7c6721",
  },
  {
    id: 2,
    icon: Languages,
    iconColor: "#8bb3f7",
    bg: "#353e4e",
  },
  {
    id: 3,
    icon: GraduationCap,
    iconColor: "#cde8d4",
    bg: "#33423a",
  },
  {
    id: 4,
    icon: Music,
    iconColor: "#f28b82",
    bg: "#4b3034",
  },
];

const FidgetsSection = styled.div`
    display: flex;
    gap: 1rem;
    padding: 0.5rem 1rem 1rem;
    justify-content: space-around;
    margin-top: 15px;
    border-bottom: 2px solid #303134;
    overflow:auto;
`;

const FidgetCard = styled.div`
  border-radius: 26px;
  padding: 15px 30px;
  background-color: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    stroke: ${({ iconColor }) => iconColor};
    width: 20x;
    height: 20px;
  }
`;

const Fidgets = () => {
  return (
    <FidgetsSection>
      {iconsData.map(({ id, icon: Icon, bg, iconColor }) => (
        <FidgetCard key={id} bg={bg} iconColor={iconColor}>
          <Icon />
        </FidgetCard>
      ))}
    </FidgetsSection>
  );
};

export default Fidgets;
