import { useState } from 'react';
import { Link, navigate } from "@reach/router";

function Kitten(props) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  function deleteKitten() {
    props.deleteKitten(props.id);
    navigate("/");
  } 

  const kitten = props.getKitten(props.id);
  let content = <p>Loading</p>;
  if (kitten) {
    content =
      <>
        <h1>{kitten.name}</h1>

        <h3>Hobbies</h3>
        <ul>
          {kitten.hobbies.map((k, index) => <li key={index}>{k}</li>)}
        </ul>

        <input name="newHobby" onChange={handleChange} type="text" />
        <button onClick={() => props.addHobby(props.id, input)}
          type="submit">Add New Hobby</button>

        {/* TODO: Add DELETE kitten button! */}

        <button onClick={deleteKitten}
          type="submit">DELETE</button>

        <br />
        <Link to="/">Back</Link>
      </>
  }

  return content;
}

export default Kitten;
