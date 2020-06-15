import React from "react";
import styled from "styled-components";
import Container from "./Container";

/// Extends Container
/// - sharpen top left-right corners (static for now)
///   ... to modify to act top/body/bottom automatically from a single component
/// - props
///   { children, ...props }

const ContainerBottom = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled(Container)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: 0;
  border-top-style: none;
`;

export default ContainerBottom;
