import React from "react";
import styled from "styled-components";
import Container from "./Container";

/// Extends Container
/// - sharpen bottom left-right corners (static for now)
///   ... to modify to act top/body/bottom automatically from a single component
/// - props
///   { children, ...props }

const ContainerTop = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled(Container)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: 0;
  border-bottom-style: none;
`;

export default ContainerTop;
