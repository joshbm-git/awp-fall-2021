import React from "react";
function Task(props){
    return(<li>
        <input type="checkbox" checked={props.done}/> {props.task}
        </li>)
}

export default Task;