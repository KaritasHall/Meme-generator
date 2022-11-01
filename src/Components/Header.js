import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 65px;
  background: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);
  color: white;
  padding: 20px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1 className="title">Meme Generator</h1>
      <h4 className="author">Made by Karitas</h4>
    </StyledHeader>
  );
}
