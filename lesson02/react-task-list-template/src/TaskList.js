import React from "react";
import Task from "./Task";

function TaskList() {
// const result = [];
// for (const item of data) {
// result.push(
//   <li>
//     <input type="checkbox" checked={item.done}/> {item.task}
//   </li>

// )
return(

    <ul>
    {/* {result} */}
    {/* TODO: Map over the `data` array to render the items as <li>'s here */}
{data.map((item) => {
return<Task task={item.task} done={item.done}/>;
})}   
 
  </ul>
)
}


  export default TaskList;
