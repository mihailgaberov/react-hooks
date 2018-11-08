import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  cursor: pointer;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
  color: white;
  border: 2px solid white;

  :hover {
    background: white;
    color: rgb(219, 112, 147);
  }

  :disabled {
    opacity: .5;
    pointer: default;
    pointer-events: none;
  }
`;

export default StyledButton;