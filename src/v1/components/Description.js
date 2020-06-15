import React from "react";
import Container from "./Container";

/// Composition - Container
/// Input - varaint, text

const color = "#55bb55";
const backgroundColor = "#333";

const Description = ({ variant, text }) => {
  return (
    <Container
      variant={variant}
      color={color}
      backgroundColor={backgroundColor}
    >
      <pre>{text || "..."}</pre>
    </Container>
  );
};

export default Description;
