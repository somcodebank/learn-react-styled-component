import React from "react";
import Description from "../components/Description";
import ContainerTop from "../components/ContainerTop";

const intro = `/// basic styled component
/// - taking propsß (variant, color, backgroundColor)
/// - internal variables

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
      <ContainerTop variant="large" color="orange">
        <div>Top1</div>
        <div>Top2</div>
      </ContainerTop>
    </>
  );
};

export default ContainerComp;
