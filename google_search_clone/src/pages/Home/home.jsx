import React, { useEffect, useState } from "react";
import './home.css';
import { signIn } from "../../utils/auth";
import { auth } from "../../firebase";

const HomePage = () => {
   const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      if (u) setUser(u);
    });
    return () => unsub();
  }, []);

  const getUserInitial = () => {
    if (user?.displayName) return user.displayName.charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return "U";
  };
  
  // const handleUserIconClick = () => {
  //   if (!user) {
  //     signIn(setUser);
  //   } else {
  //     console.log("User already signed in", user);
  //   }
  // };
  return (
    <>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <a className="link" href="#">Gmail</a>
            </li>
            <li>
              <a className="link" href="#">Images</a>
            </li>
            <li>
              <div className="circle-shadow">
                <a className="menu-icon" href="#">
                  <i className="fas fa-bars"></i>
                </a>
              </div>
            </li>
             <li>
              {user ? (
                <div className="circle-shadow">
                  <a className="user-icon" href="#">
                    <span>{getUserInitial()}</span>
                  </a>
                </div>
              ) : (
                <button onClick={() => signIn(setUser)} className="sign-in-btn">
                  Sign in
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* Content */}
      <section className="content-section">
        <div className="content-wrapper">
          <img className="logo-img" src="
          https://www.google.com/images/srpr/logo11w.png" alt="Google Logo" />
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input id="search-input" className="search-input" type="text" />
            <i className="fas fa-keyboard"></i>
            <i className="fas fa-microphone"></i>
          </div>
          <div className="search-btns">
            <button className="google-search-btn">Google Search</button>
            <button className="lucky-search-btn">I'm Feeling Lucky</button>
          </div>
          <div className="language">
            <p>
              Google Offered in: <a href="#">हिन्दी বাংলা తెలుగు मराठी</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content upper-footer">
          <p>India</p>
        </div>
        <div className="footer-content lower-footer">
          <ul className="lower-left-footer">
            <li><a href="#">About</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">How Search Works</a></li>
          </ul>
          <ul className="lower-right-footer">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
