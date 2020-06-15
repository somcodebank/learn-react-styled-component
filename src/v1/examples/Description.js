import React from "react";
import Description from "../components/Description";
import CardComp from "../components/composition/Card";
const intro = `Description - Component`;
const summary = `/// Composition - Container
/// Input - varaint, text`;
const code = `
<Description text={intro} variant="large"></Description>
`;
const props = { intro, summary, code };

const Comp = () => {
  return <Description text={intro} variant="large"></Description>;
};
const Example = () => {
  return (
    <CardComp {...props}>
      <Comp />
    </CardComp>
  );
};

export default Example;
