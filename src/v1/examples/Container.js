import React from "react";
import Description from "../components/Description";

const intro = `/// component
/// basic styled component
/// - taking propsß
///   variant,
///   variantColor (color variant) - consists of color/backgroundColor/borderColor,
///   color - if provided, will overwrite value from variantColor,
///   backgroundColor - if provided, will overwrite value from variantColor,
///   borderColor - if provided, will overwrite value from variantColor
///

/// example
/// the following code snippet
/// not providing backgroundColor
/// - will be default bakcgroundColor 

<>
<Description text={intro} variant="large"></Description>
<Container variant="large" color="orange"></Container>
</>
`;

const ContainerComp = () => {
  return (
    <>
      <Description text={intro} variant="large"></Description>
      {/* <Container variant="large" color="orange"></Container> */}
    </>
  );
};

export default ContainerComp;
