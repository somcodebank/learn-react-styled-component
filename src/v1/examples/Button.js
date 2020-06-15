import React from "react";
import Container from "../components/Container";
import Description from "../components/Description";
import ButtonComp from "../components/Button";
import CardComp from "../components/composition/Card";

const intro = `Button - Component`;
const summary = `/// basic styled component
/// - with pseudo class (hover)
/// - taking props`;
const code = `
<>
  <Description text={intro} variant="large"></Description>
  <Container variant="large">
    <ButtonComp variant="small">Small</ButtonComp>
    <ButtonComp>(Default)</ButtonComp>
    <ButtonComp variant="large">Large</ButtonComp>
  </Container>
</>
`;
const props = { intro, summary, code };

const Comp = () => {
  return (
    <>
      <Container variant="large">
        <ButtonComp variant="small">Small</ButtonComp>
        <ButtonComp>(Default)</ButtonComp>
        <ButtonComp variant="large">Large</ButtonComp>
      </Container>
    </>
  );
};
const Example = () => {
  return (
    <CardComp {...props}>
      <Comp />
    </CardComp>
  );
};

export default Example;
