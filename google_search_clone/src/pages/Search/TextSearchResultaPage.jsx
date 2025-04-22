import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0 10px;
`;

const Container = styled.div`
  background-color: #121212;
  color: white;
  font-family: Arial, sans-serif;
  padding: 16px;
`;

const SearchForm = styled.form`
border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 10px 10px;
    width: 100%;
    margin: 0 15px;
    max-width: 360px;
    background: #303134;
  &:hover {
    box-shadow: 0px 0px 4px 0px #B5B5B5;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  padding: 0 16px;
  font-size: 16px;
  outline: none;
  background: #303134;
`;
const IconButton = styled.button`
  height: 45px;
  width: 40px;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #303134;
`;
const MicIconButton = styled(IconButton)`
  margin-right: 20px;
  background: #303134;
`;


const BackIconButton = styled(IconButton)`
  margin-right: 10px;
`;
const TextSearchResultaPage = () => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate('/search');
  };
  const NavMenu = styled.nav`
  margin-bottom: 16px;
`;

const NavList = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li``;

const BrowseButton = styled.button`
  background: transparent;
  border: none;
  padding: 8px 12px;
  color: white;
  font-size: 14px;
  cursor: pointer;

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const SearchResultsSection = styled.section`
  margin-top: 16px;
`;

const Header = styled.header`
  margin-bottom: 16px;
  font-size: 14px;
`;

const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ResultItem = styled.li`
  margin-bottom: 20px;

  a {
    color: #8ab4f8;
    font-size: 16px;
    text-decoration: none;
  }

  .search-links {
    font-size: 12px;
    color: #ccc;
  }

  .search-desc {
    font-size: 14px;
    color: #aaa;
  }
`;

const RelatedSearches = styled.section`
  margin-top: 40px;
`;

const RelatedHeading = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const RelatedList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  li a {
    color: #8ab4f8;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
  return (
    <>
        <ContentWrapper>
    <SearchForm>
      <BackIconButton type="button" onClick={() => navigate("/")}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
            <path d="M15.5 19.5 9 13l6.5-6.5L14 5l-8 8 8 8Z"/>
          </svg>
        </BackIconButton>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="gray">
          <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.17 5.6 12.57 3 9.5 3S3.83 5.6 3.83 8.67c0 3.07 2.6 5.67 5.67 5.67a6.471 6.471 0 005.34-1.48l.27.28v.79l4.25 4.25 1.49-1.49-4.25-4.25zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>

        <SearchInput
          placeholder="Search"
          onClick={handleIconClick}
        />

        <MicIconButton type="button" onClick={handleIconClick}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="gray">
            <path d="M12 15q-.825 0-1.413-.588Q10 13.825 10 13V6q0-.825.587-1.413Q11.175 4 12 4t1.413.587Q14 5.175 14 6v7q0 .825-.587 1.412Q12.825 15 12 15Zm-1 6v-2.1q-2.5-.35-4.125-2.188Q5.25 14.875 5.25 12.25H7q0 1.875 1.313 3.188Q9.625 16.75 12 16.75q2.375 0 3.688-1.312Q17 14.125 17 12.25h1.75q0 2.625-1.625 4.462Q15.5 18.55 13 18.9V21Z"/>
          </svg>
        </MicIconButton>

        <IconButton type="button">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="gray">
            <path d="M12 17q1.875 0 3.188-1.312Q16.5 14.375 16.5 12.5q0-1.875-1.312-3.188Q13.875 8 12 8q-1.875 0-3.188 1.312Q7.5 10.625 7.5 12.5q0 1.875 1.312 3.188Q10.125 17 12 17Zm0-1.5q-1.25 0-2.125-.875T9 12.5q0-1.25.875-2.125T12 9.5q1.25 0 2.125.875T15 12.5q0 1.25-.875 2.125T12 15.5Zm-8.25 3.25V7.25h4.275l1.125-1.5h5.75l1.125 1.5h4.275v11.5H3.75Z"/>
          </svg>
        </IconButton>
      </SearchForm>
    </ContentWrapper>
    <Container>
    <NavMenu>
        <NavList>
          {['All', 'Videos', 'News', 'Maps', 'Images', 'More'].map((item, index) => (
            <NavItem key={index}>
              <BrowseButton>
                <a href="#">{item}</a>
              </BrowseButton>
            </NavItem>
          ))}
        </NavList>
      </NavMenu>

      <SearchResultsSection>
        <Header>About 64,80,000 results (0.50 seconds)</Header>
        <ResultsList>
          {[...Array(10)].map((_, i) => (
            <ResultItem key={i}>
              <a href="#">IPhone 13 Pro and 13 -  Techinical Specificaton </a>
              <p className="search-links">5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; White</p>
              <p className="search-desc">
              iPhone 13 Pro. Super Retina XDR display with ProMotion; 6.1‑inch (diagonal) all‑screen OLED display; 2532‑by‑1170-pixel resolution at 460 ppi.
              </p>
            </ResultItem>
          ))}
        </ResultsList>
      </SearchResultsSection>

      <RelatedSearches>
        <RelatedHeading>Searches related to build this webpage</RelatedHeading>
        <RelatedList>
          {['180 websites', '180 news website', 'yumhacker', 'learn html', 'wordpress', 'the odin project', 'codeacademy', 'wix'].map((item, index) => (
            <li key={index}><a href="#">{item}</a></li>
          ))}
        </RelatedList>
      </RelatedSearches>
    </Container>

    </>



  );
};

export default TextSearchResultaPage;
