import React from "react";
import styled, { css } from "styled-components";

import { Home, Moon, Bell, Menu } from "lucide-react";

const Footer = styled.div`
position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #303135;
    border-top: 1px solid #2a2a2a;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    bottom: 0;

     @media (min-width: 480px) {
        width:450px;
  }
`;

const IconWrapper = styled.div`
  color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ active }) =>
    active &&
    css`
      color: #8ab4f8;

      &::after {
        content: "";
        width: 6px;
        height: 6px;
        background-color: #8ab4f8;
        border-radius: 50%;
        margin-top: 4px;
      }
    `}
`;

const StickyFooter = () => {
  return (
    <Footer>
      <IconWrapper active><Home size={24} /></IconWrapper>
      <IconWrapper><Moon size={24} /></IconWrapper>
      <IconWrapper><Bell size={24} /></IconWrapper>
      <IconWrapper><Menu size={24} /></IconWrapper>
    </Footer>
  );
};

export default StickyFooter;
