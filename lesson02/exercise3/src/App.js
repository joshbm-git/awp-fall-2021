import AddTwoNumbers from "./AddTwoNumbers";
import ListOfNumbers from "./ListOfNumbers";
import SumOfNumbers from "./SumOfNumbers";
import AddNumber from "./AddNumber";

function App() {
  const input = [2, 2, 2, 2, 12];

  return (
    <main>
      <h1>The Math App™</h1>

      <h2>Add Number</h2>
      <AddNumber />

      <h2>Add Two Numbers</h2>
      <AddTwoNumbers num1={2} num2={4} />

        <h2>Sum Of Numbers</h2>
        <SumOfNumbers array={input} />

      <h2>List Of Numbers</h2>
      <ListOfNumbers array={input} />
    </main>
  );
}

export default App;
