import styled from "styled-components";

export const Main = styled.main`
  padding: 60px;
  justify-content: center;
`;

export const Form = styled.div`
  display: grid;
  grid-template: 40px 40px / 1fr 1fr;
  gap: 50px;
  margin-bottom: 40px;
`;

export const FormInput = styled.input`
  font-family: "Karla", sans-serif;
  border-radius: 5px;
  border: 1px solid #d5d4d8;
  text-indent: 5px;
`;

export const FormButton = styled.button`
  grid-column: 1 / -1;
  font-family: "Karla", sans-serif;
  border-radius: 5px;
  background: linear-gradient(90.41deg, #711f8d 1.14%, #a818da 100%);
  color: white;
  border: none;
  cursor: pointer;
  width: 50%;
  justify-self: center;
`;

export const MemeFlexbox = styled.div`
  display: flex;
  justify-content: center;
`;

export const MemeContainer = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  height: auto;
`;

export const MemeText = styled.h2`
  position: absolute;
  width: 80%;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  margin: 15px 0;
  padding: 0 5px;
  font-family: impact, sans-serif;
  font-size: 2em;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;
  z-index: 1;
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
    -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
    2px 2px 5px #000;

  &.bottom {
    bottom: 0;
  }

  &.top {
    top: 0;
  }
`;

export const MemeImage = styled.img`
  max-width: 100%;
  border-radius: 3px;
  width: 50vw;
`;
