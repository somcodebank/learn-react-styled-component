import styled from "styled-components";
import { phone } from "../MediaQ";

const Banner = styled.div`
  color: pink;
  background-color: #333;
  h1 {
    color: orange;
    text-transform: capitalize;
  }
  /* @media (min-width: 576px) {
    color: #333;
    background-color: pink;
    h1{
        color: blue;
        text-transform: lowercase;
    }
    } */
  ${phone`
    color: #333;
    background-color: pink;
    h1{
        color: olive;
        text-transform: lowercase;
    }`}
`;

export default Banner;
