import AddTwoNumbers from "./AddTwoNumbers";
import ListOfNumbers from "./ListOfNumbers";
import SumOfNumbers from "./SumOfNumbers";
import AddNumber from "./AddNumber";

function App() {
  const input = [2, 2, 2, 2, 12];

  return (
    <div className="App">
      <h1>My app!</h1>

      <AddNumber />
      <AddTwoNumbers num1={2} num2={4} />
      <SumOfNumbers array={input} />
      <ListOfNumbers array={input} />
    </div>
  );
}

export default App;
