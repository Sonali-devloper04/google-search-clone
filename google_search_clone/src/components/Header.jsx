import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { signIn } from "../utils/auth";
import { auth } from "../firebase";
import { FlaskConical } from "lucide-react";

const HeaderWrapper = styled.header`
  background-color: #202124;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:60px;
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
    <HeaderWrapper>
      <LeftIcons>
        <FlaskConical size={20} color="#9aa0a6" />
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
          <AvatarCircle>{getUserInitial()}</AvatarCircle>
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
  );
};

export default Header;
