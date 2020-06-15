import React from "react";
import CardComp from "../../components/composition/Card";
const intro = `Card - Composite Component`;
const summary = `/// Composition component
/// example
/// the following code snippet setup Card component
/// consists of
/// - Top (color variant - warning /
///   but overwrite the background color)
/// - Body (default variants)
/// - Bottom (color variant - success)
///`;
const code = `<>
<Description>{intro}</Description>
<Container>
  <Top variantColor="warning" backgroundColor="blue">
    <div>TOP...</div>
  </Top>
  <Body>
    <div>BODY...</div>
  </Body>
  <Bottom variantColor="success">
    <div>bottom...</div>
  </Bottom>
</Container>
</>
`;
const props = { intro, summary, code };
const Comp = () => <CardComp />;
const Example = () => {
  return (
    <CardComp {...props}>
      <Comp />
    </CardComp>
  );
};

export default Example;
