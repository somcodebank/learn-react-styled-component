import React from "react";
import styled from "styled-components";
import Container from "./Container";

/// Extends Container
/// Input - varaint, text
/// Wrapper - color, background color

const color = "#55bb55";
const backgroundColor = "#666";

const Description = ({ variant, text }) => {
  return (
    <Wrapper variant={variant}>
      <pre>{text || "..."}</pre>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  color: ${color};
  background-color: ${backgroundColor};
`;

export default Description;
