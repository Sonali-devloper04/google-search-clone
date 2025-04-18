import React, { useEffect, useState } from "react";
import './home.css';
import Header from "../../components/Header";
import Fidgets from "../../components/Fidgets";
import Feed from "../../components/Feed";
import SearchBar from "../../components/SearchBar";

const HomePageMob = () => {

  return (
    <>
        <Header />
        <SearchBar />
        <Fidgets />
        <Feed />
    </>
  );
};

export default HomePageMob;
