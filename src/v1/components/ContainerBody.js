import React from "react";
import styled from "styled-components";
import Container from "./Container";

/// Extends Container
/// - sharpen corners (static for now)
///   ... to modify to act top/body/bottom automatically from a single component
/// - props
///   { children, ...props }

const ContainerBody = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled(Container)`
  border-radius: 0;
  margin-top: 0;
  margin-bottom: 0;
  border-top-style: none;
  border-bottom-style: none;
`;

export default ContainerBody;
