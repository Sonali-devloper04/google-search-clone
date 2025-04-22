import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '../utils/CropImage';

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: #000;
  z-index: 10;
`;

const CropperModal = ({ image, onCropDone, onCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleDone = async () => {
    const croppedImage = await getCroppedImg(image, croppedAreaPixels);
    onCropDone(croppedImage);
  };

  return (
    <Modal>
      <Cropper
        image={`data:image/jpeg;base64,${image}`}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      <button onClick={handleDone}>Done</button>
      <button onClick={onCancel}>Cancel</button>
    </Modal>
  );
};

export default CropperModal;
