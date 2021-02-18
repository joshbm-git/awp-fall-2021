function SumOfNumbers(props) {
  // A component that takes an array of numbers and prints the sum inside a <p> tag.
  const { array } = props;

  let sum = 0;
  for (let n of array) {
    sum += n;
  }

  return (
    <p>
      {sum}
    </p>
  );
}

export default SumOfNumbers;
