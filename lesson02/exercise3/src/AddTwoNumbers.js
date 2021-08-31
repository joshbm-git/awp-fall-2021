function AddTwoNumbers(props) {
  // A component that takes two numbers as input (via props) and renders the sum inside a <p> tag.
  const { num1, num2 } = props;
  return (
    <p>
      {num1} + {num2} = {num1 + num2}
    </p>
  );
}

export default AddTwoNumbers;
