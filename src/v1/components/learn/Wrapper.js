import React from "react";
import styled from "styled-components";

const background = "background: #111;",
  backgroundHover = "background: #999;";

const HeaderWrapper = styled.section`
    /* ${background} */
    /* .random: {color: #B9B111;} */
    transition: all 0.1s ease-in;
    &:hover {background: #999;}
`;

export const Header1 = () => {
  return <HeaderWrapper>==Header==</HeaderWrapper>;
};

export const HeaderProp = ({ message }) => {
  return <HeaderWrapper>{message || "--none!--"}</HeaderWrapper>;
};
