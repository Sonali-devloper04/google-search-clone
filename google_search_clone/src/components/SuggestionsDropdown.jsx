import React from 'react';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const SuggestionItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const SuggestionsDropdown = ({ suggestions = [] }) => {
  return (
    <DropdownWrapper>
      {suggestions.length > 0 ? (
        suggestions.map((suggestion, index) => (
          <SuggestionItem key={index}>{suggestion.name}</SuggestionItem> 
        ))
      ) : (
        <div>No suggestions available</div>
      )}
    </DropdownWrapper>
  );
};

export default SuggestionsDropdown;
