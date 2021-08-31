import React from "react";

function NameListExample(props) {
  const { names } = props; // names is an array of strings

  return (
    <>
      <h3>The names</h3>
      <ol>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ol>
    </>
  );
}

export default NameListExample;
