import styled from "styled-components";
import variant from "./Variant";
import color from "./VariantColor";

/// basic styled component
/// - taking propsß
///   -- variant,
///   -- variantColor (color variant) - consists of color/backgroundColor/borderColor,
///   -- color - if provided, will overwrite value from variantColor,
///   -- backgroundColor - if provided, will overwrite value from variantColor,
///   -- borderColor - if provided, will overwrite value from variantColor
///

const lazyBorder = `border: 2px solid;`; // lazy, so set this as constant :)

const Container = styled.div`
  ${lazyBorder};
  ${(props) => color(props.variantColor)};
  ${(props) => variant(props.variant)};
  border-radius: 0.5rem;

${(props) => (props.color ? `color: ${props.color};` : ``)}
${(props) =>
  props.backgroundColor ? `background-color: ${props.backgroundColor};` : ``}
${(props) => (props.borderColor ? `border-color: ${props.borderColor};` : ``)}
`;

export default Container;
