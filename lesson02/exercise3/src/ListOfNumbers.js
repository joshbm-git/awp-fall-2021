function ListOfNumbers(props) {
  // A component that takes an array of numbers and renders it as an unordered HTML list.
  const { array } = props;

  return (
    <ul>
      {array.map((number, i) => (
        <li key={i}>{number}</li>
      ))}
    </ul>
  );
}

export default ListOfNumbers;
