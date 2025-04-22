import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background: white;
  margin: 10px;
  padding: 15px 25px;
  border-radius: 10px;
`;

const CameraModal = ({ onCapture, onGallery, onClose }) => (
  <Overlay>
    <div>
      <Button onClick={onCapture}>Take Photo</Button>
      <Button onClick={onGallery}>Pick from Gallery</Button>
      <Button onClick={onClose}>Cancel</Button>
    </div>
  </Overlay>
);

export default CameraModal;
