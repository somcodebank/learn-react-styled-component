import React from "react";
import Body from "../ContainerBody";
import Top from "../ContainerTop";
import Bottom from "../ContainerBottom";
import Description from "../Description";
/// Composition component
/// example
/// the following code snippet setup Card component
/// consists of
/// - Top (color variant - warning / but overwrite the background color)
/// - Body (default variants)
/// - Bottom (color variant - success)
///

const color = "#99bb99";
const backgroundColor = "#333";

const Card = ({ intro, summary, code, children }) => {
  return (
    <>
      <Top backgroundColor="olive">{intro}</Top>
      <Body backgroundColor="#ddd">
        <Description variant="large" text={summary} />
        {children}
      </Body>
      <Bottom variantColor="success">
        <Description text={code} />
      </Bottom>
    </>
  );
};

export default Card;
