import styled from 'styled-components'

const StyledRow = styled.div`
  margin: 14px;
  padding: 14px;
  border: 1px solid rebeccapurple;

  ul {
    list-style-type: none;
  }

  .special {
    font-size: 2em;
    font-family: Consolas;
    color: pink;
    background-color: white;
  }

  @media (min-width: 800px) {
    width: 100%;
  }
`;

export default StyledRow