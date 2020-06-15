import React from "react";
import CardComp from "../components/composition/Card";
import DescriptionX from "../components/DescriptionX";

const intro = `Description - (Extending) Component`;
const summary = `/// Extends Container
/// Input - varaint, text
/// Wrapper - color, background color
`;
const code = `
<DescriptionX text={intro} variant="large"></DescriptionX>
`;
const props = { intro, summary, code };

const Comp = () => <DescriptionX text={intro} variant="large"></DescriptionX>;
const Example = () => {
  return (
    <CardComp {...props}>
      <Comp />
    </CardComp>
  );
};

export default Example;
