import React from "react";
import ButtonExample from "./ButtonExample";
import InputTextExample from "./InputTextExample";
import HelloExample from "./HelloExample";
import NameListExample from "./NameListExample";
import NameListExample2 from "./NameListExample2";

function App() {
  return (
    <main>
      <h2>HelloExample</h2>
      <HelloExample justAName="fellow programmer" />

      <h2>ButtonExample</h2>
      <ButtonExample />

      <h2>InputTextExample</h2>
      <InputTextExample />

      <h2>NameListExample</h2>
      <NameListExample names={["Jes", "Dan", "Martin"]} />
      <NameListExample2 names={["Jes", "Dan", "Martin"]} />
    </main>
  );
}

export default App;
