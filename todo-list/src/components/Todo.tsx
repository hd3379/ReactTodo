import React from "react";

type prop = {
  name: string;
  completed: boolean;
  id: string;
}

function Todo(props : prop) {
  return (
    <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={props.completed} />
            <label className="todo-label" htmlFor={props.id}>
            {props.name}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">{props.name}</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">{props.name}</span>
            </button>
          </div>
        </li>
  );
}

export default Todo;