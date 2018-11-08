import styled from 'styled-components';

const StyledTitle = styled.h1`
  display: none;
  background-color: lightgray;
  color: white;
  padding: 14px;

  @media (min-width: 800px) {
    width: 100%;
    display: block;
  }
`;

export default StyledTitle;