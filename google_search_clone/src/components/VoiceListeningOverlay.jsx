// VoiceListeningOverlay.js
import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from 'react-router-dom';

const fade = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #202124;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 9999;
  
`;

const SpeakText = styled.div`
  color: #ccc;
  font-size: 20px;
  margin-bottom: 30px;
`;

const Dots = styled.div`
  display: flex;
  gap: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: ${fade} 1.2s infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

const BlueDot = styled(Dot)` background: #4285F4; `;
const RedDot = styled(Dot)` background: #EA4335; `;
const YellowDot = styled(Dot)` background: #FBBC05; `;
const GreenDot = styled(Dot)` background: #34A853; `;
const SongSearchButton = styled.button`
  background-color: transparent;
  color: #ccc;
  border: 1px solid #555;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;

`;
const IconButton = styled.button`
  background-color: transparent;
  border: none;
`;
const BackIconButton = styled(IconButton)`
 position: absolute;
    left: 10px;
    top: 50px;
`;
const VoiceListeningOverlay = () => {
     const navigate = useNavigate();
  return (
    <>
    
        <Overlay>
        <BackIconButton type="button" onClick={() => navigate("/")}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
            <path d="M15.5 19.5 9 13l6.5-6.5L14 5l-8 8 8 8Z"/>
          </svg>
        </BackIconButton>
        <SpeakText>Speak now</SpeakText>
        <Dots>
          <BlueDot delay={0} />
          <RedDot delay={0.2} />
          <YellowDot delay={0.4} />
          <GreenDot delay={0.6} />
        </Dots>
        <SongSearchButton>
        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" fill="#ccc">
          <path d="M9 13.4q-1.875 0-3.137-1.262Q4.6 10.875 4.6 9V4.9q0-1.875 1.263-3.137Q7.125.5 9 .5t3.137 1.263Q13.4 3.025 13.4 4.9V9q0 1.875-1.263 3.138Q10.875 13.4 9 13.4Zm-6.5 1v-1.5h13v1.5Z" />
        </svg>
        Search a song
      </SongSearchButton>
      </Overlay>
    </>
   
  );
};

export default VoiceListeningOverlay;
