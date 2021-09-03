import React from "react";

function AddTwoNumbers(props) {
    // A component that takes two numbers as input (via props) and renders the sum inside a <p> tag.
    
    // const num1 = props.num1
    // const num2 = props.num2
    
    // Destructure
    const { num1, num2 } = props;
    return (
      <p>
        {num1} + {num2} = {num1 + num2}
      </p>
    );
  }
  
  export default AddTwoNumbers;