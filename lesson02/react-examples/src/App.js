import React from "react";
import ButtonExample from "./ButtonExample";
import InputTextExample from "./InputTextExample";
import HelloExample from "./HelloExample";
import NameListExample from "./NameListExample";
import NameListExample2 from "./NameListExample2";
import IsItFriday from "./IsItFriday";
import AddTwoNumbers from "./AddTwoNumbers";
import SumOfNumbers from "./SumOfNumbers";
import ListOfNumbers from "./ListOfNumbers";
import AddNumber from "./AddNumber";

function App() {
  const input = [2, 2, 2, 2, 12];

  return (
    <main>
      <h2>HelloExample</h2>
      <HelloExample justAName="fellow programmer" />

      <h2>Add Number</h2>
      <AddNumber />

      <h2>AddTwoNumbers</h2>
      <AddTwoNumbers num1={1} num2={2}/>

      <h2>Sum Of Numbers</h2>
      <SumOfNumbers array={input} />

      <h2>List Of Numbers</h2>
      <ListOfNumbers array={input} />

      <h2>IsItFriday</h2>
      <IsItFriday justAName="It is not"/>

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
