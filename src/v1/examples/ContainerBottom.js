import React from "react";
import Description from "../components/Description";
import ContainerBottom from "../components/ContainerBottom";

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
      <ContainerBottom variant="large" color="orange">
        <div>Bottom1</div>
        <div>Bottom2</div>
      </ContainerBottom>
    </>
  );
};

export default ContainerComp;
