import styled from 'styled-components';


const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0 10px;
`;

const LogoImg = styled.div`
  width: 300px;
  margin-bottom: 20px;
  text-align: center;
`;

const SearchForm = styled.form`
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background: #303134;
  width: 100%;
  max-width: 390px;

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
  margin: 15px;
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