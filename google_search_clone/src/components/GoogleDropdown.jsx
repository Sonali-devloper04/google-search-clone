import styled from "styled-components";
const DropdownWrap = styled.div `
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translate(-50%, 10px);
    width: 100%;
    z-index: 999;
`;


const DropdownContainer = styled.div`
  background-color: #303134;
  border-radius: 16px;
  padding: 16px;
  color: #e8eaed;
  width: 90%;
  max-width: 400px;
  margin: auto;
  font-family: 'Roboto', sans-serif;
  position : relative;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Avatar = styled.div`
  background-color: #5f6368;
  color: white;
  font-weight: bold;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserDetails = styled.div`
  margin-left: 12px;
`;

const UserName = styled.div`
  font-weight: bold;
`;

const Email = styled.div`
  font-size: 12px;
  color: #9aa0a6;
`;

const ManageButton = styled.button`
  background: transparent;
  border: 1px solid #5f6368;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  color: #e8eaed;
  margin: 10px 0;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #5f6368;
  margin: 12px 0;
`;

const DropdownItem = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const Icon = styled.span`
  margin-right: 12px;
`;

const BottomLinks = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  color:rgb(30, 90, 149);
  margin-top: 12px;
  gap: 6px;
  a {
  color:white;
  }
`;

const Dot = styled.span`
  margin: 0 6px;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 14px;
  background: transparent;
  border: none;
  font-size: 22px;
  color: #e8eaed;
  cursor: pointer;
`;
const LogoImg = styled.div`
  width: 300px;
    margin: 0 auto 20px;
  text-align: center;
`;
const GoogleDropdown = ({ handleClose }) => {
    return (
    <DropdownWrap>
      <DropdownContainer>
        <CloseButton onClick={handleClose}>×</CloseButton>
        <LogoImg>
          <svg height="30" viewBox="0 0 92 30" width="92" xmlns="http://www.w3.org/2000/svg"><path d="M38.9 15.51c0 4.26-3.32 7.39-7.4 7.39s-7.4-3.14-7.4-7.39c0-4.28 3.32-7.39 7.4-7.39s7.4 3.1 7.4 7.39zm-3.24 0c0-2.66-1.93-4.48-4.16-4.48-2.23 0-4.16 1.82-4.16 4.48 0 2.63 1.93 4.48 4.16 4.48 2.23 0 4.16-1.85 4.16-4.48zm-23.7 7.47C5.63 22.98.31 17.83.31 11.5S5.63.02 11.96.02c3.5 0 5.99 1.37 7.87 3.16L17.62 5.4c-1.34-1.26-3.16-2.24-5.66-2.24-4.62 0-8.23 3.72-8.23 8.34 0 4.62 3.61 8.34 8.23 8.34 3 0 4.7-1.2 5.79-2.3.9-.9 1.49-2.2 1.74-4.17H12v-3.14h10.52c.11.56.17 1.23.17 1.96 0 2.35-.64 5.49-2.72 7.56-2.02 2.11-4.59 3.23-8.01 3.23zm42.94-7.47c0 4.26-3.32 7.39-7.4 7.39s-7.4-3.14-7.4-7.39c0-4.28 3.32-7.39 7.4-7.39s7.4 3.1 7.4 7.39zm-3.24 0c0-2.66-1.93-4.48-4.16-4.48-2.23 0-4.16 1.82-4.16 4.48 0 2.63 1.93 4.48 4.16 4.48 2.23 0 4.16-1.85 4.16-4.48zM70 8.56v13.27c0 5.46-3.05 7.7-6.86 7.7-3.58 0-5.74-2.41-6.55-4.37l2.83-1.18c.5 1.2 1.74 2.63 3.72 2.63 2.44 0 3.78-1.51 3.78-4.34v-1.06h-.11c-.73.9-2.04 1.68-3.81 1.68-3.7 0-7-3.22-7-7.36 0-4.17 3.3-7.42 7-7.42 1.76 0 3.08.78 3.81 1.65h.11v-1.2H70zm-2.86 6.97c0-2.6-1.74-4.51-3.95-4.51-2.24 0-3.95 1.9-3.95 4.51 0 2.58 1.71 4.45 3.95 4.45 2.22.01 3.95-1.87 3.95-4.45zM75 1.17V22.9h-3V1.17h3zm12.5 16.77l2.48 1.68c-.8 1.2-2.73 3.28-6.06 3.28-4.13 0-7.22-3.25-7.22-7.39 0-4.4 3.11-7.39 6.86-7.39 3.78 0 5.62 3.05 6.23 4.7l.31.85-9.71 4.08c.74 1.48 1.9 2.24 3.53 2.24s2.76-.82 3.58-2.05zm-7.63-2.66l6.5-2.74c-.36-.92-1.43-1.57-2.7-1.57-1.62 0-3.88 1.46-3.8 4.31z" fill="#FFF"></path></svg>
        </LogoImg>
        <ProfileSection>
          <Avatar>S</Avatar>
          <UserDetails>
            <UserName>User</UserName>
            <Email>email@example.com</Email>
          </UserDetails>
        </ProfileSection>
  
        <ManageButton>Manage your Google Account</ManageButton>
  
        <Divider />
  
        <DropdownItem>
          <Icon>🕵️</Icon> Turn on Incognito
        </DropdownItem>
  
        <DropdownItem>
          <Icon>🕒</Icon> Search history
        </DropdownItem>
  
        <DropdownItem>Delete last 15 mins</DropdownItem>
  
        <Divider />
  
        <DropdownItem><Icon>🛡️</Icon> SafeSearch</DropdownItem>
        <DropdownItem><Icon>🎯</Icon> Interests</DropdownItem>
        <DropdownItem><Icon>🔑</Icon> Passwords</DropdownItem>
        <DropdownItem><Icon>👤</Icon> Your profile</DropdownItem>
        <DropdownItem><Icon>✨</Icon> Search personalisation</DropdownItem>
  
        <Divider />
  
        <DropdownItem><Icon>⚙️</Icon> Settings</DropdownItem>
        <DropdownItem><Icon>❓</Icon> Help and feedback</DropdownItem>
  
        <BottomLinks>
          <a href="#">Privacy Policy</a>
          <Dot>•</Dot>
          <a href="#">Terms of Service</a>
        </BottomLinks>
      </DropdownContainer>
    </DropdownWrap>

    );
  };
  export default GoogleDropdown;