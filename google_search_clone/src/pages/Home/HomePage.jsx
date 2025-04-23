import React, { useEffect, useState } from "react";
import './home.css';
import Header from "../../components/Header";
import Fidgets from "../../components/Fidgets";
import WeatherSlider from "../../components/WeatherSlider";
import Feed from "../../components/Feed";
import SearchBar from "../../components/SearchBar";
import StickyFooter from "../../components/StickyFooter";
import { useNavigate } from "react-router-dom"; 

const HomePageMob = () => {
  const navigate = useNavigate(); 

  const handleSearchClick = () => {
    navigate("/search");  
  };
  return (
    <>
        <Header />
        <Fidgets />
        <WeatherSlider />
        <Feed />
        <StickyFooter />
    </>
  );
};

export default HomePageMob;
