function ListOfNumbers(props) {
  // A component that takes an array of numbers and renders it as an unordered HTML list.
  const { array } = props;

  const listOutput = [];
  for (let n of array) {
    listOutput.push(<li>{n}</li>);
  }

  return (
    <ul>
      {listOutput}
    </ul>
  );
}

export default ListOfNumbers;
