import styled from "styled-components";

const baseWhite = "#fff",
  baseGreen = "#459559";
const padding = "padding: 5rem;";
const margin = "margin: 1rem;";
const border = (width = 3) => `border: solid ${width}rem blue`;
export const Button1 = styled.button`
  color: ${baseWhite};
  text-transform: lowercase;
  background-color: ${baseGreen};
  ${padding}
  ${border()}
`;
export const Button2 = styled.button`
  color: ${baseGreen};
  text-transform: lowercase;
  background-color: ${baseWhite};
  ${margin}
  ${border(0.25)}
`;
