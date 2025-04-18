import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageMob from "./pages/Home/HomePage";
import SearchResultsPage from "./pages/Search/SearchResultPage";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Capacitor } from "@capacitor/core";

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
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
