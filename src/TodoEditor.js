import { useRef, useState } from "react";
const TodoEditor = ({ onCreate }) => {
  const [todo, setTodo] = useState("");
  const handleInput = (e) => {
    setTodo(e.target.value);
  };
  const inputRef = useRef();
  const handleAdd = () => {
    if (todo.length < 2) {
      inputRef.current.focus();
    }
    onCreate(todo);
    setTodo("");
  };
  return (
    <div className="TodoEditor">
      <div>
        <h2>Simple Todo App</h2>
      </div>
      <div className="todoInput">
        <input value={todo} onChange={handleInput} ref={inputRef}></input>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default TodoEditor;
