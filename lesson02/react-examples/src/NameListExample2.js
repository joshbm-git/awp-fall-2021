import React from "react";

function NameListExample2(props) {
  const { names } = props; // names is an array of strings

  const list = [];
  for (let name of names) {
    list.push(<li key={name}>{name}</li>);
  }

  return (
    <>
      <h3>The names</h3>
      <ol>{list}</ol>
    </>
  );
}

export default NameListExample2;
