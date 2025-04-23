import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import useSpeechRecognition from "../Hooks/useSpeechRecognition";
import axios from "axios";
import Cropper from "react-easy-crop";
import styled from "styled-components";
import VoiceListeningOverlay from "./VoiceListeningOverlay";
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0 10px;
`;

const LogoImg = styled.div`
  width: 300px;
  margin-bottom: 20px;
  text-align:center;
`;

const SearchForm = styled.form`
border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 10px 10px;
    width: 100%;
    margin: 0 15px;
    max-width: 360px;
    background: #303134;
  &:hover {
    box-shadow: 0px 0px 4px 0px #B5B5B5;
  }
`;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  height: 30px;
  margin: auto;
  font-size: 16px;
  border: none;
  color: #E8EAED;
  background-color: transparent;
    margin-left:15px;

  &::placeholder {
    color: #E8EAED;
    font-weight: 500;
    font-size: 16px;
  }

  &:focus {
    outline: none;
  }
`;

const MicIconButton = styled(IconButton)`
  margin-right: 20px;
`;
const DropdownWrapper = styled.div`
  position: absolute;
  top: 70px;
  width: 100%;
  max-width: 390px;
  background: #202124;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 390px;
  height:100vh;
`;
const SuggestionItem = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: #202124;
  color:#fff;
  
  &:hover {
    background-color: #3c4043;
  }

  svg {
    margin-right: 10px;
  }
`;
const BackIconButton = styled(IconButton)`
  margin-right: 10px;
`;
const SearchIconButton = styled.button`
    position: absolute;
    bottom: 30px;
    transform: translate(-50%, 10px);
    border-radius: 100%;
    width: 40px;
    height: 40px;
    padding: 30px;
    border: 20px solid #303134;
`;
const GalleryButton = styled.button`
    position: absolute;
    bottom: 40px;
    left: 50px;
    transform: translateX(-50%);
    background: #202124;
    border: none;
    border-radius: 20px;
    color: white;
    width: 40px;
    height: 40px;
    text-align: center;
`;
const SearchBar = ({ initialQuery = "" }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isVoiceOverlayVisible, setIsVoiceOverlayVisible] = useState(false);

  const fileInputRef = useRef();

  const handleSpeechResult = (text) => {
    setIsVoiceOverlayVisible(false);
    setQuery(text);
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/text-search?q=${encodeURIComponent(text)}&type=text`);
      setIsLoading(false);
    }, 1000);
  };
  
  


  const { startListening, isListening } = useSpeechRecognition(handleSpeechResult);
  const handleMicClick = () => {
    setIsVoiceOverlayVisible(true);
    startListening();
  };
  

  useEffect(() => {
    if (query && query !== initialQuery) {
      const delayDebounce = setTimeout(() => {
        fetchResults(query);
        setShowSuggestions(true);
      }, 300);
      return () => clearTimeout(delayDebounce);
    }
  }, [query]);

  const fetchResults = async (term) => {
    const res = await axios.get(`https://dummyjson.com/products/search?q=${term}`);
    setResults(res.data.products);
    console.log(results);
  };
  

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
  };

  const handleSearch = (val) => {
    setShowSuggestions(false);
    navigate(`/text-search?q=${encodeURIComponent(val)}&type=text`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      handleSearch(query);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };
  const openCamera = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });
    setImagePreview(image.dataUrl);
    setShowCropper(true);
  };
  const openGallery = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
    });
    setImagePreview(image.dataUrl);
    setShowCropper(true);
  };

  const handleCropComplete = () => {
    setShowCropper(false);
    navigate(`/image-search?q=${encodeURIComponent(imagePreview)}&type=image`);
  };

  return (
    <ContentWrapper>
      <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <BackIconButton type="button" onClick={() => navigate("/")}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
            <path d="M15.5 19.5 9 13l6.5-6.5L14 5l-8 8 8 8Z"/>
          </svg>
        </BackIconButton>

      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
          <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.17 5.6 12.57 3 9.5 3S3.83 5.6 3.83 8.67c0 3.07 2.6 5.67 5.67 5.67a6.471 6.471 0 005.34-1.48l.27.28v.79l4.25 4.25 1.49-1.49-4.25-4.25zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <SearchInput
          className="search-input"
          value={query}
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} 
          placeholder="Search"
        />

        <MicIconButton type="button" onClick={handleMicClick}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
          <path d="M12 15q-.825 0-1.413-.588Q10 13.825 10 13V6q0-.825.587-1.413Q11.175 4 12 4t1.413.587Q14 5.175 14 6v7q0 .825-.587 1.412Q12.825 15 12 15Zm-1 6v-2.1q-2.5-.35-4.125-2.188Q5.25 14.875 5.25 12.25H7q0 1.875 1.313 3.188Q9.625 16.75 12 16.75q2.375 0 3.688-1.312Q17 14.125 17 12.25h1.75q0 2.625-1.625 4.462Q15.5 18.55 13 18.9V21Z"/>
        </svg>
        </MicIconButton>

        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />

        <IconButton type="button" onClick={openCamera}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
          <path d="M12 17q1.875 0 3.188-1.312Q16.5 14.375 16.5 12.5q0-1.875-1.312-3.188Q13.875 8 12 8q-1.875 0-3.188 1.312Q7.5 10.625 7.5 12.5q0 1.875 1.312 3.188Q10.125 17 12 17Zm0-1.5q-1.25 0-2.125-.875T9 12.5q0-1.25.875-2.125T12 9.5q1.25 0 2.125.875T15 12.5q0 1.25-.875 2.125T12 15.5Zm-8.25 3.25V7.25h4.275l1.125-1.5h5.75l1.125 1.5h4.275v11.5Z"/>
        </svg>
        </IconButton>


      </SearchForm>
      {/* {query && results.length > 0 && showSuggestions && ( */}
        <DropdownWrapper>
          {results.map((result, index) => (

            <SuggestionItem key={index} onMouseDown={() => handleSearch(result.title)}>
                 <span style={{ marginRight: '10px' }}>🕘</span> {result.title}
          </SuggestionItem>
          
          ))}
        </DropdownWrapper>
      {/* )} */}
      </SearchContainer>
     

      {isVoiceOverlayVisible && <VoiceListeningOverlay />}

      {showCropper && (
        <div>
          <div>
            <Cropper
              image={imagePreview}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
            />
            <SearchIconButton onClick={handleCropComplete}> <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" fill="white">
          <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.17 5.6 12.57 3 9.5 3S3.83 5.6 3.83 8.67c0 3.07 2.6 5.67 5.67 5.67a6.471 6.471 0 005.34-1.48l.27.28v.79l4.25 4.25 1.49-1.49-4.25-4.25zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg></SearchIconButton>
        <GalleryButton onClick={openGallery}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
              <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
              <path d="M4 15L9 10L13 13L16 10L20 14" stroke="currentColor" stroke-width="2" fill="none"/>
              <circle cx="17" cy="18" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
              <line x1="19.5" y1="20.5" x2="22" y2="23" stroke="currentColor" stroke-width="2"/>
            </svg></GalleryButton>
          </div>
        </div>
      )}
    </ContentWrapper>
  );
};

export default SearchBar;