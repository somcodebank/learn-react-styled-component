import React from "react";
import { GlobalStyle } from "../../components/learn/GlobalStyle";
import { Title } from "../../components/learn/Title";
import { Button as BasicButton } from "./Basic";
import { Header as WrapperHeader } from "./Wrapper";
import { Label as PropLabel } from "./Prop";
import { XButton } from "./Extend";

import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>styled components</h1>
      <section>
        <Title>Entending</Title>
        <XButton />
      </section>
      <section>
        <Title>Prop</Title>
        <PropLabel color="tomato">Prop Label - tomato</PropLabel>
        <PropLabel color="azure" background="chocolate">
          Prop Label - azure / chocolate
        </PropLabel>
      </section>
      <section>
        <Title>Wrapper</Title>
        <WrapperHeader />
      </section>
      <section>
        <Title>Basic</Title>
        <BasicButton />
      </section>
    </div>
  );
}

export default App;
