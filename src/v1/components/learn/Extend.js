import styled from "styled-components";
import { Button1, Button2 } from "./Basic";
export const BigButton1 = styled(Button1)`
  padding: 2.5rem;
  font-size: 2rem;
  color: ${(props) => props.color || "inherit"};
`;
export const BigButton2 = styled(Button2)`
  padding: 3rem;
  font-size: 5rem;
  color: ${(props) => props.color || "inherit"};
`;
