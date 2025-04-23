import React from 'react';
import styled from 'styled-components';
import StickyFooter from '../../components/StickyFooter';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  background: #000;
  color: #fff;
  min-height: 100vh;
  padding: 1rem;
  font-family: sans-serif;
`;


const TabBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
  border-bottom: 1px solid #333;
`;

const Tab = styled.div`
  padding: 0.5rem;
  border-bottom: 2px solid ${props => (props.active ? '#fff' : 'transparent')};
  color: ${props => (props.active ? '#fff' : '#888')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
`;

const ResultGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const ResultCard = styled.div`
  background: #1f1f1f;
  border-radius: 1rem;
  overflow: hidden;
  color: #ccc;
  font-size: 0.85rem;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #1a1a1a;
  display: flex;
  justify-content: space-around;
  padding: 0.75rem 0;
`;

const IconWrapper = styled.div`
  color: #ccc;
`;
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0 10px;
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
const BackIconButton = styled(IconButton)`
  margin-right: 10px;
`;
const ImageSearchResults = () => {
    const navigate = useNavigate();
  const handleIconClick = () => {
    navigate('/search');
  };
  const results = [
    {
      img: 'https://media-hosting.imagekit.io/28807fe43f0c4bcd/phone.webp?Expires=1839987237&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2id5OrIFir~Q~0qrrfICvc3zUqEqB0qnvX9Zw1LTtyG~MNMEH8e9hEiBO4G7y~oEfJgbBic5kjC5sNL0BzjKT4Z2Hl0ZSvjSreNYciC5soJ7qbxwV~8G71qPtJ4YF1w0BbCBgNYIOg8Jh992-pVCXaZvt8WTYpPOKQOHR47vlnTfiy6akpmVgw2DAPUaD1iuLPWbggJyLVKmejzC3TXhxJlEs1h9mHz9DohBikfeqYIOQBVQzdNWvxqlrLwwnr-Scd4~iFrfYyb4JYetLIvuKuCQvL1Wpk-KTOfxjNLVMD8tBBKvUujwVvtffDOWJT5aQtG5wmXg3SteIeCAWkKkuw__',
      title: 'Amazon.com: GuliriFei Women\'s Two Piece...'
    },
    {
      img: 'https://media-hosting.imagekit.io/5ccd0f7780184459/phone2.webp?Expires=1839987237&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SZjuuE4mBOXk0bqz0sLns2cRmNLq5JRqJpc3XM1VXbGCwdd9My86tJdu3qA7FCSsccl3HQRIQZjPuTkj8cv6P4ZfzuXJTjyGkuppx4c0V-MjDZo5VO68gmQ~1YxduHrAyWD1xp6RT12g96l~vgRlxoxgbrH9xBTJKd5ItJSOXHDveDuDKBy2AtrqeHtmzn5qP4UlwNXH-eIvIbZArArc7KLeBxGzg5smCC0redgnbtwjMELY3eG31K9cz591H5UORBYVlZq9Bo5Y1-ElqyvAzI63fneMQfkAWzmlj53rPFYvke8h-pdOSlgnfHwTB2zIShDfzeKSDN8CWd6u-V~SYw__',
      title: 'Buy Trendyol Striped Cotton Top - Tops fo...'
    },
    {
      img: 'https://media-hosting.imagekit.io/cdaae261acb94df4/phone1.jpeg?Expires=1839987237&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zCvPcw3wOY352zeJ8k5fwk0arG6Za3OOL4UCGZQ2p7AvxASBE~3cZRhDFSq7HjS3rmPZ~PNqlUbzMTw4w79pXyaq0bf2tamKSZtOzFaQMyt3xjGts5Nzi3RUD42zTFbtAee3wvXwkFC5opvpYrXiBUy0PSg~WtTbmeih4SlN4F56ByDiVTVBQONuiG0tqQ4b6zY~NFD0~4xAAUIk0MSt0YOAsfKEfWzXlSrrwCw5E6VC6o3lTWmuUj6nrZ1DZsaK529lTid4MHDvyHH6-grHuIWyRRIXAhAkFtyUjSKk-~Qpa8wP89suw2ym3hF9YKVT~oFWZ15HGs0baSqFi49j3A__',
      title: '$659*'
    },
    {
      img: 'https://media-hosting.imagekit.io/28807fe43f0c4bcd/phone.webp?Expires=1839987237&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2id5OrIFir~Q~0qrrfICvc3zUqEqB0qnvX9Zw1LTtyG~MNMEH8e9hEiBO4G7y~oEfJgbBic5kjC5sNL0BzjKT4Z2Hl0ZSvjSreNYciC5soJ7qbxwV~8G71qPtJ4YF1w0BbCBgNYIOg8Jh992-pVCXaZvt8WTYpPOKQOHR47vlnTfiy6akpmVgw2DAPUaD1iuLPWbggJyLVKmejzC3TXhxJlEs1h9mHz9DohBikfeqYIOQBVQzdNWvxqlrLwwnr-Scd4~iFrfYyb4JYetLIvuKuCQvL1Wpk-KTOfxjNLVMD8tBBKvUujwVvtffDOWJT5aQtG5wmXg3SteIeCAWkKkuw__',
      title: 'Amazon.com: GuliriFei Women\'s Two Piece...'
    },
    {
      img: 'https://media-hosting.imagekit.io/5ccd0f7780184459/phone2.webp?Expires=1839987237&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SZjuuE4mBOXk0bqz0sLns2cRmNLq5JRqJpc3XM1VXbGCwdd9My86tJdu3qA7FCSsccl3HQRIQZjPuTkj8cv6P4ZfzuXJTjyGkuppx4c0V-MjDZo5VO68gmQ~1YxduHrAyWD1xp6RT12g96l~vgRlxoxgbrH9xBTJKd5ItJSOXHDveDuDKBy2AtrqeHtmzn5qP4UlwNXH-eIvIbZArArc7KLeBxGzg5smCC0redgnbtwjMELY3eG31K9cz591H5UORBYVlZq9Bo5Y1-ElqyvAzI63fneMQfkAWzmlj53rPFYvke8h-pdOSlgnfHwTB2zIShDfzeKSDN8CWd6u-V~SYw__',
      title: 'Buy Trendyol Striped Cotton Top - Tops fo...'
    },
    {
      img: 'https://media-hosting.imagekit.io/28807fe43f0c4bcd/phone.webp?Expires=1839987237&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2id5OrIFir~Q~0qrrfICvc3zUqEqB0qnvX9Zw1LTtyG~MNMEH8e9hEiBO4G7y~oEfJgbBic5kjC5sNL0BzjKT4Z2Hl0ZSvjSreNYciC5soJ7qbxwV~8G71qPtJ4YF1w0BbCBgNYIOg8Jh992-pVCXaZvt8WTYpPOKQOHR47vlnTfiy6akpmVgw2DAPUaD1iuLPWbggJyLVKmejzC3TXhxJlEs1h9mHz9DohBikfeqYIOQBVQzdNWvxqlrLwwnr-Scd4~iFrfYyb4JYetLIvuKuCQvL1Wpk-KTOfxjNLVMD8tBBKvUujwVvtffDOWJT5aQtG5wmXg3SteIeCAWkKkuw__',
      title: 'Amazon.com: GuliriFei Women\'s Two Piece...'
    },
    {
      img: 'https://media-hosting.imagekit.io/cdaae261acb94df4/phone1.jpeg?Expires=1839987237&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zCvPcw3wOY352zeJ8k5fwk0arG6Za3OOL4UCGZQ2p7AvxASBE~3cZRhDFSq7HjS3rmPZ~PNqlUbzMTw4w79pXyaq0bf2tamKSZtOzFaQMyt3xjGts5Nzi3RUD42zTFbtAee3wvXwkFC5opvpYrXiBUy0PSg~WtTbmeih4SlN4F56ByDiVTVBQONuiG0tqQ4b6zY~NFD0~4xAAUIk0MSt0YOAsfKEfWzXlSrrwCw5E6VC6o3lTWmuUj6nrZ1DZsaK529lTid4MHDvyHH6-grHuIWyRRIXAhAkFtyUjSKk-~Qpa8wP89suw2ym3hF9YKVT~oFWZ15HGs0baSqFi49j3A__',
      title: '$659*'
    },
    {
      img: 'https://media-hosting.imagekit.io/28807fe43f0c4bcd/phone.webp?Expires=1839987237&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2id5OrIFir~Q~0qrrfICvc3zUqEqB0qnvX9Zw1LTtyG~MNMEH8e9hEiBO4G7y~oEfJgbBic5kjC5sNL0BzjKT4Z2Hl0ZSvjSreNYciC5soJ7qbxwV~8G71qPtJ4YF1w0BbCBgNYIOg8Jh992-pVCXaZvt8WTYpPOKQOHR47vlnTfiy6akpmVgw2DAPUaD1iuLPWbggJyLVKmejzC3TXhxJlEs1h9mHz9DohBikfeqYIOQBVQzdNWvxqlrLwwnr-Scd4~iFrfYyb4JYetLIvuKuCQvL1Wpk-KTOfxjNLVMD8tBBKvUujwVvtffDOWJT5aQtG5wmXg3SteIeCAWkKkuw__',
      title: 'Amazon.com: GuliriFei Women\'s Two Piece...'
    },
    {
      img: 'https://media-hosting.imagekit.io/5ccd0f7780184459/phone2.webp?Expires=1839987237&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SZjuuE4mBOXk0bqz0sLns2cRmNLq5JRqJpc3XM1VXbGCwdd9My86tJdu3qA7FCSsccl3HQRIQZjPuTkj8cv6P4ZfzuXJTjyGkuppx4c0V-MjDZo5VO68gmQ~1YxduHrAyWD1xp6RT12g96l~vgRlxoxgbrH9xBTJKd5ItJSOXHDveDuDKBy2AtrqeHtmzn5qP4UlwNXH-eIvIbZArArc7KLeBxGzg5smCC0redgnbtwjMELY3eG31K9cz591H5UORBYVlZq9Bo5Y1-ElqyvAzI63fneMQfkAWzmlj53rPFYvke8h-pdOSlgnfHwTB2zIShDfzeKSDN8CWd6u-V~SYw__',
      title: 'Buy Trendyol Striped Cotton Top - Tops fo...'
    },
  ];

  return (
      <>
       <ContentWrapper>
  
        <SearchForm>
        <BackIconButton type="button" onClick={() => navigate("/")}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
            <path d="M15.5 19.5 9 13l6.5-6.5L14 5l-8 8 8 8Z"/>
          </svg>
        </BackIconButton>
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

    <Container>
      <TabBar>
        <Tab active>All</Tab>
        <Tab>Products</Tab>
        <Tab>Visual matches</Tab>
        <Tab>About this image</Tab>
      </TabBar>

      <div style={{ marginBottom: '1rem', color: '#aaa', fontSize: '0.85rem' }}>Results for people are limited</div>

      <ResultGrid>
        {results.map((item, index) => (
          <ResultCard key={index}>
            <Img src={item.img} alt="result" />
            <div style={{ padding: '0.5rem' }}>{item.title}</div>
          </ResultCard>
        ))}
      </ResultGrid>

    </Container>
    <StickyFooter />
      </>

     
  );
};

export default ImageSearchResults;