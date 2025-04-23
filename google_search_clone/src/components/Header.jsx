import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { signIn } from "../utils/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import GoogleDropdown from "./GoogleDropdown";
const HeaderWrapper = styled.header`
  background-color: #202124;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top:60px;
`;

const LeftIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CenterButton = styled.div`
    background-color: #303134;
    color: white;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;s
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    border-radius:16px;
`;

const GIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarCircle = styled.div`
  background-color: #5f6368;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
`;
const GIconWrap = styled.div`
    background: #202124;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 6px;
`;
const SignInButton = styled.button`
  background: none;
  border: none;
  padding: 0;
`;
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 0;
`;

const LogoImg = styled.div`
  width: 300px;
  margin: 20px 0;
  text-align: center;
`;

const SearchForm = styled.form`
  border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background: #303134;
    width: 100%;
    max-width: 360px;

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
const Wrapper = styled.div`
  height: 100vh;
  background-color: #e5e7eb;
  display: flex;
  justify-content: center;
  align-items: center;

  &.dark {
    background-color: #6b7280;
  }
`;

const ProfileCard = styled.div`
  background-color: #ffffff;
  width: 16rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  &.dark {
    background-color: #1f2937;
  }
`;

const ProfileBox = styled.div`
  padding: 0.75rem;
  border-bottom: 4px solid transparent;
  transition: transform 0.3s;
  cursor: pointer;

  &.active {
    border-color: #4338ca;
    transform: scale(1.03);
  }
`;

const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  overflow: hidden;
  border: 2px solid #111827;

  &.dark {
    border-color: #ffffff;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 1.125rem;
  color: #111827;

  &.dark {
    color: white;
  }
`;

const Dropdown = styled.div`
    margin: 0 15px;
    position: absolute;
    width: 100%;
    top: 90px;
    max-width: 380px;
    height: auto;
    background: #303134;
    border: none;
    backdrop-filter: blur(10px);
    max-width: 340px;
    border-radius: 8px;

  &.dark {
    background-color: #1f2937;
    border-color: transparent;
    color: white;
  }
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  border-right: 4px solid transparent;
  transition: border-color 0.2s;
      color: #fff;


  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;
const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClose = () => setShowDropdown(false);

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
  const handleIconClick = () => {
    navigate('/search');
  };

  return (
    <>
        <HeaderWrapper>
      <LeftIcons>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#abc8f8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical" aria-hidden="true"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
      </LeftIcons>

      <CenterButton>
        <GIconWrap>
          <GIcon src="https://www.google.com/favicon.ico" alt="G" />
          Search
        </GIconWrap>
        <span style={{ color: "#8ab4f8", marginLeft: "2px" }}>✨</span>
      </CenterButton>

      <RightWrapper>
        {user ? (
          <AvatarCircle onClick={() => setShowDropdown(!showDropdown)}>{getUserInitial()}</AvatarCircle>
        ) : (
          <SignInButton onClick={() => signIn(setUser)}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/302/513/original/eps10-blue-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"
              width="32"
              height="32"
              alt="Sign In"
            />
          </SignInButton>
        )}
      </RightWrapper>
    </HeaderWrapper>
        <ContentWrapper>
        <LogoImg>
          <svg height="30" viewBox="0 0 92 30" width="92" xmlns="http://www.w3.org/2000/svg"><path d="M38.9 15.51c0 4.26-3.32 7.39-7.4 7.39s-7.4-3.14-7.4-7.39c0-4.28 3.32-7.39 7.4-7.39s7.4 3.1 7.4 7.39zm-3.24 0c0-2.66-1.93-4.48-4.16-4.48-2.23 0-4.16 1.82-4.16 4.48 0 2.63 1.93 4.48 4.16 4.48 2.23 0 4.16-1.85 4.16-4.48zm-23.7 7.47C5.63 22.98.31 17.83.31 11.5S5.63.02 11.96.02c3.5 0 5.99 1.37 7.87 3.16L17.62 5.4c-1.34-1.26-3.16-2.24-5.66-2.24-4.62 0-8.23 3.72-8.23 8.34 0 4.62 3.61 8.34 8.23 8.34 3 0 4.7-1.2 5.79-2.3.9-.9 1.49-2.2 1.74-4.17H12v-3.14h10.52c.11.56.17 1.23.17 1.96 0 2.35-.64 5.49-2.72 7.56-2.02 2.11-4.59 3.23-8.01 3.23zm42.94-7.47c0 4.26-3.32 7.39-7.4 7.39s-7.4-3.14-7.4-7.39c0-4.28 3.32-7.39 7.4-7.39s7.4 3.1 7.4 7.39zm-3.24 0c0-2.66-1.93-4.48-4.16-4.48-2.23 0-4.16 1.82-4.16 4.48 0 2.63 1.93 4.48 4.16 4.48 2.23 0 4.16-1.85 4.16-4.48zM70 8.56v13.27c0 5.46-3.05 7.7-6.86 7.7-3.58 0-5.74-2.41-6.55-4.37l2.83-1.18c.5 1.2 1.74 2.63 3.72 2.63 2.44 0 3.78-1.51 3.78-4.34v-1.06h-.11c-.73.9-2.04 1.68-3.81 1.68-3.7 0-7-3.22-7-7.36 0-4.17 3.3-7.42 7-7.42 1.76 0 3.08.78 3.81 1.65h.11v-1.2H70zm-2.86 6.97c0-2.6-1.74-4.51-3.95-4.51-2.24 0-3.95 1.9-3.95 4.51 0 2.58 1.71 4.45 3.95 4.45 2.22.01 3.95-1.87 3.95-4.45zM75 1.17V22.9h-3V1.17h3zm12.5 16.77l2.48 1.68c-.8 1.2-2.73 3.28-6.06 3.28-4.13 0-7.22-3.25-7.22-7.39 0-4.4 3.11-7.39 6.86-7.39 3.78 0 5.62 3.05 6.23 4.7l.31.85-9.71 4.08c.74 1.48 1.9 2.24 3.53 2.24s2.76-.82 3.58-2.05zm-7.63-2.66l6.5-2.74c-.36-.92-1.43-1.57-2.7-1.57-1.62 0-3.88 1.46-3.8 4.31z" fill="#FFF"></path></svg>
        </LogoImg>
  
        <SearchForm>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
            <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.17 5.6 12.57 3 9.5 3S3.83 5.6 3.83 8.67c0 3.07 2.6 5.67 5.67 5.67a6.471 6.471 0 005.34-1.48l.27.28v.79l4.25 4.25 1.49-1.49-4.25-4.25zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <SearchInput
            className="search-input"
            onClick={handleIconClick}
            placeholder="Search"
          />
  
          <MicIconButton type="button" onClick={handleIconClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
              <path d="M12 15q-.825 0-1.413-.588Q10 13.825 10 13V6q0-.825.587-1.413Q11.175 4 12 4t1.413.587Q14 5.175 14 6v7q0 .825-.587 1.412Q12.825 15 12 15Zm-1 6v-2.1q-2.5-.35-4.125-2.188Q5.25 14.875 5.25 12.25H7q0 1.875 1.313 3.188Q9.625 16.75 12 16.75q2.375 0 3.688-1.312Q17 14.125 17 12.25h1.75q0 2.625-1.625 4.462Q15.5 18.55 13 18.9V21Z"/>
            </svg>
          </MicIconButton>
  
          <IconButton type="button" onClick={handleIconClick} >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
              <path d="M12 17q1.875 0 3.188-1.312Q16.5 14.375 16.5 12.5q0-1.875-1.312-3.188Q13.875 8 12 8q-1.875 0-3.188 1.312Q7.5 10.625 7.5 12.5q0 1.875 1.312 3.188Q10.125 17 12 17Zm0-1.5q-1.25 0-2.125-.875T9 12.5q0-1.25.875-2.125T12 9.5q1.25 0 2.125.875T15 12.5q0 1.25-.875 2.125T12 15.5Zm-8.25 3.25V7.25h4.275l1.125-1.5h5.75l1.125 1.5h4.275v11.5H3.75Z"/>
            </svg>
          </IconButton>
        </SearchForm>
      </ContentWrapper>
      {showDropdown && (
        <GoogleDropdown handleClose={handleClose} />
        )}

    </>

  );
};

export default Header;
