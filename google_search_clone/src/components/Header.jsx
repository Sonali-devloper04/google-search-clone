import React, { useEffect, useState } from "react";
import { signIn } from "../utils/auth";
import { auth } from "../firebase";
import axios from "axios";

const Header = () => {
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
              {user ? (
                <div className="circle-shadow">
                  <a className="user-icon" href="#">
                    <span>{getUserInitial()}</span>
                  </a>
                </div>
              ) : (
                <button onClick={() => signIn(setUser)} className="sign-in-btn">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/008/302/513/original/eps10-blue-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"
                    width="30"
                    height="30"
                    alt=""
                  />
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>






    </>
  );
};

export default Header;
