import styled from "styled-components";
import variant from "./Variant";

/// basic styled component
/// - with pseudo class (hover)
/// - taking props

const Button = styled.button`
  color: orange;
  background-color: #666;
  ${(props) => variant(props.variant)}
  &:hover {
    color: #666;
    background-color: orange;
  }
`;

export default Button;
