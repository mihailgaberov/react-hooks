import styled from 'styled-components'

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 2px solid white;
  border-bottom: 2px solid white;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
  }
`;

export default StyledContainer;