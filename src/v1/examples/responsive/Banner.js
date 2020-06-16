import React from "react";
import Container from "../../components/Container";
import Description from "../../components/Description";
import Banner from "../../components/responsive/Banner";
import CardComp from "../../components/composition/Card";

const intro = `Banner - Media Query Component`;
const summary = `/// use media query`;
const code = `<>
  <Description text={intro} variant="large"></Description>
  <Container variant="large">
    <Banner>
      <h1>Beginner</h1>
      <h3>-asd asdf asdf-</h3>
    </Banner>
  </Container>
</>
`;
const props = { intro, summary, code };

const Comp = () => {
  return (
    <>
      <Container variant="large">
        <Banner>
          <h1>Beginner</h1>
          <h3>-asd asdf asdf-</h3>
        </Banner>
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
