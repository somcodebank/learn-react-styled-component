import styled from "styled-components";

export const Label1 = styled.label`
  font-size: 2rem;
  color: ${(props) => props.color || "inherit"};
  background: ${(props) => props.background || "inherit"};
  text-transform: ${(props) => props.textTransform || "inherit"};
  border: 2px blue solid;
  border-radius: 2rem;
  margin: 0.5rem;
  padding: 0.5rem;
`;
