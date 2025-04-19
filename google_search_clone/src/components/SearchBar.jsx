import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import useSpeechRecognition from "../Hooks/useSpeechRecognition";
import axios from "axios";
import Cropper from "react-easy-crop";
import styled from "styled-components";

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0 10px;
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
    padding: 0 15px;
    background: #303134;
    width: 100%;
    max-width: 390px;

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
  margin: 15px;
  font-size: 16px;
  border: none;
  color: #E8EAED;
  background-color: transparent;

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
  const fileInputRef = useRef();

  const handleSpeechResult = (text) => {
    setQuery(text);
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/search?q=${encodeURIComponent(text)}&type=text`);
    }, 1000);
  };

  const { startListening, isListening } = useSpeechRecognition(handleSpeechResult);

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
    setResults(res.data.products.slice(0, 5));
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
  };

  const handleSearch = (val) => {
    setShowSuggestions(false);
    navigate(`/search?q=${encodeURIComponent(val)}&type=text`);
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

  const handleCropComplete = () => {
    setShowCropper(false);
    navigate(`/search?q=${encodeURIComponent(imagePreview)}&type=image`);
  };

  return (
    <ContentWrapper>
      <LogoImg>
      <svg height="30" viewBox="0 0 92 30" width="92" xmlns="http://www.w3.org/2000/svg"><path d="M38.9 15.51c0 4.26-3.32 7.39-7.4 7.39s-7.4-3.14-7.4-7.39c0-4.28 3.32-7.39 7.4-7.39s7.4 3.1 7.4 7.39zm-3.24 0c0-2.66-1.93-4.48-4.16-4.48-2.23 0-4.16 1.82-4.16 4.48 0 2.63 1.93 4.48 4.16 4.48 2.23 0 4.16-1.85 4.16-4.48zm-23.7 7.47C5.63 22.98.31 17.83.31 11.5S5.63.02 11.96.02c3.5 0 5.99 1.37 7.87 3.16L17.62 5.4c-1.34-1.26-3.16-2.24-5.66-2.24-4.62 0-8.23 3.72-8.23 8.34 0 4.62 3.61 8.34 8.23 8.34 3 0 4.7-1.2 5.79-2.3.9-.9 1.49-2.2 1.74-4.17H12v-3.14h10.52c.11.56.17 1.23.17 1.96 0 2.35-.64 5.49-2.72 7.56-2.02 2.11-4.59 3.23-8.01 3.23zm42.94-7.47c0 4.26-3.32 7.39-7.4 7.39s-7.4-3.14-7.4-7.39c0-4.28 3.32-7.39 7.4-7.39s7.4 3.1 7.4 7.39zm-3.24 0c0-2.66-1.93-4.48-4.16-4.48-2.23 0-4.16 1.82-4.16 4.48 0 2.63 1.93 4.48 4.16 4.48 2.23 0 4.16-1.85 4.16-4.48zM70 8.56v13.27c0 5.46-3.05 7.7-6.86 7.7-3.58 0-5.74-2.41-6.55-4.37l2.83-1.18c.5 1.2 1.74 2.63 3.72 2.63 2.44 0 3.78-1.51 3.78-4.34v-1.06h-.11c-.73.9-2.04 1.68-3.81 1.68-3.7 0-7-3.22-7-7.36 0-4.17 3.3-7.42 7-7.42 1.76 0 3.08.78 3.81 1.65h.11v-1.2H70zm-2.86 6.97c0-2.6-1.74-4.51-3.95-4.51-2.24 0-3.95 1.9-3.95 4.51 0 2.58 1.71 4.45 3.95 4.45 2.22.01 3.95-1.87 3.95-4.45zM75 1.17V22.9h-3V1.17h3zm12.5 16.77l2.48 1.68c-.8 1.2-2.73 3.28-6.06 3.28-4.13 0-7.22-3.25-7.22-7.39 0-4.4 3.11-7.39 6.86-7.39 3.78 0 5.62 3.05 6.23 4.7l.31.85-9.71 4.08c.74 1.48 1.9 2.24 3.53 2.24s2.76-.82 3.58-2.05zm-7.63-2.66l6.5-2.74c-.36-.92-1.43-1.57-2.7-1.57-1.62 0-3.88 1.46-3.8 4.31z" fill="#FFF"></path></svg>
      </LogoImg>

      <SearchForm onSubmit={handleSubmit}>
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

        <MicIconButton type="button" onClick={startListening}>
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

        <IconButton type="button" onClick={() => fileInputRef.current.click()}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
          <path d="M12 17q1.875 0 3.188-1.312Q16.5 14.375 16.5 12.5q0-1.875-1.312-3.188Q13.875 8 12 8q-1.875 0-3.188 1.312Q7.5 10.625 7.5 12.5q0 1.875 1.312 3.188Q10.125 17 12 17Zm0-1.5q-1.25 0-2.125-.875T9 12.5q0-1.25.875-2.125T12 9.5q1.25 0 2.125.875T15 12.5q0 1.25-.875 2.125T12 15.5Zm-8.25 3.25V7.25h4.275l1.125-1.5h5.75l1.125 1.5h4.275v11.5Z"/>
        </svg>
        </IconButton>

        {showSuggestions && results.length > 0 && (
          <div>
            {results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setQuery(item.title);
                  setShowSuggestions(false);
                  setResults([]);
                  navigate(`/search?q=${encodeURIComponent(item.title)}&type=text`);
                }}
              >
                <div>{item.title}</div>
                <div>{item.description}</div>
              </div>
            ))}
          </div>
        )}
      </SearchForm>

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
            <button onClick={handleCropComplete}>Search with Image</button>
          </div>
        </div>
      )}
    </ContentWrapper>
  );
};

export default SearchBar;