import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import useSpeechRecognition from "../Hooks/useSpeechRecognition";
import axios from "axios";
import Cropper from "react-easy-crop";

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
    <div className="content-wrapper">
      <img className="logo-img" src="https://www.google.com/images/srpr/logo11w.png" alt="Google Logo" />
      <form onSubmit={handleSubmit} className="search-bar relative w-full max-w-xl mx-auto mt-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="currentColor" className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
          <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
        </svg>
        <input
          className="search-input w-full p-2 pl-10 pr-24 border rounded-md"
          value={query}
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // allow click
          placeholder="Search Google or type a URL"
        />

        <button type="button" className="absolute right-10 top-2" onClick={() => fileInputRef.current.click()}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Google_Lens_Icon.svg" alt="camera" className="w-5 h-5" />
        </button>

        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />

        <button type="button" className="border-none absolute right-2 top-2" onClick={startListening}>
          <img src="https://media-hosting.imagekit.io/48c8570d80494df4/7123011_google_mic_icon%20(1).png" alt="mic" />
        </button>

        {isLoading && (
          <div className="absolute right-16 top-2 animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-500"></div>
        )}

        {showSuggestions && results.length > 0 && (
          <div className="absolute bg-white border border-gray-300 rounded-xl shadow-lg z-10 w-full mt-1">
            {results.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 border-b last:border-b-0"
                onClick={() => {
                  setQuery(item.title);
                  setShowSuggestions(false);
                  setResults([]);
                  navigate(`/search?q=${encodeURIComponent(item.title)}&type=text`);
                }}
              >
                <div className="font-medium text-gray-800">{item.title}</div>
                <div className="text-sm text-gray-500 truncate">{item.description}</div>
              </div>
            ))}
          </div>
        )}
      </form>

      {showCropper && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="w-4/5 h-2/3 relative bg-white rounded-lg overflow-hidden">
            <Cropper
              image={imagePreview}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
            />
            <button
              onClick={handleCropComplete}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Search with Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
