import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageMob from "./pages/Home/HomePage";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Capacitor } from "@capacitor/core";
import SearchBar from "./components/SearchBar";
import TextSearchResultaPage from "./pages/Search/TextSearchResultaPage";
import ImageSearchResults from "./pages/Search/ImageResultPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user:", currentUser);
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      console.log("📱 Running on native mobile platform");
    } else {
      console.log("🌐 Running on web platform");
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageMob />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/text-search" element={<TextSearchResultaPage />} />
        <Route path="/image-search" element={<ImageSearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
