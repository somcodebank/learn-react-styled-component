import React from "react";
import { Header1, HeaderProp } from "../../components/learn/Wrapper";

export const Header = () => {
  return (
    <>
      <Header1 />
      <HeaderProp />
      <HeaderProp message="title via prop!" />
    </>
  );
};
